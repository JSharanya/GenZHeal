import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import { PiBrainBold } from "react-icons/pi";
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const DashboardLayout = () => {
  return (
     <div>
      <Navbar bg="light" expand="lg" className='fixed top-0 z-50 w-full pt-5 pb-5 mb-3'>
        <Container>
          <Navbar.Brand className='ml-10'>
            <Link
              to="/"
              className="text-2xl font-extrabold text-bermuda flex items-center gap-2 self-center whitespace-nowrap dark:text-white px-2 py-1"
            >
              <PiBrainBold className="inline-block" /> GenZHeal
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* <div>Sidebar</div>
      <div>Header</div> */}
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;