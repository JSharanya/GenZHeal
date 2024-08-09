import React, { useState } from 'react';

const UserProfile = ({ activeMenu }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    fullName: 'User123',
    email: 'user123@gmail.com',
    address: '123 Main S Trinco, Sri Lanka',
    profileImage: 'https://via.placeholder.com/150',
  });

  const [formData, setFormData] = useState({ ...user });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSave = () => {
    if (!validateEmail(formData.email)) {
      setError('Enter a valid email address');
      return;
    }

    setUser(formData);
    setIsEditing(false);
    setError('');
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
    setError('');
  };

  const handlePasswordSave = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    if (currentPassword !== 'currentPassword123') {
      setPasswordError('You entered an invalid password');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    

    setPasswordError('');
    alert('Password updated successfully');
  };

  const appointments = [
    { appointNo: 1, date: "2023-12-14", time: "09:00 AM",Status: "Confirmed" },
    { appointNo: 2, date: "2023-12-21", time: "11:00 AM",Status: "Confirmed" },
    { appointNo: 3, date: "2024-01-01", time: "12:00 AM",Status: "Confirmed" },
    { appointNo: 4, date: "2024-02-15", time: "11:00 AM",Status: "Confirmed" },
    { appointNo: 5, date: "2024-06-08", time: "10:00 AM",Status: "Confirmed" },
    { appointNo: 6, date: "2024-06-15", time: "11:00 AM",Status: "Cancelled" },
    { appointNo: 7, date: "2024-06-22", time: "12:00 AM",Status: "Cancelled" },
    { appointNo: 8, date: "2024-07-01", time: "11:00 AM",Status: "Cancelled" },
  ];
  const getFinished = (Status) => {
    switch (Status) {
      case "Confirmed":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "";
    }
  };
  const sessions = [
    { SessionNo: 1, Date: "2023-12-14", STime: "09:00 AM", FTime: "09:30 AM", Level: "High" },
    { SessionNo: 2, Date: "2023-12-21", STime: "11:00 AM", FTime: "11:30 AM", Level: "Low" },
    { SessionNo: 3, Date: "2024-01-01", STime: "12:00 AM", FTime: "12:30 AM", Level: "Average" },
    { SessionNo: 4, Date: "2024-01-16", STime: "11:00 AM", FTime: "12:30 AM", Level: "Low" },
    { SessionNo: 5, Date: "2024-01-01", STime: "12:00 PM", FTime: "01:00 PM",Level: "Average" },
  ];

  const getLevelClass = (level) => {
    switch (level) {
      case "High":
        return "bg-green-500";
      case "Average":
        return "bg-yellow-500";
      case "Low":
        return "bg-red-500";
      default:
        return "";
    }
  };
  const treatments = [
    {treatmentNo: 1, date: "2023-12-14",time: "09:00 AM",document: "report1.pdf"},
    {treatmentNo: 2, date: "2023-12-21",time: "11:00 AM",document: "report2.pdf"},
    {treatmentNo: 3, date: "2024-01-01",time: "12:00 AM",document: "report3.pdf"},
    {treatmentNo: 4, date: "2024-02-15",time: "11:00 AM",document: "report4.pdf"},
    {treatmentNo: 5, date: "2024-06-08",time: "10:00 AM",document: "report5.pdf"},
    {treatmentNo: 6, date: "2024-06-15",time: "11:00 AM",document: "report6.pdf"},
    
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl mx-auto">
      {activeMenu === 'My Profile' && (
        <>
          {isEditing ? (
            <div>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Edit Profile</h1>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src={formData.profileImage}
                  alt="User"
                  className="rounded-full h-32 w-32 border-4 border-teal-500"
                />
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="ml-4 mt-4"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-center mt-4">
                <button onClick={handleSave} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                  Save
                </button>
                <button onClick={handleCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Profile</h1>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src={user.profileImage}
                  alt="User"
                  className="rounded-full h-32 w-32 border-4 border-teal-500"
                />
              </div>
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Full name</td>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{user.fullName}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Email address</td>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{user.email}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">Address</td>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700">{user.address}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center mt-4">
                <button onClick={() => setIsEditing(true)} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Edit
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {activeMenu === 'Settings' && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Change Password</h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
              Current Password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {passwordData.newPassword !== passwordData.confirmPassword && passwordData.confirmPassword !== '' && (
            <p className="text-red-500 text-xs italic">Passwords do not match</p>
          )}
          <div className="flex justify-center mt-4">
            <button onClick={handlePasswordSave} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
              Update Password
            </button>
          </div>
        </div>
      )}
      {activeMenu === "Appointments" && (
        <>
          {/* <h2>Appointments</h2> */}

          <div>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
              <table class="w-full table-fixed border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Appointment No
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Date
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Time
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {appointments.map((appointment, index) => (
                    <tr key={appointment}>
                      <td class="py-4 px-6 border-b border-0">
                        {appointment.appointNo}
                      </td>
                      <td class="py-4 px-6 border-b border-0 truncate">
                        {appointment.date}
                      </td>
                      <td class="py-4 px-6 border-b border-0">
                        {appointment.time}
                      </td>
                      <td className="py-4 px-6 border-0">
                        <span
                          className={`${getFinished(
                            appointment.Status
                          )} text-white py-1 px-2 rounded-full text-xs`}
                        >
                          {appointment.Status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {activeMenu === "Sessions" && (
        <>
          {/* <h2>Sessions</h2> */}

          <div>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
              <table class="w-full table-fixed border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Session No
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Session Date
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      StartTime
                    </th>                    
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      FinishedTime
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Session Level
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {sessions.map((session) => (
                    <tr key={session.SessionNo}>
                      <td className="py-4 px-6 border-0">
                        {session.SessionNo}
                      </td>
                      <td className="py-4 px-6 border-0 truncate">
                        {session.Date}
                      </td>
                      <td className="py-4 px-6 border-0">{session.STime}</td>
                      <td className="py-4 px-6 border-0">{session.FTime}</td>                    
                      <td className="py-4 px-6 border-0">
                        <span
                          className={`${getLevelClass(
                            session.Level
                          )} text-white py-1 px-2 rounded-full text-xs`}
                        >
                          {session.Level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {activeMenu === "TreatmentHistory" && (
        <>
          {/* <h2>Treatment History</h2> */}

          <div>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
              <table class="w-full table-fixed border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Treatment No
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Date
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Time
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Treatment Document
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {treatments.map((treatment) => (
                    <tr key={treatment}>
                      <td className="py-4 px-6 border-0">
                        {treatment.treatmentNo}
                      </td>
                      <td className="py-4 px-6 border-0 truncate">
                        {treatment.date}
                      </td>
                      <td className="py-4 px-6 border-0">{treatment.time}</td>
                      <td className="py-4 px-6 border-0">
                        <a href={`/${treatment.document}`} download>
                          {treatment.document}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}     
    </div>
  );
};

export default UserProfile;
