import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

// Load your publishable key from Stripe dashboard
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      toast.error(error.message);
      setProcessing(false);
      return;
    }

    // Call your backend to create the PaymentIntent
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_method: paymentMethod.id }),
    });

    const paymentIntent = await response.json();

    if (paymentIntent.error) {
      toast.error(paymentIntent.error.message);
      setProcessing(false);
      return;
    }

    const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.client_secret);
    
    if (confirmError) {
      toast.error(confirmError.message);
      setProcessing(false);
      return;
    }

    toast.success('Payment successful!');
    onPaymentSuccess();
    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <CardElement className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md" options={{ hidePostalCode: true }} />
      <button type="submit" disabled={!stripe || processing} className='px-3 py-2 text-lg rounded-md w-full text-white bg-bermuda'>
        {processing ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

const Appointment = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [appointmentType, setAppointmentType] = useState('normal');
  const [state, setState] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    date: null,
    sessionNo: '',
    hour: '',
    minute: '',
    period: 'AM', // Default to AM
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setState({ ...state, date });
  };

  const handleAppointmentTypeChange = (e) => {
    setAppointmentType(e.target.value);
  };

  const next = () => {
    if (formNo === 1) {
      if (appointmentType === 'normal') {
        if (!state.name || !state.email || !state.age || !state.gender) {
          toast.error('Please fill up all input fields');
          return;
        } else if (!emailRegex.test(state.email)) {
          toast.error('Please enter a valid email address');
          return;
        }
      } else {
        if (!state.age || !state.gender) {
          toast.error('Please fill up all input fields');
          return;
        }
      }
      setFormNo(formNo + 1);
    } else if (formNo === 2) {
      if (!state.sessionNo || !state.date || !state.hour || !state.minute) {
        toast.error('Please fill up all input fields');
      } else {
        setFormNo(formNo + 1);
      }
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const finalSubmit = () => {
    toast.success('Form submitted successfully');
  };

  const handlePaymentSuccess = () => {
    finalSubmit();
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-full max-w-lg rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center mb-4'>
          {formArray.map((v, i) => (
            <React.Fragment key={i}>
              <div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-bermuda' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-bermuda' : 'bg-slate-400'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {formNo === 1 && (
          <div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="appointmentType" className='text-slate-700 font-semibold'>What type of appointment do you want to make?</label>
              <select value={appointmentType} onChange={handleAppointmentTypeChange} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' name='appointmentType' id='appointmentType'>
                <option value="normal">Normal</option>
                <option value="anonymous">Anonymous</option>
              </select>
            </div>
            {appointmentType === 'normal' ? (
              <>
                <div className='flex flex-col mb-4'>
                  <label htmlFor="name" className='text-slate-700 font-semibold'>Name</label>
                  <input value={state.name} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='name' placeholder='Name' id='name' />
                </div>
                <div className='flex flex-col mb-4'>
                  <label htmlFor="email" className='text-slate-700 font-semibold'>Email</label>
                  <input value={state.email} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='email' placeholder='Email Address' id='email' />
                </div>
              </>
            ) : null}
            <div className='flex flex-col mb-4'>
              <label htmlFor="gender" className='text-slate-700 font-semibold'>Gender</label>
              <div className="flex items-center space-x-4">
                <label className='text-slate-700'><input type="radio" name="gender" value="male" checked={state.gender === 'male'} onChange={inputHandle} /> Male</label>
                <label className='text-slate-700'><input type="radio" name="gender" value="female" checked={state.gender === 'female'} onChange={inputHandle} /> Female</label>
                <label className='text-slate-700'><input type="radio" name="gender" value="other" checked={state.gender === 'other'} onChange={inputHandle} /> Other</label>
              </div>
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="age" className='text-slate-700 font-semibold'>Age</label>
              <select value={state.age} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' name='age' id='age'>
                <option value="">Select Age Range</option>
                <option value="below 20">Below 20yrs</option>
                <option value="20-40">20-40yrs</option>
                <option value="above 40">Above 40yrs</option>
              </select>
            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-bermuda'>Next</button>
            </div>
          </div>
        )}

        {formNo === 2 && (
          <div>
            <div className='flex flex-col mb-4'>
              <label className='text-slate-700 font-semibold' htmlFor="sessionNo">Session Number</label>
              <input value={state.sessionNo} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-700 focus:border-blue-500 rounded-md' type="number" name='sessionNo' placeholder='Session Number' id='sessionNo' min="1" />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-slate-700 font-semibold' htmlFor="date">Date</label>
              <DatePicker selected={state.date} onChange={handleDateChange} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-700 focus:border-blue-500 rounded-md' placeholderText='Select Date' id='date' />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-slate-700 font-semibold' htmlFor="time">Time</label>
              <div className="flex">
                <input
                  value={state.hour}
                  onChange={inputHandle}
                  className='p-2 border border-slate-400 mt-1 outline-0 text-slate-700 focus:border-blue-500 rounded-md mr-1 w-16'
                  type="number"
                  name='hour'
                  placeholder='HH'
                  min="1"
                  max="12"
                />
               <div className="flex items-center">
                <span className="text-slate-700 font-semibold">:</span>
                <input
                  value={state.minute}
                  onChange={inputHandle}
                  className='p-2 border border-slate-400 mt-1 outline-0 text-slate-700 focus:border-blue-500 rounded-md ml-1 w-16'
                  type="number"
                  name='minute'
                  placeholder='MM'
                  min="0"
                  max="59"
                />
              </div>
                <select
                  value={state.period}
                  onChange={inputHandle}
                  className='p-2 border border-slate-400 mt-1 outline-0 text-slate-700 focus:border-blue-500 rounded-md ml-1'
                  name='period'
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-bermuda'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-bermuda'>Next</button>
            </div>
          </div>
        )}

        {formNo === 3 && (
          <div>
            <div className='flex flex-col mb-4'>
              <label className='text-slate-700 font-semibold' htmlFor="cardElement">Card Information</label>
              <Elements stripe={stripePromise}>
                <CheckoutForm onPaymentSuccess={handlePaymentSuccess} />
              </Elements>
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-bermuda'>Previous</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
