import React, { useState } from 'react';
import './Profile.css';
import p1img from "../../images/patient1.jpeg";

const UserProfile = ({ activeMenu }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

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
    {  message: 'Hi, How about tomorrow Service' },
    {  message: 'Hi, How about tomorrow Service' },
    {  message: 'Hi, How about tomorrow Service' },
    {  message: 'Hi, How about tomorrow Service' },
    {  message: 'Hi, How about tomorrow Service' },
    {  message: 'Hi, How about tomorrow Service' },
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
            <td>FullName</td>
            <td>Thadsha Selvaratnam</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>thadsha@gmail.com</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>Jaffna</td>
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
        <label>FullName:</label>
        <input type="text" defaultValue="your fullName"/>
      </div>  
      <div className="FormRow">
        <label>Email:</label>
        <input type="email" defaultValue="yourname@gmail.com" />
      </div>
      <div className="FormRow">
        <label>Address:</label>
        <input type="text" defaultValue="Your Address" />
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
      <div className="chat column">
        <h2>Admin Chats</h2>
        <div className="ChatList">
          {chats.map((chat, index) => (
            <div key={index} className="ChatItem">
              <img src="path/to/profile.jpg" alt="profile" className="ChatProfilePhoto" />
              <div className="ChatDetails">
                <div className="ChatName">{chat.name}</div>
                <div className="ChatMessage">{chat.message}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </>
    ) }

  </div>
  );
};

export default UserProfile;


