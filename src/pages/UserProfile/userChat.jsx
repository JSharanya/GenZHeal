import React, { useState, useEffect } from "react";
// import p1img from "../../images/patient1.jpeg";
import queryString from "query-string";
import io from "socket.io-client";
import UserMessage from "./UserMessage/userMessage";
import UserInfobar from "./userInfobar";
import { onValue, ref, getDatabase, get, set, push } from "firebase/database";
import app from "../../FirebaseConfig";
import { useSelector } from "react-redux";
import "./userChat.css";
import "./userInput.css";
import "./UserMessage/userMessage.css";
import moment from "moment/moment";

import ReactEmoji from "react-emoji";

const userChat = ({ activeSection, messagesRef }) => {
  const [name, setName] = useState("Jhon");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const userDetails = useSelector((state) => state.user.currentUser);
  const trimmedName = name;
  const db = getDatabase(app);

  let socket;

  useEffect(() => {
    console.log("userdetails", userDetails);
    const dbRef = ref(db, `chats/${userDetails._id}/messages`);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        // console.log(`Data:`, snapshot.val());
        if (snapshot.exists()) {
          const data = Object.entries(snapshot.val())
            .map(([key, value]) => ({
              ...value,
              key,
            }))
            .sort((a, b) => a.sentAt - b.sentAt);
          setMessages(data);
        } else {
          setMessages([]);
        }
      },
      (error) => {
        console.error;
        setMessages([]);
      }
    );
    return () => unsubscribe;
  }, [db]);

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
  }, [, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = async () => {
    if (message) {
      const dbRef = ref(db, `chats/${userDetails._id}`);

      const data = (
        await get(ref(db, `chats/${userDetails._id}/messages`))
      ).val();

      console.log("data", data);

      if (data) {
        push(dbRef, {
          sender: userDetails._id,
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
      } else {
        set(ref(db, `chats/${userDetails._id}`), {
          messages: {
            first: {
              sender: userDetails._id,
              message,
              seen: false,
              sentAt: Date.now(),
            },
          },
          name: userDetails.username,
          createdAt: Date.now(),
        }).then(() => {
          setMessage("");
        });
      }
    }
  };

  return (
    <div>
      <div ref={messagesRef}>
        <div className="outerContainer">
          <div className="container">
            <UserInfobar room={room} name={userDetails.username} />
            <div>
              {messages &&
                messages.map((item, index) => {
                  return item.sender === userDetails._id ? (
                    <div key={index} className="messageContainer justifyEnd">
                      <p className="sentText pr-10">
                        {moment(item.sentAt).format("hh:mm a")}
                      </p>
                      <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">
                          {ReactEmoji.emojify(item.message)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="messageContainer justifyStart">
                      <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">
                          {ReactEmoji.emojify(item.message)}
                        </p>
                      </div>
                      {/* <p className="sentText pl-10 ">{user}</p> */}
                    </div>
                  );
                })}
            </div>
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
              <button className="sendButton" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
          {/* <UserTextcontainer users={users}/> */}
        </div>
      </div>
    </div>
  );
};

export default userChat;
