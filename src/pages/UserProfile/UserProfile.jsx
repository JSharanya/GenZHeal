import React, { useState } from 'react';
import './Profile.css';

const UserProfile = ({ setActiveMenu, activeMenu }) => {
  const [formData, setFormData] = useState({
    username: 'Your name',
    email: 'yourname@gmail.com',
    address: '',
    phone: '',
    profileImage: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleProfileSave = () => {
    console.log('Profile updated:', formData);
    setActiveMenu('');
  };

  const handlePasswordSave = () => {
    console.log('Password changed:', passwordData);
    setActiveMenu('');
  };

  const handleCancel = () => {
    console.log('Edit cancelled');
    setActiveMenu('');
  };

  return (
    <div className="EditProfileForm">
      {activeMenu === 'My Profile' ? (
        <>
          <h2>Edit Profile</h2>
          <form>
            <div className="FormRow">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleProfileChange}
              />
            </div>
            <div className="FormRow">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleProfileChange}
              />
            </div>
            <div className="FormRow">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleProfileChange}
              />
            </div>
            <div className="FormRow">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleProfileChange}
              />
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
              <button type="button" onClick={handleProfileSave}>Save</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </>
      ) : (
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
    </div>
  );
};

export default UserProfile;
