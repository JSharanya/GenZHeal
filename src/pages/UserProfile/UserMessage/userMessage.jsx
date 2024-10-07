import React from "react";

import "./userMessage.css";

import ReactEmoji from "react-emoji";

const userMessage = ({
  message: { sender, message, sentAt },
  currentUser,
  name,
}) => {
  const trimmedName = name;

  // const messageClass = isSentByCurrentUser ? 'justifyEnd' : 'justifyStart';
  // const boxClass = isSentByCurrentUser ? 'backgroundBlue colorWhite' : 'backgroundLight colorDark';
  // const textClass = isSentByCurrentUser ? 'pl-10' : 'pr-10';

  return sender === currentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(message)}</p>
        <p className="messageText colorWhite">{message}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(message)}</p>
      </div>
      {/* <p className="sentText pl-10 ">{user}</p> */}
    </div>
  );
};

export default userMessage;
