import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    name: '',
    email: '',
    age: '',
    date: '',
    sessionNo: '',
    time: '',
    pay_1: '',
    pay_2: '',
    pay_3: ''
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const next = () => {
    if (formNo === 1) {
      if (!state.name || !state.email || !state.age) {
        toast.error('Please fill up all input fields');
      } else if (!emailRegex.test(state.email)) {
        toast.error('Please enter a valid email address');
      } else if (Number(state.age) <= 0) {
        toast.error('Age must be above 0');
      } else {
        setFormNo(formNo + 1);
      }
    } else if (formNo === 2) {
      if (!state.sessionNo || !state.date || !state.time) {
        toast.error('Please fill up all input fields');
      } else if (Number(state.sessionNo) <= 0) {
        toast.error('Session number must be above 0');
      } else {
        setFormNo(formNo + 1);
      }
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const finalSubmit = () => {
    if (state.pay_1 && state.pay_2 && state.pay_3) {
      toast.success('Form submitted successfully');
    } else {
      toast.error('Please fill up all input fields');
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-[370px] rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center'>
          {formArray.map((v, i) => (
            <React.Fragment key={i}>
              <div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {formNo === 1 && (
          <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="name">Name</label>
              <input value={state.name} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='name' placeholder='Name' id='name' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="email">Email</label>
              <input value={state.email} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='email' placeholder='Email Address' id='email' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="age">Age</label>
              <input value={state.age} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='age' placeholder='Age' />
            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        )}

        {formNo === 2 && (
          <div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="sessionNo">Session Number</label>
              <input value={state.sessionNo} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='sessionNo' placeholder='Session Number' id='sessionNo' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="date">Date</label>
              <input value={state.date} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='date' placeholder='Date' id='date' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="time">Time</label>
              <input value={state.time} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='time' placeholder='Time' id='time' />
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        )}

        {formNo === 3 && (
          <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="pay_1">Pay_1</label>
              <input value={state.pay_1} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='pay_1' placeholder='Pay_1' id='pay_1' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="pay_2">Pay_2</label>
              <input value={state.pay_2} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='pay_2' placeholder='Pay_2' id='pay_2' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="pay_3">Pay_3</label>
              <input value={state.pay_3} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='pay_3' placeholder='Pay_3' id='pay_3' />
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
