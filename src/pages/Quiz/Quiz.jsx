import React, { useState } from "react";
import Questiondata from "../../data/question.json";
import Header from "../../components/Header";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const correctOptions = Questiondata[currentQuestion].correctOption;

    if (Array.isArray(correctOptions)) {
      if (correctOptions.includes(selectedOption)) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      if (selectedOption === correctOptions) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    if (currentQuestion < Questiondata.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const percentage = Math.trunc((score / Questiondata.length) * 100);
  let performance;
  if (percentage >= 70) {
    performance = "Good";
  } else if (percentage >= 40) {
    performance = "Average";
  } else {
    performance = "Bad";
  }

  return (
    <div class="overflow-y min-h-screen bg-blue-100  ">
      <div>
        <Header />
      </div>

      <div class=" dark:bg-gray-800  flex flex-col items-center justify-center">
        <div>
          <div class="mt-32 mb-16 text-center">
            <h1 class=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-10 tracking-tight text-black">
              Convenient and affordable therapy
              <span class=" display: block">
                {" "}
                with <span class=" text-bermuda"> GenZHeal</span>{" "}
              </span>
            </h1>
            <div class="mt-6 md:mt-6 font-semibold">
              <p>your go-to hub for fun and engaging mental fitness quizzes.</p>
              <p>Challenge your mind, discover your strengths, and</p>
              <p>join a community of curious individuals dedicated </p>
              <p>to enhancing their cognitive abilities.</p>
            </div>
          </div>
        </div>

        <div>
          {/* <h2 class='mt-28 mb-16'>Convenient and affordable therapy with BetterHelp.</h2> */}
        </div>
        {showScore ? (
          <div>
            {/* <div class='bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl'>
        <h2>
            Your Score : {score}/{Questiondata.length}
            <h2>Result:  <span className={`ml-2 ${performance === 'Good' ? 'text-green-500' : performance === 'Average' ? 'text-yellow-500' : 'text-red-500'}`}>
                {performance}
              </span> 
              <span className="text-gray-700">({percentage}%)</span></h2>
            
            <button onClick={handleRestartQuiz}>fvfdvfdv</button>
        </h2>
    </div> */}
            <div class="bg-gray-100 ">
              <div class="bg-white p-6 mb-5 md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  class=" text-bermuda w-16 h-16 mx-auto my-6"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <div class="text-center pt-2 pl-5 pr-5 ">
                  <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Quiz Done!
                  </h3>
                  {/* <h2 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Your Score : {score}/{Questiondata.length}</h2> */}
                  <p class="text-gray-600 my-2">
                    Thank you for completing your quiz test.
                  </p>
                  <h2>
                    Result :
                    <span
                      className={`ml-2 ${
                        performance === "Good"
                          ? "text-green-500"
                          : performance === "Average"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {" "}
                      {performance}
                    </span>
                  </h2>
                  <span className="text-gray-700">({percentage}%)</span>
                  <div class="py-10 text-center" onClick={handleRestartQuiz}>
                    <a
                      href="#"
                      class="px-12 bg-bermuda hover:bg-indigo-500 text-white font-semibold py-3"
                    >
                      GO BACK
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="bg-white lg:w-4/12 md:7/12 w-8/12 shadow-3xl rounded-xl ">
            <div class="bg-gray-800 shadow shadow-gray-200 relative left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:p-6 flex justify-center items-center select-none  border-2 text-white text-xl font-bold  rounded-full  h-20 w-20 focus:outline-none focus:shadow-outline ">
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 21V2.352A3.451 3.451 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.017 4.017 0 0 0 2.3 12.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 2 14c.003.24.027.48.072.716a4 4 0 0 0 .235.832c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.285.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 11 21Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.451 3.451 0 0 0-1.5.352V21a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
              </svg>
            </div>
            <div class="p-10  md:p-18 md:pt-0 pt-0 md:pb-10">
              <div class="flex flex-col items-center text-lg  md:mb-2">
                <h2 class="justify-center text-center p-4 border-b-2 w-full border-bermuda ">
                  Challenge your mind with fun quizzes at GenZHeal.
                </h2>
                <p class="pt-4 pb-4 justify-center text-center">
                  {Questiondata[currentQuestion].question}
                </p>
              </div>
              {/* <div class="flex items-center text-lg mb-6 md:mb-8">
       
      flex justify-center items-center select-none bg-red-500 border-2 text-white text-xl font-bold p-2 m-2 rounded-full  h-20 w-20 focus:outline-none focus:shadow-outline 
      </div> */}
              {Questiondata[currentQuestion].option.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  class="bg-gradient-to-b from-bermuda to-bermuda font-medium p-2 md:p-4 mb-4 text-white uppercase w-full rounded"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
