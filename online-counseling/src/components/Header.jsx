import React, { useEffect, useState } from 'react'
import { Button, Navbar } from "flowbite-react";


const Header = () => {

  return (
   
    <Navbar >
      <Navbar.Brand>
        <img src="" className="mr-10  h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-2 py-1">LOGO</span>
      </Navbar.Brand>
      <div className="flex md:order-2 mr-10 ">
        <Button className='p-1'>Log In</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Appointment</Navbar.Link>
        <Navbar.Link href="#">Virtual Club</Navbar.Link>
        <Navbar.Link href="#">Forum</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header