import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import UserMessage from '../UserMessage/userMessage';

import './userMessages.css';

const userMessages = ({ messages, name }) => (
  <>
    {messages.map((message, i) => <div key={i}><UserMessage message={message} name={name}/></div>)}
  
  </>
);

export default userMessages;
