import React, { useState, useEffect } from "react";
import "./Profile.css";
import p1img from "../../images/patient1.jpeg";

const UserProfile = ({ activeMenu }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    // Your logic to send the message
    console.log("Message sent:", message);
    setMessage("");
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
      [name]: value,
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
    { appointNo: 1, date: "2023-12-14", time: "09:00 AM", finished: "Yes" },
    { appointNo: 2, date: "2023-12-21", time: "11:00 AM", finished: "Yes" },
    { appointNo: 3, date: "2024-01-01", time: "12:00 AM", finished: "Yes" },
    { appointNo: 4, date: "2024-02-15", time: "11:00 AM", finished: "Yes" },
    { appointNo: 5, date: "2024-06-08", time: "10:00 AM", finished: "Yes" },
    { appointNo: 6, date: "2024-06-15", time: "11:00 AM", finished: "Yes" },
    { appointNo: 7, date: "2024-06-22", time: "12:00 AM", finished: "Yes" },
    { appointNo: 8, date: "2024-07-01", time: "11:00 AM", finished: "No" },
  ];

  const getFinished = (finished) => {
    switch (finished) {
      case "Yes":
        return "bg-red-500";
      case "No":
        return "bg-green-500";
      default:
        return "";
    }
  };
  const sessions = [
    { SessionNo: 1, Date: "2023-12-14", Time: "09:00 AM", Level: "High" },
    { SessionNo: 2, Date: "2023-12-21", Time: "11:00 AM", Level: "Low" },
    { SessionNo: 3, Date: "2024-01-01", Time: "12:00 AM", Level: "Average" },
    { SessionNo: 4, Date: "2024-01-16", Time: "11:00 AM", Level: "Low" },
    { SessionNo: 5, Date: "2024-01-01", Time: "12:00 AM", Level: "Average" },
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
    {
      treatmentNo: 1,
      date: "2023-12-14",
      time: "09:00 AM",
      document: "report1.pdf",
    },
    {
      treatmentNo: 2,
      date: "2023-12-21",
      time: "11:00 AM",
      document: "report2.pdf",
    },
    {
      treatmentNo: 3,
      date: "2024-01-01",
      time: "12:00 AM",
      document: "report3.pdf",
    },
    {
      treatmentNo: 4,
      date: "2024-02-15",
      time: "11:00 AM",
      document: "report4.pdf",
    },
    {
      treatmentNo: 5,
      date: "2024-06-08",
      time: "10:00 AM",
      document: "report5.pdf",
    },
    {
      treatmentNo: 6,
      date: "2024-06-15",
      time: "11:00 AM",
      document: "report6.pdf",
    },
    {
      treatmentNo: 7,
      date: "2024-06-22",
      time: "12:00 AM",
      document: "report7.pdf",
    },
  ];
  const chats = [
    { name: "Doctor", message: "Hello, how can I help you today?" },
    { name: "Me", message: "I have a question about my upcoming appointment." },
  ];

  return (
    <div className="UserProfileContent">
      {activeMenu === "My Profile" && !isEditing && (
        <div className="UserDetails">
          <div>
            <section class="py-10 my-auto dark:bg-gray-900">
              <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                <div class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                  <div class="">
                    <h1 class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                      Profile
                    </h1>
                    <h2 class="text-grey text-sm mb-4 dark:text-gray-400">
                      Create Profile
                    </h2>
                    <form>
                      <div>
                        <div class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                          <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                            <input
                              type="file"
                              name="profile"
                              id="upload_profile"
                              hidden
                              required
                            />

                            <label for="upload_profile">
                              <svg
                                data-slot="icon"
                                class="w-6 h-5 text-blue-700"
                                fill="none"
                                stroke-width="1.5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                ></path>
                              </svg>
                            </label>
                          </div>
                        </div>
                        <div class="flex justify-end">
                          <input
                            type="file"
                            name="profile"
                            id="upload_cover"
                            hidden
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <div class="bg-white overflow-hidden shadow rounded-lg border mt-5">
                          <div class="border-t border-bermuda px-4 py-5 sm:p-0">
                            <dl class="sm:divide-y sm:divide-gray-200">
                              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                  Full name
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  User123
                                </dd>
                              </div>
                              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                  Email address
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  user123@gmail.com
                                </dd>
                              </div>
                              <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                  Address
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  123 Main S Trinco ,Srulanka
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <button className="EditProfileButton" onClick={handleEditClick}>
            Change
          </button>
        </div>
      )}
      {activeMenu === "My Profile" && isEditing && (
        // <div className="EditProfileForm">
        //   <h2>Edit Profile</h2>
        //   <div className="FormRow">
        //     <label>UserName:</label>
        //     <input type="text" defaultValue="Your Name" />
        //   </div>
        //   <div className="FormRow">
        //     <label>Email:</label>
        //     <input type="email" defaultValue="yourname@gmail.com" />
        //   </div>
        //   <div className="FormRow">
        //     <label>Address:</label>
        //     <input type="email" defaultValue="Your Address" />
        //   </div>

        //   <div className="FormRow">
        //     <label>Profile Image:</label>
        //     <input
        //       type="file"
        //       name="profileImage"
        //       onChange={(e) =>
        //         setFormData({ ...formData, profileImage: e.target.files[0] })
        //       }
        //     />
        //   </div>
        //   <div className="FormButtons">
        //     <button onClick={handleSaveClick}>Save</button>
        //     <button onClick={() => setIsEditing(false)}>Cancel</button>
        //   </div>

        // </div>

        <div class="w-full">
          <div class="mt-3 text-center text-4xl font-bold">Edit Profile</div>
          <div class="mx-14 mt-10 border-2 bg-white overflow-hidden shadow rounded-lg ">
            <form>
              <div class="p-8">
                <div class="flex gap-4">
                  <label
                    class="mt-1 block font-semibold bg-white px-5 text-center py-4 "
                    placeholder="Your Name"
                  >
                    {" "}
                    User Name :-
                  </label>
                  <input
                    type="text"
                    class="mt-1 block w-3/4 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div class="my-6 flex gap-4">
                <label
                    class="mt-1 block font-semibold bg-white px-5 text-center py-4 "
                  
                  >
                    {" "}
                    User Email: :-
                  </label>
                  <input
                    type="email"
                    class="mt-1 block w-3/4 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="user@gmail.com"
                  />
                </div>
                <div class="my-6 flex gap-4">
                <label
                    class="mt-1 block font-semibold bg-white px-5 text-center py-4 "
                  
                  >
                    {" "}
                    User Address :-
                  </label>
                  <input
                    type="text"
                    class="mt-1 block w-3/4 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="User Address"
                  />
                </div>

                <div class="my-6 flex gap-4">
                <label
                    class="mt-1 block font-semibold bg-white px-5 text-center py-4 "
                  
                  >
                    {" "}
                    Profile Image:-
                  </label>
                  <input
                    type="file"
                    class="mt-1 block w-3/4  px-3 py-4 "
                    name="profileImage"
              onChange={(e) =>
            setFormData({ ...formData, profileImage: e.target.files[0]})}
                  />
                </div>

                <div class="text-center flex justify-end ">
                  <button
                    class="cursor-pointer mr-4 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    class="cursor-pointer rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeMenu === "Appointments" && (
        <>
          <h2>Appointments</h2>

          <div>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
              <table class="w-full table-fixed border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Appointment Number
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Appointment Date
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Appointment Time
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Appointment Finished
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
                            appointment.finished
                          )} text-white py-1 px-2 rounded-full text-xs`}
                        >
                          {appointment.finished}
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
          <h2>Sessions</h2>

          <div>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
              <table class="w-full table-fixed border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Session Nor
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Session Date
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Session FinishedTime
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
                      <td className="py-4 px-6 border-0">{session.Time}</td>
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
          <h2>Treatment History</h2>

          <div>
            <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
              <table class="w-full table-fixed border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Treatment Nor
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Treatment Date
                    </th>
                    <th class="w-1/4 py-4 px-6 text-left text-gray-100 font-bold uppercase bg-[#2c4f50]">
                      Treatment Time
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

      {activeMenu === "Chat" && (
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
                <button className="sendButton" onClick={(e) => sendMessage(e)}>
                  Send
                </button>
              </form>
            </div>
          )}
        </>
      )}

      {activeMenu === "Settings" && (
        <>
          <div class="mt-3 text-center text-4xl font-bold">Change Password</div>
          {/* <form>
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
              <button type="button" onClick={handlePasswordSave}>
                Save
              </button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form> */}

          <div class="w-full">
            <div class="mx-14 mt-10 border-2 bg-white overflow-hidden shadow rounded-lg ">
              <form>
                <div class="p-8">
                  <div class="flex gap-4">
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                      placeholder="Current Password"
                    />
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                      placeholder="New Password"
                    />
                  </div>
                  <div class="my-6 flex gap-4">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                      placeholder="Confirm New Password"
                    />
                  </div>

                  <div class="text-center flex justify-end ">
                    <button
                      class="cursor-pointer mr-4 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
                      onClick={handlePasswordSave}
                    >
                      Save
                    </button>
                    <button
                      class="cursor-pointer rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
