import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment/Appointment";
import Froum from "./pages/Forum/Froum";
import Virtualclub from "./pages/Virtualclub/Virtualclub";
import Payment from "./pages/Payment/Payment";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import DashboardLayout from "./pages/AdminPanel/AdminLayout/DashboardLayout";
import Dashboard from "./pages/AdminPanel/Dashboard";
import "./styles/custom.css";
import Quiz from "./pages/Quiz/Quiz";
import UserDashboard from "./pages/UserProfile/UserDashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import "./pages/UserProfile/Profile.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";
import Chatting from "./pages/AdminPanel/Chatting";
import Success from "./pages/Appointment/Success";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/checkout-success" element={<Success />} />
          <Route path="/forum" element={<Froum />} />
          <Route path="/virtualclub" element={<Virtualclub />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="userdashboard" element={<UserDashboard />}>
            <Route path="userdashboard" element={<UserProfile />} />
          </Route>

          <Route path="/admin/dashboard" element={<DashboardLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Chatting />} />
          </Route> 
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
