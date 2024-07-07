import React, { useState,useEffect } from 'react';
import './Profile.css';
import p1img from "../../images/patient1.jpeg";

const UserProfile = ({ activeMenu }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');


  const sendMessage = (e) => {
    e.preventDefault();
    // Your logic to send the message
    console.log('Message sent:', message);
    setMessage('');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

const handlePasswordChange = (e) => {
  const { name, value } = e.target;
  setPasswordData((prevState) => ({
    ...prevState,
    [name]: value
  }));
};

const handlePasswordSave = () => {
  
  setIsEditing(false);
};

const handleCancel = () => {
  setIsEditing(false);
};
const [newMessage, setNewMessage] = useState(false); 

useEffect(() => {
  
  const interval = setInterval(() => {
    setNewMessage(true);
  }, 5000);

  return () => clearInterval(interval);
}, []);
const handleNewMessageClick = () => {
  setNewMessage(false); 
  
};

  const appointments = [
    { date: '2023-12-14', time: '09:00 AM', finished: 'Yes' },
    { date: '2023-12-21', time: '11:00 AM', finished: 'Yes' },
    { date: '2024-01-01', time: '12:00 AM', finished: 'Yes' },
    { date: '2024-02-15', time: '11:00 AM', finished: 'Yes' },
    { date: '2024-06-08', time: '10:00 AM', finished: 'Yes' },
    { date: '2024-06-15', time: '11:00 AM', finished: 'Yes' },
    { date: '2024-06-22', time: '12:00 AM', finished: 'Yes' },
    { date: '2024-07-01', time: '11:00 AM', finished: 'No' },
    
  ];
  const sessions = [
    { SessionNo: 1, Date: '2023-12-14', Time: '09:00 AM', Level: 'High' },
    { SessionNo: 2, Date: '2023-12-21', Time: '11:00 AM', Level: 'Low' },
    { SessionNo: 3, Date: '2024-01-01', Time: '12:00 AM', Level: 'Average' },
    { SessionNo: 4, Date: '2024-01-16', Time: '11:00 AM', Level: 'Low' },
    { SessionNo: 5, Date: '2024-01-01', Time: '12:00 AM', Level: 'Average' },    
  ];
  const treatments = [
    { date: '2023-12-14', time: '09:00 AM', document: 'report1.pdf' },
    { date: '2023-12-21', time: '11:00 AM', document: 'report2.pdf' },
    { date: '2024-01-01', time: '12:00 AM', document: 'report3.pdf' },
    { date: '2024-02-15', time: '11:00 AM', document: 'report4.pdf' },
    { date: '2024-06-08', time: '10:00 AM', document: 'report5.pdf' },
    { date: '2024-06-15', time: '11:00 AM', document: 'report6.pdf' }, 
    { date: '2024-06-22', time: '12:00 AM', document: 'report7.pdf' },     
  ];
  const chats = [
    { name: 'Doctor', message: 'Hello, how can I help you today?' },
    { name: 'Me', message: 'I have a question about my upcoming appointment.' },
  ];  


  return (
  <div className="UserProfileContent">
  {activeMenu === 'My Profile' && !isEditing && (
    <div className="UserDetails">
      <div className="ProfilePhoto">
      <img
                width="200"
                src={p1img}
                alt="patient1"
                className="rounded-full mb-3"
      />
      </div>
      <table>
        <tbody>
          <tr>
            <td>UserName</td>
            <td>Thadsha</td>
          </tr>

          <tr>
            <td>Email</td>
            <td>thadsha@gmail.com</td>
          </tr>

          </tbody>
          </table>
      <button className="EditProfileButton" onClick={handleEditClick}>Change</button>

    </div>

  )}
  {activeMenu === 'My Profile' && isEditing && (
    <div className="EditProfileForm">
      <h2>Edit Profile</h2>
      <div className="FormRow">
        <label>UserName:</label>
        <input type="text" defaultValue="Your Name" />
      </div>
      <div className="FormRow">
        <label>Email:</label>
        <input type="email" defaultValue="yourname@gmail.com" />
      </div>
      
      <div className="FormRow">
            <label>Profile Image:</label>
            <input
              type="file"
              name="profileImage"
            onChange={(e) => setFormData({ ...formData, profileImage: e.target.files[0] })}
           />
          </div>
      <div className="FormButtons">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    </div>
  )}
    {activeMenu === 'Settings' && (
      <>
        <h2>Change Password</h2>
        <form>
          <div className="FormRow">
            <label>Current Password:</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="FormRow">
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="FormRow">
            <label>Confirm New Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="FormButtons">
            <button type="button" onClick={handlePasswordSave}>Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </>
    )}
    {activeMenu === 'Appointments' && (
      <>
        <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Finished</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.finished}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    ) }
     {activeMenu === 'Sessions' && (
      <>
          <h2>Sessions</h2>
          <table>
            <thead>
              <tr>
                <th>Session No</th>
                <th>Date</th>
                <th>FinishedTime</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr key={index}>
                  <td>{session.SessionNo}</td>
                  <td>{session.Date}</td>
                  <td>{session.Time}</td>
                  <td>{session.Level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
    ) }

    {activeMenu === 'TreatmentHistory' && (
    <>
      <h2>Treatment History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Document</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment, index) => (
            <tr key={index}>
              <td>{treatment.date}</td>
              <td>{treatment.time}</td>
              <td><a href={`/${treatment.document}`} download>{treatment.document}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    )}

{activeMenu === 'Chat' && (
      <>
          <div className="Chat">
            <h2>Chats</h2>
            <div className="ChatList">
              {chats.map((chat, index) => (
                <div key={index} className="ChatItem">
                  <div className="ChatDetails">
                    <div className="ChatName">{chat.name}</div>
                    <div className="ChatMessage">{chat.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {newMessage && (
            <div className="Notification">
              
              <button onClick={handleNewMessageClick}></button>
              <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
            </div>
          )}
      </>
    ) }

  </div>
  );
};

export default UserProfile;


