import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const Virtualclub = () => {
  const [virtualclubs, setVirtualclubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchVirtualclub = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/virualclub/all-virual');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVirtualclubs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVirtualclub();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className=" mt-20 py-52 px-1 md:px-8 object-cover object-center  inset-0 bg-black bg-opacity-50 text-center relative overflow-auto bg-gradient-overlay ">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-bermuda">
            Virtual Clam Club
          </h1>
          <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
            <div className="relative z-30 text-base text-black">
              <p className="text-lg text-gray-300 mb-8">
                Discover amazing features and services that await you.
              </p>
              <a
                href="#"
                className="bg-bermuda text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg z-100 relative font-semibold transition r duration-300  transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen  bg-white  rounded-lg flex overflow-x-auto custom-scrollbar">
        <div className="w-64 px-4">
          <div className="h-16 flex items-center">
            {/* <a
              href="#"
              className="w-48 mx-auto bg-blue-500 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span>Compose</span>
            </a> */}
          </div>
          <div className="px-2 pt-4 pb-8 border-r border-gray-300 min-h-screen ">
            <ul className="space-y-2">
              <li>
                <a className="bg-bermuda bg-opacity-60 text-black flex items-center justify-center mb-3 space-x-1 py-1.5 px-4 rounded cursor-pointer">
                  <span className="flex items-center space-x-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg> */}
                    <span>Categories</span>
                  </span>
                  {/* <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span> */}
                </a>
              </li>

              <li>
                {/* <h3 className="mb-3 py-1 px-4 rounded space-x-1 font-semibold items-center text-gray-900 dark:text-white">
                  Technology
                </h3> */}
                <ul className="w-44 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z" />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        All
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Artical
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Video
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z"
                          clip-rule="evenodd"
                        />
                        <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Audio
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="space-y-2">
              <li>
                <a className="bg-bermuda bg-opacity-60 text-black flex items-center justify-center mb-3 mt-4 space-x-1 py-1.5 px-4 rounded cursor-pointer">
                  <span className="flex items-center space-x-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg> */}
                    <span>Categories</span>
                  </span>
                  {/* <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span> */}
                </a>
              </li>

              <li>
                {/* <h3 className="mb-3 py-1 px-4 rounded space-x-1 font-semibold items-center text-gray-900 dark:text-white">
                  Technology
                </h3> */}
                <ul className="w-44 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z" />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        All
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Artical
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Video
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <svg
                        className="w-6 h-6 ml-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z"
                          clip-rule="evenodd"
                        />
                        <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
                      </svg>

                      <label
                        for="vue-checkbox"
                        className="w-full py-3 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Audio
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-2">
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="border-b mb-5 flex justify-between text-sm">
              <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-6400 uppercase">
                <svg
                  className="h-6 mr-3"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 455.005 455.005"
                  xml:space="preserve"
                >
                  <g>
                    <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z">
                      {" "}
                    </path>
                    <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z">
                      {" "}
                    </path>
                    <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z">
                      {" "}
                    </path>
                    <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z">
                      {" "}
                    </path>
                    <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z">
                      {" "}
                    </path>
                    <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z">
                      {" "}
                    </path>
                    <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z">
                      {" "}
                    </path>
                  </g>
                </svg>
                <a href="#" className="font-semibold inline-block">
                  virtual club
                </a>
              </div>
              <a href="#">See All</a>
            </div>


            {/* this  */}

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
             {virtualclubs.map((virtualclub) =>
                <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href={virtualclub.link}>
                    <img
                      
                      className="w-full"
                      src={virtualclub.image}
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    {virtualclub.category}
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href={virtualclub.link}
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                   {virtualclub.title}
                  </a>
                  <p className="text-gray-500 text-sm">
                  {virtualclub.content}
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
              </div>
             
             )}

              {/* <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://www.topcounselingschools.org/wp-content/uploads/2020/06/shutterstock_1696375255-1024x683.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      Artical
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Theories of Counseling and Therapy: An Experiential Approach
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
              </div> */}

              {/* <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://www.grace-counseling.com/wp-content/uploads/2021/08/5-Benefits-of-an-Individual-Therapy-Program.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      Audio
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Master Therapists: Exploring Expertise in Therapy and ...
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
              </div> */}

              {/* <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://www.grace-counseling.com/wp-content/uploads/2021/08/5-Benefits-of-an-Individual-Therapy-Program.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      Audio
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Master Therapists: Exploring Expertise in Therapy and ...
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
              </div> */}

              {/* <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://www.verywellhealth.com/thmb/O9Jf7NHIjmQlevzFLb0Ki9GmAtQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1301448265-4f6fe4dcc72c415dac170062bc2d58b4.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      Video
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    The Process of Counseling and Therapy
                  </a>
                  <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtualclub;
