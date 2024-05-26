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
    
    <div>
        <div>
            <Header/>
        </div>
        
   <div class="bg-blue-200 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
  {showScore ? (
    <div class='bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl'>
        <h2>
            Your Score : {score}/{Questiondata.length}
            <h2>Result:  <span className={`ml-2 ${performance === 'Good' ? 'text-green-500' : performance === 'Average' ? 'text-yellow-500' : 'text-red-500'}`}>
                {performance}
              </span> 
              <span className="text-gray-700">({percentage}%)</span></h2>
            
            <button onClick={handleRestartQuiz}>fvfdvfdv</button>
        </h2>
    </div>
  ):(
    <div class="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
    <div class="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
      </svg>
    </div>
    <div class="p-12 md:p-24">
      <div class="flex items-center text-lg mb-6 md:mb-8">
       <h2>Question {currentQuestion+1}</h2>
        <p>{Questiondata[currentQuestion].question}</p>
      </div>
      <div class="flex items-center text-lg mb-6 md:mb-8">
       
       
      </div>
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