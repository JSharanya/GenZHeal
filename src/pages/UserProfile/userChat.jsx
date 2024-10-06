import React, { useState, useEffect } from "react";
// import p1img from "../../images/patient1.jpeg";
import queryString from 'query-string';
import io from "socket.io-client";

import UserTextcontainer from './userInfobar';
import UserMessages from './userMessages/userMessages';
import UserInfobar from './userInfobar';
import UserInput from './userInput';

import './userChat.css';

let socket;


const userChat = ({ activeSection, messagesRef }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    const sampleMessages = [
      { user: 'jane', text: 'Hi John, how are you?' },
      { user: 'suthakaran', text: 'I am good, thank you! How about you?' },
      { user: 'jane', text: 'I am doing well, thanks for asking!' },
      { user: 'suthakaran', text: 'What are you up to today?' },
      { user: 'jane', text: 'Just working on a project, you?' },
    ];
  
    useEffect(() => {
      const { name, room } = queryString.parse(location.search);
  
      socket = io();
  
      setRoom(room);
      setName(name)
  
      socket.emit('join', { name, room }, (error) => {
        if(error) {
          alert(error);
        }
      });
    }, [, location.search]);
    
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []);
  
    const sendMessage = (event) => {
      event.preventDefault();
  
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }



    return (
      <div>
       <div ref={messagesRef}>
            <div className="outerContainer">
      <div className="container">
          <UserInfobar room={room} />
          <UserMessages messages={messages} name={name} />
          <UserMessages messages={sampleMessages} name="suthakaran" />
          <UserInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <UserTextcontainer users={users}/> */}
    </div>
            </div>

        </div>
  );
}

export default userChat;

