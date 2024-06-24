import React from 'react'
import Header from "../../components/Header";
const Aboutus = () => {
  const points = [
    "Personal Consultations",
    "Unique technique",
    "Group Therapy",
    "Couple Problem",
    "Online Therapy"
  ];
  
  return (
   
    <div>
       <Header />
       <section className="sm:mt-24  lg:mt-36 mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block text-bermuda xl:inline">
              Dr. Merry Stone{" "}
              </span>
              <span className="block  xl:inline">
              — Licensed Mental Health Counselor, Psychotherapist
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.
            </p>
            <div className="flex flex-wrap">
      {points.map((point, index) => (
        <div key={index} className="w-1/2 flex items-center mb-4">
          <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
          <span>{point}</span>
        </div>
      ))}
    </div>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
                {/* <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  GET A Cousultaion
                </a> */}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="text-white bg-bermuda hover:bg-blue-100 hover:text-black w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-bermuda hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Leran More
                </a>
              </div>
            </div>
          </div>

          <div className=" lg:w-3/4 sm:w-full my-4">
            <img
              className=" sm:h-100 md:h-96 lg:w-full lg:h-full"
              src="https://html.merku.love/talking-minds/assets/images/hero/hero_image_1-min.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      </div>
  )
}

export default Aboutus