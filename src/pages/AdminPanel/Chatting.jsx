import React, { useState, useEffect } from "react";
// import p1img from "../../images/patient1.jpeg";
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
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
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
       <div ref={messagesRef} className={`${activeSection === 'messages' ? 'block' : 'hidden'}`}>
            <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
            </div>

        </div>
  );
}

export default Chatting;

