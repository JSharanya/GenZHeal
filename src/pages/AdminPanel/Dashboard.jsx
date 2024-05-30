import React from 'react';
import docimg from "../../images/doctor.png";
import p1img from "../../images/patient1.jpeg";
import p2img from "../../images/patient2.png";

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="">
        {/* Navbar content */}
        
      </nav>

      {/* Main content and sidebar container */}
      <div className="flex h-screen">
      
        {/* Sidebar */}
        <aside className="bg-gray-200 w-64 p-4 h-full fixed">

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-home mr-2">
          <path d="M19 21V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v13"></path>
          <path d="M7 2l7.5 7.5L22 2"></path>
        </svg>
        <span>Dashboard</span>
      </button>
    </li>

    <li className="mb-4">
      <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('appointment')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-calendar mr-2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span>Appointment</span>
      </button>
    </li>

    <li className="mb-4">
      <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('messages')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-message-circle mr-2">
          <path d="M21 12.79c0 5.34-7 9.71-7 9.71s-7-4.37-7-9.71c0-2.68 2.47-7.29 7-9.29 4.53 2 7 6.61 7 9.29z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>Messages</span>
      </button>
    </li>

    <li className="mb-4">
      <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('patients')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-users mr-2">
          <path d="M17 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10l4 4v8z"></path>
          <circle cx="9" cy="9" r="4"></circle>
          <path d="M23 21v-2"></path>
          <path d="M23 13H20"></path>
        </svg>
        <span>Patients</span>
      </button>
    </li>

    <li className="mb-4">
      <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('documents')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-file-text mr-2">
          <path d="M14 2H5C3.89 2 3 2.9 3 4v16c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V8l-5-6z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>Documents</span>
      </button>
    </li>

    <li className="mb-4">
      <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('settings')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-settings mr-2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a10 10 0 1 1-2.8 2.8"></path>
        </svg>
        <span>Settings</span>
      </button>
    </li>

    <li className="mb-4">
      <button className="flex items-center w-full text-left p-2 rounded hover:bg-gray-300" onClick={() => navigateTo('logout')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-log-out mr-2">
          <path d="M19 21V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v13"></path>
          <path d="M7 2l7.5 7.5L22 2"></path>
        </svg>
        <span>Logout</span>
      </button>
    </li>
  </ul>
</div>
</aside>



        {/* Main content */}
        <section className="ml-80 mt-8 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Main content */}
  
    {/* <div>
      <h2>Dashboard</h2>
      <p>
        jgskguwgdiquwjkdjmakjhasihdJBdahliilskl
        JWDGKWGHKAHLIHWLKN,mhkl
      </p>
    </div> */}
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 ">
      <div class="flex flex-wrap justify-between -mx-2 p-8">
      <div class="w-full sm:w-1/2 lg:w-1/2 px-2">
  <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">
  
    <div class="flex justify-between mb-2">
      <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        Appointments
      </h3>
      {/* <p class="text-base font-medium text-body-color">Today</p> */}
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



<div class="w-full sm:w-1/2 lg:w-1/2 px-2 ">
  <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">
  
    <div class="flex justify-between mb-2">
      <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
       Messages
      </h3>
      <p class="text-base font-medium text-body-color">See all</p>
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


<div class="w-full px-2">
  <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
  
    <div class="flex justify-between mb-2">
      <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        Patients
      </h3>
      <p class="text-base font-medium text-body-color">See all</p>
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



<div className="w-full px-2">
      <div className="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 overflow-hidden">
        <div className="flex justify-between mb-2">
          <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
            Documents
          </h3>
          <p className="text-base font-medium text-body-color">See all</p>
        </div>
        
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

  </div>
</div>




        </section>
      </div>
    </div>
  );
}

export default Dashboard;
