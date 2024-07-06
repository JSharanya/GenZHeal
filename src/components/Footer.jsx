import React from 'react'
import { PiBrainBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center pb-10 mt-32 bg-[#e6eef1] w-full">


<a href='/' className='text-center mt-10 text-3xl font-extrabold text-bermuda flex items-center gap-2 self-center whitespace-nowrap dark:text-white px-2 py-1'>
<PiBrainBold className="inline-block" /> GenZHeal</a>


    <nav className="flex justify-center flex-wrap gap-8 lg:gap-24 text-gray-500 font-medium">
      
        <a className="hover:text-gray-900 text-black" href="/">Home</a>
        <a className="hover:text-gray-900  text-black" href="/appointment">Appointment</a>
        <a className="hover:text-gray-900  text-black" href="/virtualclub">Virual Club</a>
        <a className="hover:text-gray-900  text-black" href="/quiz">Quiz</a>
        <a className="hover:text-gray-900  text-black" href="/aboutus">About Us</a>
    </nav>

    <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p className="text-center text-gray-700 font-medium ">&copy; 2024 GenZHeal. All rights reservered.</p>
</footer>
  )
}

export default Footer