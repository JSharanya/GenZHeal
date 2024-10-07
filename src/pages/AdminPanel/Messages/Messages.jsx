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
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages && messages.length > 0 ? (
      messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))
    ) : (
      <div>No messages yet. Start the conversation!</div>
    )}
  </ScrollToBottom>
);

export default Messages;
