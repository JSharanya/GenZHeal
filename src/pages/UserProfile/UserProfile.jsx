import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import html2pdf from 'html2pdf.js';
import axios from 'axios';


const UserProfile = ({ activeMenu }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    fullName: "User123",
    email: "user123@gmail.com",
    address: "123 Main S Trinco, Sri Lanka",
    profileImage: "https://via.placeholder.com/150",
  });


  const [formData, setFormData] = useState({ ...user });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userDetails, setUserDetails] = useState({});

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handlePasswordSave = async () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;
  
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required.");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
  
    try {
      const userdataaa = localStorage.getItem('currentUser');
      const user = userdataaa ? JSON.parse(userdataaa) : null;
      const id = user?._id;
  
      const response = await fetch(`http://localhost:3000/api/user/profile/changepassword/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,  
        },
        body: JSON.stringify({
          currentPassword: currentPassword,
          newPassword: newPassword,
        }),
      });
  
      if (response.ok) {
        setPasswordError("");
        alert("Password updated successfully");
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        const errorResponse = await response.json();
        setPasswordError(errorResponse.message || "Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setPasswordError("An error occurred while updating the password");
    }
  };
  


 const[appointments,setAppointments]=useState([]);
 const[loading, setLoading]=useState(false);

 useEffect(() => {
   const fetchAppointments = async () => {
     try {
       const response = await axios.get('http://localhost:3000/api/appointment/getAppointment');
       console.log(response.data); 

       const currentUserEmail = localStorage.getItem('currentUser') 
       ? JSON.parse(localStorage.getItem('currentUser')).email 
       : '';
       
       const filteredAppointments = response.data.filter(
        (appointment) => appointment.email === currentUserEmail
      );
      console.log("appointment data",filteredAppointments)

      console.log(emailID);


      setAppointments(filteredAppointments);
     } catch (err) {
       console.error('Error fetching data:', err);
       setError(err.message);
     } finally {
       setLoading(false);
     }
   };
 
   fetchAppointments();
 }, []);
 


  useEffect(() => {
    const userdataaa = localStorage.getItem("currentUser");
    const user = userdataaa ? JSON.parse(userdataaa) : null;
    const id = user?._id;

    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/user/profile/${id}`
        );
        const data = await response.json();
        setUserDetails(data);
        setFormData({
          username: data?.username || "",
          email: data?.email || "",
          address: data?.address || "",
          profileImage:
            data?.profilePicture || "https://via.placeholder.com/150",
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (id) fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

 
  const handleSave = async () => {
    if (!validateEmail(formData.email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      const userdataaa = localStorage.getItem("currentUser");
      const user = userdataaa ? JSON.parse(userdataaa) : null;
      const id = user?._id;

      const response = await fetch(
        `http://localhost:3000/api/user/profile/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            address: formData.address,
            profilePicture: formData.profileImage,
          }),

        }
      );
      console.log(formData.address)


      if (response.ok) {
        const updatedUser = await response.json();
        setUserDetails(updatedUser);
        setUser(formData);
        setIsEditing(false);
        setError("");
        alert("Profile updated successfully");
        console.log(formData?.address.street);
        window.location.reload();
      } else {
        setError("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("An error occurred while updating the profile");
    }
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
    setError("");
  };

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
 
 const [treatments, setAllDoc]=useState([])

  const[username,setUsername] = useState('');
  const[emailID,setEmail]  = useState('');

  useEffect(() => {

    const currentUser = localStorage.getItem('currentUser');
  
    
    if (currentUser) {
      const userObject = JSON.parse(currentUser);
      
      const username = userObject.username;
      const email = userObject.email;

      setUsername(username)
      setEmail(email)

      console.log("Username:", username);
      console.log(email)
    } else {
      console.log("No user found in localStorage");
    }
  }, []);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (username) {
        try {
          const response = await fetch("http://localhost:3000/api/documents/all-doc");
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();

          const filteredDocs = data.filter(doc => doc.docName === username);
          setAllDoc(filteredDocs);
  
          console.log("Filtered Documents:", filteredDocs);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
    };
  
    fetchDocuments();
  }, [username]);

  const downloadPDF = (treatment) => {
   
    const filename = treatment.docum.split('\\').pop(); 
    const pdfFilename = `${filename}.pdf`;
  
    const url = `http://localhost:3000/api/documents/download-pdf/${filename}`; 
  
    
    const link = document.createElement('a');
    link.href = url; 
    link.setAttribute('download', pdfFilename); 
  
    
    document.body.appendChild(link);
    link.click(); 
  
    document.body.removeChild(link);
  };
  
  
  useEffect(() => {
    console.log("Treatments updated:", treatments);
  }, [treatments]);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); 
    const year = date.getFullYear();
  

    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    const dayWithSuffix = day + getOrdinalSuffix(day);
  
    return `${dayWithSuffix} ${month} ${year}`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-5xl mx-auto">
      {activeMenu === "My Profile" && (
        <>
          {isEditing ? (
            <div>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Edit Profile</h1>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src={userDetails?.profilePicture}
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData?.username}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData?.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {error && (
                  <p className="text-red-500 text-xs italic">{error}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData?.address.street}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleSave}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
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
                  src={userDetails?.profilePicture}
                  alt="User"
                  className="rounded-full h-32 w-32 border-4 border-teal-500"
                />
              </div>
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">
                      Full name
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700">
                      {userDetails?.username}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">
                      Email address
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700">
                      {userDetails?.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700 font-bold">
                      Address
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300 text-gray-700">
                    {userDetails?.address?.street || 'No street provided'}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {activeMenu === "Settings" && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Change Password</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="currentPassword"
            >
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}

          {passwordData.newPassword !== passwordData.confirmPassword &&
            passwordData.confirmPassword !== "" && (
              <p className="text-red-500 text-xs italic">
                Passwords do not match
              </p>
            )}
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePasswordSave}
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Update Password
            </button>
          </div>
        </div>
      )}
       {activeMenu === "Appointments" && (
        <>
          {/* <h2>Appointments</h2> */}
{/* edit 2 start */}
          <div>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
              <table class="w-full table-fixed border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Appointment Id
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Date
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Time
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Payment Status
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
                        {appointment.appointmentId}
                      </td>
                      <td class="py-4 px-6 border-b border-0 truncate">
                        {new Date(appointment.appointmentDate).toLocaleDateString()}
                      </td>
                      <td class="py-4 px-6 border-b border-0">
                        {new Date(appointment.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="py-4 px-6 border-b border-0">
  <span
    className={appointment.paymentStatus ? 'text-green-500' : 'text-red-500'}
  >
    {appointment.paymentStatus ? 'Paid' : 'Pending'}
  </span>
</td>
                      <td className="py-4 px-6 border-b border-0">
                          {appointment.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
{/* edit 2 end */}
            </div>
          </div>
        </>
      )}

      {activeMenu === "TreatmentHistory" && (
        <>
          {/* <h2>Treatment History</h2> */}
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/3 sm:w-1/4 py-4 px-2 sm:px-4 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                Treatment No
              </th>
              <th className="w-1/3 sm:w-1/4 py-4 px-2 sm:px-4 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                Date
              </th>
              <th className="w-1/3 sm:w-1/4 py-4 px-2 sm:px-4 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                Treatment Document
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {treatments.map((treatment, index) => (
              <tr key={index}>
                <td className="py-4 px-2 sm:px-4 border-b">
                {index+1}
                </td>
                <td className="py-4 px-2 sm:px-4 border-b truncate">
                <div className="text-sm text-gray-500">
                {formatDate(treatment.date)}

                </div>
                
                </td>
                <td className="py-4 px-2 sm:px-4 border-b">
                  <div id="treatmentDocument" style={{ display: 'none' }}>
                  <span className="text-sm text-gray-500">
                                  {treatment.docum}
                                </span>
                  </div>
                  <button
                    className="bg-[#2c4f50] text-white py-2 px-4 rounded-md hover:bg-[#3a6262] focus:outline-none"
                    onClick={() => downloadPDF(treatment)}
                  >
                    Download as PDF
                  </button>
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