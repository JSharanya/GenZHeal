import React from 'react';
import { FaUserCircle, FaCog, FaCalendarAlt, FaHistory, FaComments, FaSignOutAlt, FaClock } from 'react-icons/fa';
import './Profile.css';

const UserDashboard = () => {
  return (
    <div className="App">
      <div className="UserDashboard">
        <div className="Profile">
          <FaUserCircle size={50} />
          <h3 className="UserName">Your Name</h3>
          <p className="UserEmail">yourname@gmail.com</p>
        </div>
        <div className="Menu">
          <div className="MenuItem"><FaUserCircle className="Icon" /> My Profile</div>
          <div className="MenuItem"><FaCog className="Icon" /> Settings</div>
          <div className="MenuItem"><FaCalendarAlt className="Icon" /> Appointments</div>
          <div className="MenuItem"><FaClock className="Icon" /> Sessions</div>
          <div className="MenuItem"><FaHistory className="Icon" /> TreatmentHistory</div>
          <div className="MenuItem"><FaComments className="Icon" /> Chat</div>
          <div className="MenuItem"><FaSignOutAlt className="Icon" /> Log Out</div>
        </div>
      </div>
      <div className="MainContent">
        <header className="Header">
          <input className="SearchBar" placeholder="Search here" />
          <div className="NotificationIcon">🔔</div>
        </header>
        <div className="UserProfile">
          <div className="Card">Appointments</div>
          <div className="Card">Chats</div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
