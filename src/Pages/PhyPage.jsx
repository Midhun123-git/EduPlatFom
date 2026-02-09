import React from 'react'
import { useState } from 'react';
import LoginHeader from '../Componets/LoginHeader'
import { FaRegChartBar } from "react-icons/fa6";
import Footer from "./Footer"
import { MdOutlineFileDownload } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import Phycomp from '../Componets/Phycomp';
import PhyComp3 from '../Componets/PhyComp3';
import PhyComp4 from '../Componets/PhyComp4';
import PhyComp5 from '../Componets/PhyComp5';
import ReviewSolution from '../Componets/ReviewSolution';
const PhyPage= () => {
  const [activeTab,setactiveTab]=useState("results");
  return (
    <div >
        <div className='fixed top-0 left-0 right-0 z-50 bg-white '>
                <LoginHeader/>
        </div>
   
   <div className='
  flex items-start justify-between
  pt-5 mt-15
  lg:pl-40 pl-4
  flex-col gap-4                     // responsive
  sm:flex-row sm:gap-0              // responsive
'>
  <div className='flex flex-col items-start'>
    <h1 className='
      text-[#111827]
      text-[22px]                    // responsive
      sm:text-[26px]                 // responsive
      lg:text-[30px]                 // responsive
      font-[700]
    '>
      Physics Model Exam
    </h1>
    <p className='
      text-[#4B5563]
      text-[14px]                    // responsive
      sm:text-[16px]                 // responsive
      font-[400]
    '>
      Completed on 1/15/2025
    </p>
  </div>

  <div className='
    p-3 bg-[#FFFFFF]
    border border-[#E2E8F0]
    rounded-[10px]
    flex gap-3 items-center
    cursor-pointer
    mt-2                             // responsive
    sm:mt-0                          // responsive
    sm:mr-30                         // responsive
  '>
    <MdOutlineFileDownload size={16} />
    <p className='text-[14px] sm:text-[16px]'>Download Report</p> {/* responsive */}
  </div>
</div>

<div className='flex justify-center items-center'>
  <div className='
    flex w-[95%]                     // responsive
    sm:w-[90%]                       // responsive
    lg:w-[85%]                       // responsive
    h-[40px]
    bg-blue-100
    mt-8
    flex-wrap
    p-0.1
    rounded-lg
  '>
    <div 
    onClick={()=>{
      setactiveTab("results")
    }}
    className={`
      cursor-pointer
      flex w-[100%]                  // responsive
      sm:w-[50%]                     // responsive
      gap-2 items-center justify-center
      ${activeTab === "results"
     ?  "bg-[#FFFFFF] border  text-[#020817]" 
     :  " text-[#64748B]"
      }
     rounded-lg `}>
      <FaRegChartBar size={16} />
      <p className='font-semibold text-[14px] '>
        Results & Analysis
      </p>
    </div>

    <div 
    onClick={()=>{
      setactiveTab("review")
    }}
    className={`
    cursor-pointer
      flex w-[100%]                  // responsive
      sm:w-[50%]                     // responsive
      gap-2 items-center justify-center
      ${
        activeTab === "review" 
        ? "bg-white text-[#020817] border"
        : "text-[#64748B]"
      }
      rounded-lg `}>
      <LuNotepadText size={16} />
      <p className='font-semibold text-[14px]'>
        Review Solutions
      </p>
    </div>
  </div>
</div>

  
 {activeTab == "results" && (
<>
<div className='flex flex-wrap w-full lg:justify-evenly p-5 mt-8 gap-5'>
           <Phycomp
  value="4"
  subtitle="Out Of 5"
  title="Total Score"
  />

            <Phycomp
  type="percentage"
  value="80%"
  subtitle="Percentage"
  badge="Excellent"
/>

 <Phycomp
  value="#234"
  subtitle="Out Of 5"
  title="Total Score"
  textColor="#9333EA"
/>
 <Phycomp
  value="52m"
  subtitle="Time Taken"
  title="Out Of 60m"
  textColor="#EA580C"
/>


             
    </div>

    <div className='flex flex-col lg:flex-row justify-center gap-7 p-4'>
                    <div>
                        <PhyComp3 />
                    </div>
                <div className='flex flex-col  gap-5'>
                  <PhyComp4/>
                   <PhyComp5/>
                </div>
    </div>
</>
  
 )}
     {activeTab == "review" && (
      <>
      <div className='flex justify-center pt-2'>
             <div className='flex justify-between sm:w-[75%] flex-col sm:flex-row gap-3 w-[85%]'>
          <p className=' text-[24px] font-bold text-[#111827]'>Review Solution</p>
          <div className='border border-[#E2E8F0] rounded-xl w-full sm:w-auto text-center'>
           <p className='p-3'>3 Questions</p>
          </div>
      </div>
      </div>
     
      <div className='flex  flex-col items-center justify-center mt-6 px-3 lg:mt-9'>
        
        <div>
<ReviewSolution
  question="Question 1"
  questionText="Which organelle is known as the powerhouse of the cell?"
  sub="Physics"
  mark="4 Marks"
  op1="Nucleus"
  op2="Mitochondria"
  op3="Ribosome"
  op4="Golgi Apparatus"
  correctanswer="B"
  useranswer="B"
/>
        </div>
          <div className='mt-7'>

 <ReviewSolution
  question="Question 2"
  questionText="What is the function of ribosomes?"
  sub="Physics"
  mark="4 Marks"
  op1="DNA replication "
  op2="Protein Synthesis"
  op3="Lipid Synthesis"
  op4="Atp Production"
  correctanswer="B"
  useranswer="B"
/>
          </div>
<div className='mt-7'>
 <ReviewSolution
  question="Question 3"
  questionText="Which process occurs in the chloroplasts?"
  sub="Physics"
  mark="4 Marks"
  op1="Respiration"
  op2="PhotoSynthesis"
  op3="Fermentation"
  op4="Gyclolysis"
  correctanswer="A"
  useranswer="B"
/>
</div>

      </div>
      
      </>
     )}

    <div className='mt-9'>
     <Footer/>
    </div>
    
    </div>
  )
}

export default PhyPage