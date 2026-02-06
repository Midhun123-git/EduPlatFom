import React from 'react'
import { LuBookOpen } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import LoginHeader from '../Componets/LoginHeader'
import Test from "../Componets/Test"
import { FaRegChartBar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import Mock from "../Componets/Mock"
import Footer from "./Footer"
const TestPractice = () => {
  return (
    <div>
   <LoginHeader/>
   <div className='flex flex-col items-start pt-5 lg:pl-40 pl-4'>
             <h1 className='text-[#111827] text-[30px] font-[700]   '>
        Test Practice
     </h1>
     <p className='text-[#4B5563] text-[16px] font-[400]'> 
        Practice with mock tests and improve your preparation
     </p>
   </div>

   <div className='flex items-center justify-center mt-8  gap-6 flex-wrap p-5'>
            <Test 
            icon={<LuBookOpen  size={32} className='text-[#017CBA]  gap-5'/>}
            count="25"
            status="Test Taken"
            />
             <Test 
             icon={<FiCheckCircle  size={32} className='text-[#16A34A]  gap-5'/>}
             count="850"
             status="Questions Solved"
             />
             <Test 
             icon={<FaRegChartBar   size={32} className='text-[#017CBA]  gap-5'/>}
             count="82%"
             status="Average Score"
             />
             <Test 
             icon={<FaRegClock  size={32} className='text-[#16A34A]  gap-5'/>}
             count="45 h"
             status="Practice Time"
             />
   </div>
    <div className='flex flex-wrap justify-center p-5 mt-8 gap-5'>
            <Mock
                    sub="NEET Mock Test 2024 - Biology"
                    level="High"
                    question="180 Question"
                    duration="3 Hour"
                    attempts="1250"
                    rate="4.0"
            /> 
             <Mock
                    sub="JEE Main Physics Practice"
                    level="Medium"
                    question="90 Questions"
                    duration="3 Hour"
                    attempts="2100"
                    rate="4.6"
            /> 
             <Mock
                    sub="Plus Two Bio science"
                    level="Medium"
                    question="50 Question"
                    duration="2 Hour"
                    attempts="890"
                    rate="4.7"
                    path="/StartTest"
            /> 
    </div>
    <div className='mt-9'>
     <Footer/>
    </div>
    
    </div>
  )
}

export default TestPractice