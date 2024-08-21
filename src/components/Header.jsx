import React, { useState } from "react";

import { Link,redirect, useNavigate,useLocation  } from "react-router-dom";
import { PiBrainBold } from "react-icons/pi";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, signoutSuccess } from "../redux/user/userSlice";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const isLoggedInUser = useSelector(isLoggedIn);

  const handleLogOut = ()=>{
    dispatch(signoutSuccess())
    navigate("/signin")

  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full p-5 z-50 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="text-3xl font-extrabold text-bermuda flex items-center gap-2 self-center whitespace-nowrap dark:text-white px-2 py-1"
          >
            <PiBrainBold className="inline-block" /> GenZHeal
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedInUser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="user" img="" rounded />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">@{isLoggedInUser.username}</span>
                  <span className="block text-sm font-medium truncate">{isLoggedInUser.email}</span>
                </Dropdown.Header>
                <Link to='/userdashboard'>
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut}>Sign Out</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to='/signup'>
               <button
                type="button"
                className="text-white bg-bermuda hover:bg-blue-100 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Log In
              </button>
              </Link>
             
            )}

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-3 md:p-0 mt-3 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded ${
                    isActiveLink("/") ? "text-[#26aba3]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#26aba3] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={isLoggedInUser ? "/appointment":"/signup"}
                  className={`block py-2 px-3 rounded ${
                    isActiveLink("/appointment") ? "text-[#26aba3]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#26aba3] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/virtualclub"
                  className={`block py-2 px-3 rounded ${
                    isActiveLink("/virtualclub") ? "text-[#26aba3]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#26aba3] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Virtual Club
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className={`block py-2 px-3 rounded ${
                    isActiveLink("/quiz") ? "text-[#26aba3]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#26aba3] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Quiz
                </Link>
              </li>


              {isLoggedInUser && 
              <li>
                <Link
                  to="/forum"
                  className={`block py-2 px-3 rounded ${
                    isActiveLink("/forum") ? "text-[#26aba3]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#26aba3] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Forum
                </Link>
              </li>}

              <li>
                <Link
                  to="/aboutus"
                  className={`block py-2 px-3 rounded ${
                    isActiveLink("/aboutus") ? "text-[#26aba3]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#26aba3] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div>
      <div >
     <Navbar className=' fixed  top-0 z-50 w-full pt-2 pb-3 mb-3'>
       <Navbar.Brand className='ml-10 '>
         <img src="" className="mr-10  h-6 sm:h-9" alt="" />

         <Link
             to="/"
             className="text-2xl  font-extrabold text-bermuda flex items-center gap-2 self-center whitespace-nowrap  dark:text-white px-2 py-1"
           >
             <PiBrainBold className="inline-block" /> GenZHeal
           </Link>

       </Navbar.Brand>
       <div className="flex md:order-2 mr-10 ">
         <Button className='p-1'>Log In</Button>
       <Navbar.Toggle />
       </div>
       <Navbar.Collapse >

         <Navbar.Link href="#" active className='text-blue-500' >Home</Navbar.Link>
         <Navbar.Link href="#">Appointment</Navbar.Link>
         <Navbar.Link href="#">Virtual Club</Navbar.Link>
         <Navbar.Link href="#">Forum</Navbar.Link>
         <Navbar.Link href="#">About Us</Navbar.Link>
       </Navbar.Collapse>
     </Navbar>
   <div>

     </div>
     </div>
      </div> */}

      <div></div>
    </div>
  );
};

export default Header;
