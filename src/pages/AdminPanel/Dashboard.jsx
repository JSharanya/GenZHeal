import React from 'react';

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white-500 text-black p-4">
        {/* Navbar content */}
      </nav>

      {/* Main content and sidebar container */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="bg-gray-200 w-64 p-4 h-full">
          <h4>Dr.S.Suthakaran</h4>
          {/* Sidebar content */}
          <br />
          <ul>
            <li className="flex items-center">
              <div>
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
              </div>
              <div>Dashboard</div>
            </li>
            <li className="flex items-center">
              <div>
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
              </div>
              <div>Appointment</div>
            </li>
            <li className="flex items-center">
              <div>
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
              </div>
              <div>Patients</div>
            </li>
            <li className="flex items-center">
              <div>
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
              </div>
              <div>Messages</div>
            </li>
            <li className="flex items-center">
              <div>
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
              </div>
              <div>Documents</div>
            </li>
            <li className="flex items-center">
              <div>
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
              </div>
              <div>Settings</div>
            </li>
            <li className="flex items-center">
              <div>
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
              </div>
              <div>Logout</div>
            </li>
          </ul>
        </aside>

        {/* Main content */}
        <section className="mt-8 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
  
    <div class="flex justify-between mb-2">
      <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
        Appointments
      </h3>
      <p class="text-base font-medium text-body-color">Today</p>
    </div>
    <div class="w-full px-2 mb-2 mt-4">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">finished</p>
  </div>
</div>
    <div class="w-full px-2 mb-2">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">12:00</p>
  </div>
</div>

    <div class="w-full px-2 mb-2">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">12:00</p>
  </div>
</div>

    <div class="w-full px-2 mb-2">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">01:00</p>
  </div>
</div>
  </div>
</div>



<div class="w-full sm:w-1/2 lg:w-1/2 px-2 ">
  <div class="mb-9 rounded-xl py-8 px-7 shadow-lg transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
  
    <div class="flex justify-between mb-2">
      <h3 class="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
       Messages
      </h3>
      <p class="text-base font-medium text-body-color">See all</p>
    </div>
    <div class="w-full px-2 mb-2  mt-4">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">1</p>
  </div>
</div>

    <div class="w-full px-2 mb-2">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">1</p>
  </div>
</div>

    <div class="w-full px-2 mb-2">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">1</p>
  </div>
</div>

   <div class="w-full px-2 mb-2">
  <div class="flex justify-between items-center rounded-xl transition-all bg-blue-100 sm:p-2 xl:px-3">
    <p class="text-base font-medium text-body-color">
      Sankavi
    </p>
    <p class="mr-2">1</p>
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
