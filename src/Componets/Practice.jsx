import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
const Prctice = () => {
  return (
    <div className='border-1 border-[#E2E8F0] 
     lg:w-[596px] h-[289px] 
     w-full
     rounded-[12px]
     p-7
     '>
        <div className='flex flex-col gap-3 pb-4'>
                  <div className='flex gap-4 items-center'>
                        <FiCheckCircle  size={32} className='text-[#16A34A]'/>
                            <div className='flex flex-col  gap-2'>
                                <p className='text-[18px] font-[600] text-[#020817]'>Daily Practice</p>
                                <p className='text-[#4B5563] font-[400] text-[14px]'>Quick daily questions to keep you sharp</p>
                            </div>
                  </div>
        </div>

        <div className='flex flex-col gap-3 '>
                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full  bg-black'/>
                    <p  className='text-[#4B5563] font-[400] text-[14px]'>Full syllabus coverage</p>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full  bg-black'/>
                   <p  className='text-[#4B5563] font-[400] text-[14px]'> 3 hour duration</p>
                </div>

                <div className='flex items-center gap-3 mb-3'>
                  <div className='h-2 w-2 rounded-full  bg-black'/>
                    <p  className='text-[#4B5563] font-[400] text-[14px]'>All subjects included</p>
                </div>
        </div>

               <p  className='text-[#4B5563] font-[400] text-[14px] pb-5 '>Quick 10-15 questions daily</p>
      <button className='w-full h-[40px] ml-auto mr-auto bg-[#017CBA] 
            items-center justify-center 
            cursor-pointer text-white
            rounded-[10px]
      '>
                    Start Practice
      </button>
    </div>
  )
}

export default Prctice