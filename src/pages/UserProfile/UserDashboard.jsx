import React, { useState } from 'react';
import { FaUserCircle, FaCog, FaCalendarAlt, FaHistory, FaComments, FaSignOutAlt, FaClock } from 'react-icons/fa';
import UserProfile from './UserProfile';
import './Profile.css';
import { Outlet, Link } from 'react-router-dom';
import { PiBrainBold } from "react-icons/pi";

const UserDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <div className="App">
      <div className="Sidebar">
        <div className="ml-10">
            <Link
              to="/"
              className="text-2xl font-extrabold text-bermuda flex items-center gap-2 self-center whitespace-nowrap dark:text-white px-2 py-1"
            >
              <PiBrainBold className="inline-block" /> GenZHeal
            </Link>
        </div>
          <Outlet />

        <div className="Menu">
          <div className="MenuItem" onClick={() => handleMenuClick('My Profile')}><FaUserCircle className="Icon" /> My Profile</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Settings')}><FaCog className="Icon" /> Settings</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Appointments')}><FaCalendarAlt className="Icon" /> Appointments</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Sessions')}><FaClock className="Icon" /> Sessions</div>
          <div className="MenuItem" onClick={() => handleMenuClick('TreatmentHistory')}><FaHistory className="Icon" /> Treatment History</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Chat')}><FaComments className="Icon" /> Chat</div>
          <div className="MenuItem" onClick={() => handleMenuClick('Log Out')}><FaSignOutAlt className="Icon" /> Log Out</div>
        </div>
      </div>
      <div className="MainContent">
        <div className="ContentWrapper">
          {activeMenu === '' && <div className="Placeholder">Select menu</div>}
          <UserProfile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;




