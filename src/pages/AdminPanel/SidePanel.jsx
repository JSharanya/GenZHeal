import React from 'react';
import './SidePanel.css';

const SidePanel = ({ users, currentUser }) => {
  return (
    <div className="sidePanel">
      <h2>Contacts</h2>
      {users.map((user) => (
        <div key={user.name} className={`contact ${user.name === currentUser ? 'active' : ''}`}>
          <img src={user.avatar} alt={`${user.name}'s avatar`} className="avatar" />
          <div className="userInfo">
            <h3>{user.name}</h3>
            <p>{user.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SidePanel;
