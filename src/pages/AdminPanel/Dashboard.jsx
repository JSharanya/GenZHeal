// import React from 'react';
import React, { useState, useRef } from 'react';
import { FaCog, FaCalendarAlt, FaFilm, FaComments, FaSignOutAlt, FaTachometerAlt, FaUsers, FaRegFileAlt } from 'react-icons/fa';
import docimg from "../../images/doctor.png";
import p1img from "../../images/patient1.jpeg";
import p2img from "../../images/patient2.png";


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showForm, setShowForm] = useState(false);

  const appointmentRef = useRef(null);
  const dashboardRef = useRef(null);
  const messagesRef = useRef(null);
  const patientsRef = useRef(null);
  const documentsRef = useRef(null);
  const settingsRef = useRef(null);
  const virtualclubRef = useRef(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    switch (section) {
      case 'dashboard':
        dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'appointment':
        appointmentRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'messages':
        messagesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'patients':
        patientsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'documents':
        documentsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'settings':
        settingsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'virtualclub':
        virtualclubRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }

  };


  return (
    <div className="h-full h-screen overflow-y-auto pt-0 mt-0">
      {/* Navbar */}
      <nav className="fixed">
        {/* Navbar content */}

      </nav>

      {/* Main content and sidebar container */}
      <div className="flex h-full ">

        {/* Sidebar */}
        <aside className="bg-gray-200 w-64 p-4 mt-0 pt-0 h-full fixed">

          <img
            width="600"
            height="600"
            src={docimg}
            alt="Doctor"
            className="mx-auto rounded-full"
          />

          <div className="ml-4 text-lg">
            <h4>Dr. S. Suthakaran</h4>
            <br />
            <ul>
              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('dashboard')}>
                  <FaTachometerAlt className="Icon" />
                  <span>Dashboard</span>
                </button>
              </li>


              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('appointment')}>
                  <FaCalendarAlt className="Icon" />
                  <span>Appointment</span>
                </button>
              </li>

              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('messages')}>
                  <FaComments className="Icon" />
                  <span>Messages</span>
                </button>
              </li>

              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('patients')}>
                  <FaUsers className="Icon" />
                  <span>Patients</span>
                </button>
              </li>

              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('documents')}>
                  <FaRegFileAlt className="Icon" />
                  <span>Documents</span>
                </button>
              </li>

              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('virtualclub')}>
                  <FaFilm className="Icon" />
                  <span>virtualclub</span>
                </button>
              </li>

              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('settings')}>
                  <FaCog className="Icon" />
                  <span>Settings</span>
                </button>
              </li>



              <li className="mb-4">
                <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('logout')}>
                  <FaSignOutAlt className="Icon" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>



        {/* Main content */}
        <section className="ml-80 mt-0 pt-0 h-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content */}

          <div ref={dashboardRef} className={`${activeSection === 'dashboard' ? 'block' : 'hidden'}`} >
            <div class="pt-24">
              <h1>Hello! Mr.S.Suthakaran</h1>
              <p>Welcome to the  GenZheal dashboard.</p>
            </div>

            <div class="flex ">
              <div className="w-full px-2">
                <div className="w-full px-2">
                  <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">

                    <div class="flex justify-between mb-2">
                      <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                        Appointments
                      </h3>
                      <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Edit
                      </button>
                    </div>

                    <div class="h-72 overflow-y-auto">

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sankavi</p>
                          <p class="ml-auto mr-2">finished</p>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p2img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">PID002</p>
                          <p class="ml-auto mr-2">12:00</p>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p2img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">PID001</p>
                          <p class="ml-auto mr-2">12:30</p>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sangu</p>
                          <p class="ml-auto mr-2">01:00</p>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sangu</p>
                          <p class="ml-auto mr-2">01:00</p>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sangu</p>
                          <p class="ml-auto mr-2">01:00</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div className="w-full px-2">
                <div className="w-full px-2">
                  <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">

                    <div class="flex justify-between mb-2">
                      <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                        Messages
                      </h3>
                      <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Edit
                      </button>
                    </div>

                    <div class="h-72 overflow-y-auto">
                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sankavi</p>
                          <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sankavi</p>
                          <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sankavi</p>
                          <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sankavi</p>
                          <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sankavi</p>
                          <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                        </div>
                      </div>

                      <div class="w-full px-2 mb-2 mt-4">
                        <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                          <img
                            width="30"
                            src={p1img}
                            alt="patient1"
                            className="rounded-full mr-3"
                          />
                          <p class="text-base font-medium text-body-color">Sankavi</p>
                          <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="w-full px-2">
              <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">

                <div class="flex justify-between mb-2">
                  <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    Patients
                  </h3>
                  <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    Edit
                  </button>
                </div>

                <div class="flex overflow-x-auto space-x-8 pb-4 px-4">
                  <div class="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3  shadow-md shadow-gray-500 flex-shrink-0">
                    <img
                      width="150"
                      src={p1img}
                      alt="patient1"
                      className="rounded-full mb-3"
                    />
                    <p class="text-base font-medium text-body-color mb-1">
                      Sankavi
                    </p>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      See detail
                    </button>
                  </div>

                  <div class="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3  shadow-md shadow-gray-500 flex-shrink-0">
                    <img
                      width="150"
                      src={p1img}
                      alt="patient1"
                      className="rounded-full mb-3"
                    />
                    <p class="text-base font-medium text-body-color mb-1">
                      Sankavi
                    </p>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      See detail
                    </button>
                  </div>

                  <div class="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3  shadow-md shadow-gray-500 flex-shrink-0">
                    <img
                      width="150"
                      src={p1img}
                      alt="patient1"
                      className="rounded-full mb-3"
                    />
                    <p class="text-base font-medium text-body-color mb-1">
                      Sankavi
                    </p>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      See detail
                    </button>
                  </div>

                  <div class="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3  shadow-md shadow-gray-500 flex-shrink-0">
                    <img
                      width="150"
                      src={p1img}
                      alt="patient1"
                      className="rounded-full mb-3"
                    />
                    <p class="text-base font-medium text-body-color mb-1">
                      Sankavi
                    </p>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      See detail
                    </button>
                  </div>

                  <div class="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3  shadow-md shadow-gray-500 flex-shrink-0">
                    <img
                      width="150"
                      src={p1img}
                      alt="patient1"
                      className="rounded-full mb-3"
                    />
                    <p class="text-base font-medium text-body-color mb-1">
                      Sankavi
                    </p>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      See detail
                    </button>
                  </div>

                  <div class="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3  shadow-md shadow-gray-500 flex-shrink-0">
                    <img
                      width="150"
                      src={p1img}
                      alt="patient1"
                      className="rounded-full mb-3"
                    />
                    <p class="text-base font-medium text-body-color mb-1">
                      Sankavi
                    </p>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      See detail
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    Documents
                  </h3>
                  <button
                      onClick={toggleForm}
                      className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                      Add file
                    </button>
                  </div>

                  {/* Toggleable Form */}
                  {showForm && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <form className="mt-4">
                            <div className="mb-4">
                              <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">
                                Patient Name
                              </label>
                              <input
                                type="text"
                                id="documentName"
                                name="documentName"
                                className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="documentURL" className="block text-sm font-medium text-gray-700">
                                Date
                              </label>
                              <input
                                type="text"
                                id="documentURL"
                                name="documentURL"
                                className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
                                Document
                              </label>
                              <input
                                type="text"
                                id="documentType"
                                name="documentType"
                                className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="mb-8">
                              <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Save
                              </button>
                              <button
                              onClick={toggleForm}
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}


                <div class="h-72 overflow-y-auto">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Patient Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            document
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Patient 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">01/01/2021</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              patient1.pdf
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    Virtualclub
                  </h3>
                  <button
                    onClick={toggleForm}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    Add file
                  </button>
                </div>

                {/* Toggleable Form */}
                {showForm && (
                     <div className="fixed z-10 inset-0 overflow-y-auto">
                     <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                       <div className="fixed inset-0 transition-opacity">
                         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                       </div>
         
                       <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
         
                       <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                         <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                           <div className="sm:flex sm:items-start">
                             <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                               <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                                 Add Document
                               </h3>
                                <form className="mt-4">
                                  <div className="mb-4">
                                    <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">
                                      Document Name
                                    </label>
                                    <input
                                      type="text"
                                      id="documentName"
                                      name="documentName"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="documentURL" className="block text-sm font-medium text-gray-700">
                                      Document URL
                                    </label>
                                    <input
                                      type="text"
                                      id="documentURL"
                                      name="documentURL"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
                                      Document Type
                                    </label>
                                    <input
                                      type="text"
                                      id="documentType"
                                      name="documentType"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Category
                                    </label>
                                    <select
                                      id="category"
                                      name="category"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="video">Video</option>
                                      <option value="article">Article</option>
                                      <option value="music">Music</option>
                                    </select>
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                      Content
                                    </label>
                                    <textarea
                                      id="content"
                                      name="content"
                                      rows="4"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="imageLink" className="block text-sm font-medium text-gray-700">
                                      Image Link
                                    </label>
                                    <input
                                      type="text"
                                      id="imageLink"
                                      name="imageLink"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                              onClick={toggleForm}
                              type="button"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Save
                            </button>
                            <button
                              onClick={toggleForm}
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}



                <div class="h-72 overflow-y-auto">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Document Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            document
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            document type
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">delete</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">calm video 1</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              video
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              delete
                            </a>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl py-6 px-5 shadow-lg transition-all hover:shadow-lg sm:p-6 lg:px-5 xl:px-6 overflow-hidden">

              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Settings
                </h3>
                {/* <p className="text-base font-medium text-body-color">See all</p> */}
              </div>
              <form className="space-y-6">
                <div className="flex flex-col items-center">
                  <img
                    width="100"
                    height="100"
                    src={docimg}
                    alt="Doctor"
                    className="rounded-full mb-4"
                  />
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-bermuda dark:bg-blue-600 hover:bg-blue-100 hover:text-black dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                      Change picture
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-100 transition"
                    >
                      Delete picture
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-3"> {/* Changed to flex container */}
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-bermuda dark:bg-blue-600 hover:bg-blue-100 hover:text-black dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                  >
                    Save
                  </button>
                </div>
              </form>
            </div>


            ..
          </div>


          <div class="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <div ref={appointmentRef} className={`${activeSection === 'appointment' ? 'block' : 'hidden'}`}>
              <div className="w-full px-2 pt-24">
                <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">

                  <div class="flex justify-between mb-2">
                    <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                      Appointments
                    </h3>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      Edit
                    </button>
                  </div>

                  <div className="h-auto">

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sankavi</p>
                        <p class="ml-auto mr-2">finished</p>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p2img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">PID002</p>
                        <p class="ml-auto mr-2">12:00</p>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p2img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">PID001</p>
                        <p class="ml-auto mr-2">12:30</p>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sangu</p>
                        <p class="ml-auto mr-2">01:00</p>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sangu</p>
                        <p class="ml-auto mr-2">01:00</p>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sangu</p>
                        <p class="ml-auto mr-2">01:00</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>


            <div ref={messagesRef} className={`${activeSection === 'messages' ? 'block' : 'hidden'}`}>
              <div className="w-full px-2 pt-24">
                <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">

                  <div class="flex justify-between mb-2">
                    <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                      Messages
                    </h3>
                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      Edit
                    </button>
                  </div>

                  <div className="h-auto">
                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sankavi</p>
                        <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sankavi</p>
                        <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sankavi</p>
                        <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sankavi</p>
                        <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sankavi</p>
                        <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                      </div>
                    </div>

                    <div class="w-full px-2 mb-2 mt-4">
                      <div class="flex items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
                        <img
                          width="30"
                          src={p1img}
                          alt="patient1"
                          className="rounded-full mr-3"
                        />
                        <p class="text-base font-medium text-body-color">Sankavi</p>
                        <span class="inline-block bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-auto mr-2">1</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>


            <div ref={patientsRef} className={`${activeSection === 'patients' ? 'block' : 'hidden'}`}>
              <div className="w-full px-2 pt-24">
                <div className="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">

                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                      Patients
                    </h3>
                    <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      Edit
                    </button>
                  </div>

                  <div className="flex flex-wrap -mx-4">
                    <div className="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3 shadow-md shadow-gray-500 flex-shrink-0 mx-4 mb-4">
                      <img
                        width="150"
                        src={p1img}
                        alt="patient1"
                        className="rounded-full mb-3"
                      />
                      <p className="text-base font-medium text-body-color mb-1">
                        Sankavi
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        See detail
                      </button>
                    </div>

                    <div className="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3 shadow-md shadow-gray-500 flex-shrink-0 mx-4 mb-4">
                      <img
                        width="150"
                        src={p1img}
                        alt="patient1"
                        className="rounded-full mb-3"
                      />
                      <p className="text-base font-medium text-body-color mb-1">
                        Sankavi
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        See detail
                      </button>
                    </div>


                    <div className="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3 shadow-md shadow-gray-500 flex-shrink-0 mx-4 mb-4">
                      <img
                        width="150"
                        src={p1img}
                        alt="patient1"
                        className="rounded-full mb-3"
                      />
                      <p className="text-base font-medium text-body-color mb-1">
                        Sankavi
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        See detail
                      </button>
                    </div>

                    <div className="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3 shadow-md shadow-gray-500 flex-shrink-0 mx-4 mb-4">
                      <img
                        width="150"
                        src={p1img}
                        alt="patient1"
                        className="rounded-full mb-3"
                      />
                      <p className="text-base font-medium text-body-color mb-1">
                        Sankavi
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        See detail
                      </button>
                    </div>

                    <div className="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3 shadow-md shadow-gray-500 flex-shrink-0 mx-4 mb-4">
                      <img
                        width="150"
                        src={p1img}
                        alt="patient1"
                        className="rounded-full mb-3"
                      />
                      <p className="text-base font-medium text-body-color mb-1">
                        Sankavi
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        See detail
                      </button>
                    </div>


                    <div className="flex flex-col items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3 shadow-md shadow-gray-500 flex-shrink-0 mx-4 mb-4">
                      <img
                        width="150"
                        src={p1img}
                        alt="patient1"
                        className="rounded-full mb-3"
                      />
                      <p className="text-base font-medium text-body-color mb-1">
                        Sankavi
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        See detail
                      </button>
                    </div>



                  </div>

                </div>
              </div>
            </div>


            <div ref={documentsRef} className={`${activeSection === 'documents' ? 'block' : 'hidden'}`}>
              <div className="w-full pt-24">
                <div className="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                      Documents
                    </h3>
                    <button
                      onClick={toggleForm}
                      className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                      Add file
                    </button>
                  </div>

                  {/* Toggleable Form */}
                  {showForm && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <form className="mt-4">
                            <div className="mb-4">
                              <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">
                                Patient Name
                              </label>
                              <input
                                type="text"
                                id="documentName"
                                name="documentName"
                                className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="documentURL" className="block text-sm font-medium text-gray-700">
                                Date
                              </label>
                              <input
                                type="text"
                                id="documentURL"
                                name="documentURL"
                                className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
                                Document
                              </label>
                              <input
                                type="text"
                                id="documentType"
                                name="documentType"
                                className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="mb-8">
                              <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Save
                              </button>
                              <button
                              onClick={toggleForm}
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="h-auto">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Patient Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              document
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Patient 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">01/01/2021</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                patient1.pdf
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div ref={settingsRef} className={`${activeSection === 'settings' ? 'block' : 'hidden'}`}>
              <div className="flex justify-center items-center w-full pt-24">
                <div className="w-full max-w-lg px-5"> {/* Adjusted container width */}
                  <div className="mb-6 rounded-xl py-6 px-5 shadow-lg transition-all hover:shadow-lg sm:p-6 lg:px-5 xl:px-6 overflow-hidden">

                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                        Settings
                      </h3>
                      {/* <p className="text-base font-medium text-body-color">See all</p> */}
                    </div>
                    <form className="space-y-6">
                      <div className="flex flex-col items-center">
                        <img
                          width="100"
                          height="100"
                          src={docimg}
                          alt="Doctor"
                          className="rounded-full mb-4"
                        />
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-bermuda dark:bg-blue-600 hover:bg-blue-100 hover:text-black dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          // className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                          >
                            Change picture
                          </button>
                          <button
                            type="button"
                            className="px-4 py-2 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-100 transition"
                          >
                            Delete picture
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3"> {/* Changed to flex container */}
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-bermuda dark:bg-blue-600 hover:bg-blue-100 hover:text-black dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div ref={virtualclubRef} className={`${activeSection === 'virtualclub' ? 'block' : 'hidden'}`}>
              <div className="w-full pt-24">
                <div className="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                      Virtualclub
                    </h3>
                    <button
                      onClick={toggleForm}
                      className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                      Add file
                    </button>
                  </div>

                  {/* Toggleable Form */}
                  {showForm && (
                     <div className="fixed z-10 inset-0 overflow-y-auto">
                     <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                       <div className="fixed inset-0 transition-opacity">
                         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                       </div>
         
                       <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
         
                       <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                         <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                           <div className="sm:flex sm:items-start">
                             <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                               <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                                 Add Document
                               </h3>
                                <form className="mt-4">
                                  <div className="mb-4">
                                    <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">
                                      Document Name
                                    </label>
                                    <input
                                      type="text"
                                      id="documentName"
                                      name="documentName"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="documentURL" className="block text-sm font-medium text-gray-700">
                                      Document URL
                                    </label>
                                    <input
                                      type="text"
                                      id="documentURL"
                                      name="documentURL"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
                                      Document Type
                                    </label>
                                    <input
                                      type="text"
                                      id="documentType"
                                      name="documentType"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                      Category
                                    </label>
                                    <select
                                      id="category"
                                      name="category"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="video">Video</option>
                                      <option value="article">Article</option>
                                      <option value="music">Music</option>
                                    </select>
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                      Content
                                    </label>
                                    <textarea
                                      id="content"
                                      name="content"
                                      rows="4"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <label htmlFor="imageLink" className="block text-sm font-medium text-gray-700">
                                      Image Link
                                    </label>
                                    <input
                                      type="text"
                                      id="imageLink"
                                      name="imageLink"
                                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                              onClick={toggleForm}
                              type="button"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Save
                            </button>
                            <button
                              onClick={toggleForm}
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}


                  <div className="h-auto">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Document Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              document
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              document type
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">delete</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">calm video 1</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-500">
                                video
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                delete
                              </a>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>




        </section>
      </div>
    </div>
  );
}

export default Dashboard;
