import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Admin = () => {
  return (
     <BrowserRouter>
       <Routes>
    <Route path="/admin/dashboard" element={<DashboardLayout />}>

    
    </Route>
  </Routes>
     </BrowserRouter>
  
  )
}

export default Admin