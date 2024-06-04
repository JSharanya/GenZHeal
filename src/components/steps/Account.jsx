import {useContext} from 'react';
import {StepperContext} from '../../contexts/StepperContext';

export default function Account() {
  const {userData, setUserData}= useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className='flex flex-col'>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Name
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["Name"] || ""}
          name="Name"
          placeholder="Name"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Email Address
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["Email_Address"] || ""}
          name="Email_Address"
          placeholder="Email Address"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
         Address
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["Address"] || ""}
          name="Address"
          placeholder="Address"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
         Contact Number
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["Contact_Number"] || ""}
          name="Contact_Number"
          placeholder="Contact Number"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
         Age
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["Age"] || ""}
          name="Age"
          //type = Integer
          placeholder="Age"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>
    
    </div>
  );
}

