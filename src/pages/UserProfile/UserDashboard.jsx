import React, { useState } from 'react';
import { FaUserCircle, FaCog, FaCalendarAlt, FaHistory, FaComments, FaSignOutAlt, FaClock } from 'react-icons/fa';
import UserProfile from './UserProfile';
import { Link, useNavigate } from 'react-router-dom';
import { PiBrainBold } from "react-icons/pi";
import UserChat from "./userChat"


const UserDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('My Profile');
  const navigate = useNavigate();

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <div className="flex">
      <div className="Sidebar flex flex-col items-center bg-gray-800 text-white w-64 min-h-screen py-8">
        <div className="mb-8">
          <Link to="/" className="text-2xl font-extrabold text-teal-500 flex items-center gap-2">
            <PiBrainBold className="inline-block" /> GenZHeal
          </Link>
        </div>
        <div className="Menu w-full space-y-4"> 
          <div className="MenuItem cursor-pointer py-2 px-4 flex items-center hover:bg-gray-700" onClick={() => handleMenuClick('My Profile')}>
            <FaUserCircle className="mr-2" /> My Profile
          </div>
          <div className="MenuItem cursor-pointer py-2 px-4 flex items-center hover:bg-gray-700" onClick={() => handleMenuClick('Settings')}>
            <FaCog className="mr-2" /> Settings
          </div>
          <div className="MenuItem cursor-pointer py-2 px-4 flex items-center hover:bg-gray-700" onClick={() => handleMenuClick('Appointments')}>
            <FaCalendarAlt className="mr-2" /> Appointments
          </div>
          <div className="MenuItem cursor-pointer py-2 px-4 flex items-center hover:bg-gray-700" onClick={() => handleMenuClick('Sessions')}>
            <FaClock className="mr-2" /> Sessions
          </div>
          <div className="MenuItem cursor-pointer py-2 px-4 flex items-center hover:bg-gray-700" onClick={() => handleMenuClick('TreatmentHistory')}>
            <FaHistory className="mr-2" /> Treatment History
          </div>
          <div className="MenuItem cursor-pointer py-2 px-4 flex items-center hover:bg-gray-700" onClick={() => handleMenuClick('Chat')}>
            <FaComments className="mr-2" /> Chat
          </div>
          <div className="MenuItem cursor-pointer py-2 px-4 flex items-center hover:bg-gray-700" onClick={()=>navigate('/signin')}>
            <FaSignOutAlt className="mr-2"/> Log Out
          </div>
        </div>
      </div>
      <div className="ContentWrapper flex-1 p-8">

        {activeMenu === 'My Profile' && <UserProfile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />}
        {activeMenu === 'Settings' && <UserProfile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />}
        {activeMenu === 'Appointments' && <UserProfile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />}  
        {activeMenu === 'Sessions' && <UserProfile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />}
        {activeMenu === 'TreatmentHistory' && <UserProfile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />} 
        {activeMenu === 'Chat' && <UserChat/>}
       

      </div>
    </div>
  );
};

export default UserDashboard;
