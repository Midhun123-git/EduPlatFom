import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import LoginHeader from '../Componets/LoginHeader'
import Footer from "./Footer"
import Practice from "../Componets/Practice"
import { FiCheckCircle } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";
import Paper from "../Componets/Paper"
import { FaRegClock } from "react-icons/fa6";
import { LuNotepadText } from "react-icons/lu";
const StartTest = () => {
  return (
    <div>
   <div className='fixed top-0 left-0 right-0 z-50 bg-white '>
                <LoginHeader/>
        </div>
   
   <div className='flex flex-col items-start pt-5 mt-15 lg:pl-40 pl-4'>
             <h1 className='text-[#111827] text-[30px] font-[700]   '>
        Test Practice
     </h1>
     <p className='text-[#4B5563] text-[16px] font-[400]'> 
        Practice with mock tests and improve your preparation
     </p>
   </div>


  <div className='flex justify-between lg:flex-row flex-col'>
            <div className='flex flex-col items-start pt-5 lg:pl-40 pl-4'>
                <h1 className='text-[#111827] text-[30px] font-[700]   '>
                    Plus Two Bio science - Complete Course
                </h1>
                <p className='text-[#4B5563] text-[16px] font-[400]'> 
                   Choose your practice type
                </p>

            </div>

            <div className='flex items-center gap-3 mr-5 mt-5 lg:mt-0'>
            <GoArrowLeft/>
            <p>Back to Courses</p>
            </div>
  </div>
  <div className='flex gap-5 flex-wrap justify-center mt-6 p-5'>
   <Practice
   icon={ <FiCheckCircle  size={32} className='text-[#16A34A]'/>}
   heading="Daily Practice"
   title="Quick daily questions to keep you sharp"
   p1="Full syllabus coverage"
   p2="3 hour duration"
   p3="All subjects included"
    p4="Quick 10-15 questions daily"
    btn="Start Daily Practice" 
   />

     <Practice
   icon={ <TbBrain   size={32} className='text-[#017CBA]'/>}
   heading="Full Syllabus Mock Test"
   title="Complete mock test covering all topics"
   p1="Full syllabus coverage"
   p2="3 hour duration"
   p3="All subjects included"
    btn="Start Mock Test"  path="/StartMockTestPage"
   />
   
  </div>
  
   <div className='flex gap-5 flex-col lg:flex-row justify-center mt-6 p-5'>
         <Paper
           icon={ <FaRegClock   size={32} className='text-[#EA580C]'/>}
            h1="Previous Year Papers"
            title="Solve previous year question papers"
            sub1="Mathematic Previous Papers"
            path1="/StartMockTestPage"
            sub2=" Phy Previous Papers"
            sub3="Chemistry Previous Papers"
            sub4="Botany Previous Papers"
            sub5="Zoolagy Previous Papers"
            sub6="English Previous Papers"
            
        />
        <div>
<Paper
           icon={ <LuNotepadText  size={32} className='text-[#017CBA]'/>}
            h1="Previous Year Papers"
            title="Solve previous year question papers"
            sub1="Mathematic Previous Papers"
            path2="/PhyPage"
            sub2=" Phy Previous Papers"
            sub3="Chemistry Previous Papers"
            sub4="Botany Previous Papers"
            sub5="Zoolagy Previous Papers"
            sub6="English Previous Papers"
        />
        </div>
         

   
  </div>

  
    <div className='mt-9'>
     <Footer/>
    </div>
    
    </div>
  )
}

export default StartTest