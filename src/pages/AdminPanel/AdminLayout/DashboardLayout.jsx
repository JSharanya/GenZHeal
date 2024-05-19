import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
   <div>
    <div>Sidebar</div>
    <div>Header</div>
    <Outlet/>
   </div>
  )
}

export default DashboardLayout