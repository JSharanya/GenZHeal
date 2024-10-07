// import React from 'react';

// import ScrollToBottom from 'react-scroll-to-bottom';

// import Message from '../Message/Message';

// import './Messages.css';

// const Messages = ({ messages, name }) => (
//   <ScrollToBottom className="messages">
//     {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
//   </ScrollToBottom>
// );

// export default Messages;
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import "./Messages.css";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "../../../FirebaseConfig";
const db = getDatabase(app);
import ReactEmoji from "react-emoji";
import "../Message/Message.css";

const Messages = ({ name, chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, `chats/${chatId}/messages`);
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

  // const messageClass = isSentByCurrentUser ? "justifyEnd" : "justifyStart";
  // const boxClass = isSentByCurrentUser
  //   ? "backgroundBlue colorWhite"
  //   : "backgroundLight colorDark";

  return (
    <>
      {messages && messages.length > 0 ? (
        messages.map((item, i) => (
          <div
            key={i}
            className={`messageContainer ${
              item.sender == "admin" ? "justifyEnd" : "justifyStart"
            }`}
          >
            {item.sender === "admin" ? (
              <>
                <p className="sentText pr-10">{name}</p>
                <div
                  className={`messageBox ${
                    item.sender == "admin"
                      ? "backgroundBlue colorWhite"
                      : "backgroundLight colorDark"
                  }`}
                >
                  <p className="messageText">
                    {ReactEmoji.emojify(item.message)}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`messageBox ${
                    item.sender == "admin"
                      ? "backgroundBlue colorWhite"
                      : "backgroundLight colorDark"
                  }`}
                >
                  <p className="messageText">
                    {ReactEmoji.emojify(item.message)}
                  </p>
                </div>
                {/* <p className="sentText pl-10">{user}</p> */}
              </>
            )}
          </div>
        ))
      ) : (
        <div>No messages yet. Start the conversation!</div>
      )}
    </>
  );
};

export default Messages;
