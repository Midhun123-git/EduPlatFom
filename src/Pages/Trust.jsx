import React from 'react'
import { LuUsers } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";
import { PiMedalThin } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
const Trust = () => {
  return (
    <div className='w-full py-5 lg:h-[586px]  bg-[#017CBA]'>

   <p className='text-[#FFFFFF] font-[700] text-center text-[28px sm:text-[32px] lg:text-[36px]  pt-5'>Trusted by Thousands of Students</p>
   <p className='font-[400] text-[#E9EDF2] text-[16px] sm:text-[18px] lg:text-[20px] text-center'>Our numbers speak for the quality of education we provide</p>
   
        
                   <div className='flex justify-evenly sm:flex-row flex-col  flex-wrap gap-6 mt-19 '>
                        <div className='flex flex-col items-center mt-6'>
                              <div className='w-[64px] h-[64px] rounded-[16px] bg-white/10 flex items-center justify-center'>
                                        <LuUsers size={32} className='text-white'/>
                              </div>
                              
                              <p className='text-white font-[700] text-[36px]'>50,000+</p>
                              <p className='font-[600] text-[#E9EDF2] text-[18px]'>Active Students</p>
                              <p className='text-[#FFFFFF] font-[400] text-[14]'>Learning with us</p>
                        </div>

                        <div className='flex flex-col items-center mt-6'>
                              <div className='w-[64px] h-[64px] rounded-[16px] bg-white/10 flex items-center justify-center'>
                                        <LuBookOpen size={32} className='text-white'/>
                              </div>
                              
                              <p className='text-white font-[700] text-[36px]'>500+</p>
                              <p className='font-[600] text-[#E9EDF2] text-[18px]'>Courses Available</p>
                              <p className='text-[#FFFFFF] font-[400] text-[14]'>Accross All Categories</p>
                        </div>

                         <div className='flex flex-col items-center mt-6'>
                              <div className='w-[64px] h-[64px] rounded-[16px] bg-white/10 flex items-center justify-center'>
                                        <PiMedalThin size={32} className='text-white'/>
                              </div>
                              
                              <p className='text-white font-[700] text-[36px]'>98%</p>
                              <p className='font-[600] text-[#E9EDF2] text-[18px]'>Succes Rate</p>
                              <p className='text-[#FFFFFF] font-[400] text-[14]'>In Competitive Exams</p>
                        </div>

                         <div className='flex flex-col items-center mt-6'>
                              <div className='w-[64px] h-[64px] rounded-[16px] bg-white/10 flex items-center justify-center'>
                                        <FaRegClock size={32} className='text-white'/>
                              </div>
                              
                              <p className='text-white font-[700] text-[36px]'>10,000+</p>
                              <p className='font-[600] text-[#E9EDF2] text-[18px]'>Hoours Of Content</p>
                              <p className='text-[#FFFFFF] font-[400] text-[14]'>High Quality Videos</p>
                        </div>
         </div>
        </div>
       
    
   
  )
}

export default Trust