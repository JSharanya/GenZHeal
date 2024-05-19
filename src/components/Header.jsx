import React, { useEffect, useState } from 'react'
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { PiBrainBold } from "react-icons/pi";


const Header = () => {

  return (
   
    <div >
    <Navbar className=' fixed  top-0 z-50 w-full pt-5 pb-5 mb-3'>
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
        <Navbar.Link href="#" active >
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Appointment</Navbar.Link>
        <Navbar.Link href="#">Virtual Club</Navbar.Link>
        <Navbar.Link href="#">Forum</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar></div>
  )
}

export default Header