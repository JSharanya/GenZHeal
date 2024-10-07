// import React, { useState, useEffect } from "react";
// // import p1img from "../../images/patient1.jpeg";
// import queryString from 'query-string';
// import io from "socket.io-client";

// import TextContainer from './TextContainer';
// import Messages from './Messages/Messages';
// import InfoBar from './InfoBar';
// import Input from './Input';

// import './Chat.css';

// let socket;

// const Chatting = ({ activeSection, messagesRef }) => {
//     const [name, setName] = useState('');
//     const [room, setRoom] = useState('');
//     const [users, setUsers] = useState('');
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);

//     const sampleMessages = [
//       { user: 'jane', text: 'Hi John, how are you?' },
//       { user: 'suthakaran', text: 'I am good, thank you! How about you?' },
//       { user: 'jane', text: 'I am doing well, thanks for asking!' },
//       { user: 'suthakaran', text: 'What are you up to today?' },
//       { user: 'jane', text: 'Just working on a project, you?' },
//     ];

//     useEffect(() => {
//       const { name, room } = queryString.parse(location.search);

//       socket = io();

//       setRoom(room);
//       setName(name)

//       socket.emit('join', { name, room }, (error) => {
//         if(error) {
//           alert(error);
//         }
//       });
//     }, [, location.search]);

//     useEffect(() => {
//       socket.on('message', message => {
//         setMessages(messages => [ ...messages, message ]);
//       });

//       socket.on("roomData", ({ users }) => {
//         setUsers(users);
//       });
//   }, []);

//     const sendMessage = (event) => {
//       event.preventDefault();

//       if(message) {
//         socket.emit('sendMessage', message, () => setMessage(''));
//       }
//     }

//     return (
//       <div>
//        <div ref={messagesRef} className={`${activeSection === 'messages' ? 'block' : 'hidden'}`}>
//             <div className="outerContainer">
//       <div className="container">
//           <InfoBar room={room} />
//           <Messages messages={messages} name={name} />
//           <Messages messages={sampleMessages} name="suthakaran" />
//           <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
//       </div>
//       <TextContainer users={users}/>
//     </div>
//             </div>

//         </div>
//   );
// }

// export default Chatting;

import React, { useState, useEffect } from "react";
// Import your components
import SidePanel from "./SidePanel"; // Import the new SidePanel component
import queryString from "query-string";
import io from "socket.io-client";
import TextContainer from "./TextContainer";
import Messages from "./Messages/Messages";
import InfoBar from "./InfoBar";
import Input from "./Input";
import "./Chat.css";
import { get, onValue, getDatabase, ref, push } from "firebase/database";
import app from "../../FirebaseConfig";

let socket;

const Chatting = ({ activeSection, messagesRef }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const db = getDatabase(app);
  const [selectedChat, setSelectedChat] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  console.log("key", selectedChat);

  useEffect(() => {
    const unsubscribe = onValue(
      ref(db, `chats`),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = Object.entries(snapshot.val()).map(([key, item]) => ({
            ...item,
            key,
          }));
          setUsers(data);
        } else {
          setUsers([]);
        }
      },
      (error) => {
        console.error(error);
        setUsers([]);
      }
    );

    return () => unsubscribe;
  }, []);

  // Sample contact data
  //   const sampleContacts = [
  //     {
  //       name: "Lisa Roy",
  //       status: "Online",
  //       avatar: "https://via.placeholder.com/40",
  //     },
  //     {
  //       name: "Jamie Taylor",
  //       status: "Offline",
  //       avatar: "https://via.placeholder.com/40",
  //     },
  //     {
  //       name: "Jason Roy",
  //       status: "Online",
  //       avatar: "https://via.placeholder.com/40",
  //     },
  //     {
  //       name: "Amy Frost",
  //       status: "Offline",
  //       avatar: "https://via.placeholder.com/40",
  //     },
  //     {
  //       name: "Paul Wilson",
  //       status: "Busy",
  //       avatar: "https://via.placeholder.com/40",
  //     },
  //     {
  //       name: "Ana Williams",
  //       status: "Online",
  //       avatar: "https://via.placeholder.com/40",
  //     },
  //   ];

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io();
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      //   socket.emit("sendMessage", message, () => setMessage(""));
      const dbRef = ref(db, `chats/${selectedChat}/messages`);
      push(dbRef, {
        sender: "admin",
        message,
        seen: false,
        sentAt: Date.now(),
      })
        .then(() => {
          setMessage("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="chatContainer">
      <SidePanel
        users={users}
        currentUser={name}
        setSelectedChat={setSelectedChat}
        setSelectedUser={setSelectedUser}
      />
      {selectedChat && (
        <div className="chatArea">
          <div
            ref={messagesRef}
            className={`${activeSection === "messages" ? "block" : "hidden"}`}
          >
            <div className="outerContainer">
              <div className="container">
                <InfoBar
                  room={room}
                  name={selectedUser}
                  setSelectedChat={setSelectedChat}
                />
                <Messages
                  messages={messages}
                  name={name}
                  chatId={selectedChat}
                />
                <div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    onKeyPress={(event) =>
                      event.key === "Enter" ? sendMessage(event) : null
                    }
                  />
                  <button
                    className="sendButton"
                    onClick={(e) => sendMessage(e)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatting;
