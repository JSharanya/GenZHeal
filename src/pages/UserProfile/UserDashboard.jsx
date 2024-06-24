import React, {useState} from 'react';
import { FaUserCircle, FaCog, FaCalendarAlt, FaHistory, FaComments, FaSignOutAlt, FaClock } from 'react-icons/fa';
import UserProfile from './UserProfile'
import './Profile.css';

const UserDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('');
  
    const handleMenuClick = (menuItem) => {
      setActiveMenu(menuItem);
    };
  return (
    <div className="App">
      <div className="UserDashboard">
        <div className="Profile">
          <FaUserCircle size={50} />
          <h3 className="UserName">Your Name</h3>
          <p className="UserEmail">yourname@gmail.com</p>
        </div>
        <div className="Menu">
          <div className="MenuItem" onClick={() => handleMenuClick('My Profile')}><FaUserCircle className="Icon" /> My Profile</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Settings')}><FaCog className="Icon" /> Settings</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Appointments')}><FaCalendarAlt className="Icon" /> Appointments</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Sessions')}><FaClock className="Icon" /> Sessions</div>
          <div className="MenuItem" onClick={() => handleMenuClick('TreatmentHistory')}><FaHistory className="Icon" /> TreatmentHistory</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Chat')}><FaComments className="Icon" /> Chat</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Log Out')}><FaSignOutAlt className="Icon" /> Log Out</div>
        </div>
      </div>
      <div className="MainContent">
        <header className="Header">
          <input className="SearchBar" placeholder="Search here" />
          <div className="NotificationIcon">🔔</div>
        </header>
       
        {['My Profile', 'Settings'].includes(activeMenu) && (
          <UserProfile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
        )}
        {activeMenu === '' && <div className="Placeholder">Select menu</div>}  
      </div>
    </div>
  );
};

export default UserDashboard;
