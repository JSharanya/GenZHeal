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
import SidePanel from './SidePanel'; // Import the new SidePanel component
import queryString from 'query-string';
import io from "socket.io-client";
import TextContainer from './TextContainer';
import Messages from './Messages/Messages';
import InfoBar from './InfoBar';
import Input from './Input';
import './Chat.css';

let socket;

const Chatting = ({ activeSection, messagesRef }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Sample contact data
    const sampleContacts = [
        { name: 'Lisa Roy', status: 'Online', avatar: 'https://via.placeholder.com/40' },
        { name: 'Jamie Taylor', status: 'Offline', avatar: 'https://via.placeholder.com/40' },
        { name: 'Jason Roy', status: 'Online', avatar: 'https://via.placeholder.com/40' },
        { name: 'Amy Frost', status: 'Offline', avatar: 'https://via.placeholder.com/40' },
        { name: 'Paul Wilson', status: 'Busy', avatar: 'https://via.placeholder.com/40' },
        { name: 'Ana Williams', status: 'Online', avatar: 'https://via.placeholder.com/40' },
    ];

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io();
        setRoom(room);
        setName(name);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
      <div className="chatContainer">
          <SidePanel users={sampleContacts} currentUser={name} />
          <div className="chatArea">
              <div ref={messagesRef} className={`${activeSection === 'messages' ? 'block' : 'hidden'}`}>
                  <div className="outerContainer">
                      <div className="container">
                    
                          <InfoBar room={room} />
                          <Messages messages={messages} name={name} />
                          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  );
  
}

export default Chatting;
