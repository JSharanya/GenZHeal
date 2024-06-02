import React, { useState } from 'react'
import Questiondata from '../../data/question.json'
import Header from '../../components/Header'

const Quiz = () => {
    const[currentQuestion, setCurrentQusetion]=useState(0);
    const[score, setScore] = useState(0)
    const[showScore, setShowScore] = useState(false)

const handleAnswerClick = (selectedOption) => {
    if(selectedOption === Questiondata[currentQuestion].correctOption ){
        setScore((prevScore) => prevScore + 1);
        
        
    }
   

    if(currentQuestion < Questiondata.length -1){
        setCurrentQusetion((prevQuestion)=>prevQuestion + 1)
    }else{
        setShowScore(true)
    }

   
}




const handleRestartQuiz =()=>{
    setCurrentQusetion(0);
    setScore(0);
    setShowScore(false)
}


const percentage = Math.trunc((score/Questiondata.length)*100);
let performance;
if (percentage >= 70) {
  performance = 'Good';
} else if (percentage >= 40) {
  performance = 'Average';
} else {
  performance = 'Bad';
}

  return (
    
    <div class='overflow-y min-h-screen bg-blue-200  '>
        <div>
            <Header/>
        </div>
     
        
   <div class=" dark:bg-gray-800  flex flex-col items-center justify-center">
    <div>
   
    <div class="mt-32 mb-16 text-center">
    <h1 class=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-10 tracking-tight text-black">
    Convenient and affordable therapy
    <span class=" display: block"> with <span class='text-blue-500'> GenZHeal</span> </span> 
    </h1>
   <div class='mt-6 md:mt-6 font-semibold'>
    <p>GenZHeal will match you to one of 35,000 licensed</p>
    <p>therapists based upon your location, preferences, and</p>
    <p>therapist availability.</p>
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
          <div class="bg-white p-6  md:mx-auto">
            <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                </path>
            </svg>
            <div class="text-center">
                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                <h2 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Your Score : {score}/{Questiondata.length}</h2>
                <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                <h2>Result:  <span className={`ml-2 ${performance === 'Good' ? 'text-green-500' : performance === 'Average' ? 'text-yellow-500' : 'text-red-500'}`}> {performance}</span></h2>
                <span className="text-gray-700">({percentage}%)</span>
                <div class="py-10 text-center" onClick={handleRestartQuiz}>
                    <a href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                        GO BACK 
                   </a>
                </div>
            </div>
        </div>
      </div>
    
    </div>

   
  ):(
    <div class="bg-white lg:w-4/12 md:7/12 w-8/12 shadow-3xl rounded-xl ">
    <div class="bg-gray-800 shadow shadow-gray-200 relative left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:p-6 flex justify-center items-center select-none  border-2 text-white text-xl font-bold  rounded-full  h-20 w-20 focus:outline-none focus:shadow-outline ">
      <svg width="30" height="32" viewBox="0 0 24 24" fill="#FFF">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
      </svg>
    </div>
    <div class="p-10  md:p-18 md:pt-0 pt-0 md:pb-10">
    
      <div class="flex flex-col items-center text-lg  md:mb-2">
       <h2 class='justify-center text-center p-4 border-b-2 w-full border-indigo-500 '>Help us match you to the right therapist.</h2>
        <p class='pt-4 pb-4 justify-center text-center'>{Questiondata[currentQuestion].question}</p>
      </div>
      {/* <div class="flex items-center text-lg mb-6 md:mb-8">
       
      flex justify-center items-center select-none bg-red-500 border-2 text-white text-xl font-bold p-2 m-2 rounded-full  h-20 w-20 focus:outline-none focus:shadow-outline 
      </div> */}
    {Questiondata[currentQuestion].option.map((option,index)=>(
        <button key={index} onClick={()=>handleAnswerClick(option)} class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 mb-4 text-white uppercase w-full rounded">{option}</button>
    ))}
     
    </div>
  </div>
  )}
 </div>

    </div>





  
  )
}

export default Quiz