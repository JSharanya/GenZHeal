import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PiBrainBold } from "react-icons/pi";

const DashboardLayout = () => {
  return (
    <div>
      <nav className="bg-gray-100 fixed top-0 w-full ml-64 z-50 pt-5 pb-5 mb-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="ml-10">
            <Link
              to="/"
              className="text-2xl font-extrabold text-bermuda flex items-center gap-2 self-center whitespace-nowrap dark:text-white px-2 py-1"
            >
              <PiBrainBold className="inline-block" /> GenZHeal
            </Link>
          </div>
        </div>
      </nav>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
