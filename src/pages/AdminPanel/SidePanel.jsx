import React from "react";
import "./SidePanel.css";

const SidePanel = ({
  users,
  currentUser,
  setSelectedChat,
  setSelectedUser,
}) => {
  return (
    <div className="sidePanel">
      <h2>Contacts</h2>
      {users.map((user, index) => (
        <div
          key={index}
          className={`contact ${user.name === currentUser ? "active" : ""}`}
          onClick={() => {
            setSelectedChat(user.key);
            setSelectedUser(user.name);
          }}
        >
          <div
            style={{
              padding: 10,
              borderRadius: 50,
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 700,
              width: 50,
              aspectRatio: 1 / 1,
            }}
          >
            {user.name.slice(0, 1).toUpperCase()}
          </div>
          <div className="userInfo">
            <h3>{user.name}</h3>
            <p>{user.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidePanel;
