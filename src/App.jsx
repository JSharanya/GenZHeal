import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Appointment from './pages/Appointment/Appointment'
import Froum from './pages/Forum/Froum'
import Virtualclub from './pages/Virtualclub/Virtualclub'
import Payment from './pages/Payment/Payment'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import DashboardLayout from './pages/AdminPanel/AdminLayout/DashboardLayout'
import Dashboard from './pages/AdminPanel/Dashboard'



function App() {


  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/appointment' element={<Appointment/>}/>
      <Route path='/forum' element={<Froum/>}/>
      <Route path='/virtualclub' element={<Virtualclub/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
  

      
      <Route path='/admin/dashboard' element={<DashboardLayout/>}>
      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Route>
  
    </Routes>
   
  

   
    </BrowserRouter>
  )
}




export default App
