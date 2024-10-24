import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice";
import { Alert } from "flowbite-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // return dispatch(signInFailure('Please fill out all fields'))
      return toast.error("Please fill out all fields");
    }
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // if (data.success === false) {
      //   // dispatch(signInFailure(data.message))
      //   return toast.error(data.message);
      // }

      if (!res.ok) {
        return toast.error(data.message);
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        toast.success("SignIn successful!");
        if (data.isAdmin) {
          navigate('/admin/dashboard');  // Redirect to admin page if admin
        } else {
          navigate('/');  // Redirect to home page if a regular user
        }
        localStorage.setItem("currentUser", JSON.stringify(data));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div class="py-20 items-center justify-center h-screen ">
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            class="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://www.evidentlycochrane.net/wp-content/uploads/2020/02/Featured-image-visual-blog-Depressed-Girl-Blog-Header-01-1-e1580916482139.jpg')",
            }}
          ></div>
          <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-xl font-semibold text-gray-700 text-center ">
              {" "}
              <Link
                to="/"
                className=" font-extrabold text-bermuda  gap-2   dark:text-white "
              >
                GenZHeal
              </Link>
            </h2>
            <p class="text-xl text-gray-600 text-center">Welcome back!</p>
           
            <div>
              <form onSubmit={handleSubmit}>
                <div class="mt-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    User Email Address
                  </label>
                  <input
                    class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-4">
                  <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                    {/* <a href="#" class="text-xs text-gray-500">
                  Forget Password?
                </a> */}
                  </div>
                  <input
                    class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="password"
                    id="password"
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-8">
                  <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <Link to="/signup" class="text-xs text-gray-500 uppercase">
                or sign up
              </Link>

              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
