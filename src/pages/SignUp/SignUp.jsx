import React, { useState } from "react";
import { PiBrainBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert } from "flowbite-react";

import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const [formData,setFormData]=useState({
    username: '',
    email: '',
    password: '',
    address: {
      street: ''
    }
  })
  const[errorMessage,setErrorMessage]=useState(null);
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  // const handleChange = (e) => {
  //   setFormData({...formData,[e.target.id]:e.target.value.trim()})
  // };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'street') {
      setFormData({ ...formData, address: { ...formData.address, street: value.trim() } });
    } else {
      setFormData({ ...formData, [id]: value.trim() });
    }
  };

  console.log(formData);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const { username, email, password, address } = formData;
    if (!username || !email || !password || !address.street) {
      return toast.error("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res=await fetch('http://localhost:3000/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData),
      })
      const data=await res.json();
      if(data.success===false){
        // return setErrorMessage(data.message)
        return toast.error(data.message)
      }
      setLoading(false)
      if(res.ok){
        toast.success('SignUp successful!');
        navigate('/signin')
      }
    } catch (error) {
      setErrorMessage(error.message)
      toast.error(error.message)
      setLoading(false)
    }

  }

  return (
    <div className="h-screen overflow-y-auto">
      <div className="py-20 items-center justify-center h-screen ">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-xl font-semibold text-gray-700 text-center ">
              {" "}
              <Link
                to="/"
                className=" font-extrabold text-bermuda  gap-2   dark:text-white "
              >
                GenZHeal
              </Link>
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          
{/*Form Strat Hear*/}
            <form  onSubmit={handleSubmit}>
          
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  User Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  id="username"
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  id="street"
                  onChange={handleChange}
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  {/* <a href="#" className="text-xs text-gray-500">
                    Forget Password?
                  </a> */}
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>

              
              <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                  Sign Up
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to='/signin' className="text-xs text-gray-500 uppercase">
                or sign In
                </Link>
               
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </form>

            {errorMessage && (
            <Alert className="mt-5" color='failure'>
              {errorMessage}
            </Alert>
          )}
          </div>

          
          
          <div
            className="hidden lg:block lg:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2024/01/25/16/17/doctor-8532177_640.png')",
            }}
          ></div>
        </div>
      
      </div>
    </div>
  );
};

export default SignUp;
