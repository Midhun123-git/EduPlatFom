import React from 'react'
import { FaStar } from "react-icons/fa6";
const Mock = (props) => {
  return (
    <div className='w-full lg:w-[389px] 
    h-[266px] 
    flex flex-col 
    gap-1 p-3 border-1 
    border-[#E2E8F0]
     bg-[#FFFFFF]
     rounded-[12px]
     '>
      <p className='font-[600] text-[18px]
       text-[#020817] p-2'>{props.sub}</p>
      <div className='flex gap-2'>
         <div className='  border-1 border-[#E2E8F0] p-3  rounded-[19px]'>
                   <p className='text-[#020817] text-[12px] font-[600]'>{props.level}</p>
         </div>
           <div className='  border-1 border-[#E2E8F0]  bg-[#F97316] rounded-[19px]'>
                   <p className='text-[#FFFFFF] text-[12px] font-[600] p-3'>{props.question}</p>
         </div>
      </div>

      <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                            <p className='text-[#4B5563] text-[14px] font-[400]'>Duration:</p>
                            <p className='text-[#020817] text-[14px] font-[500]'>{props.duration}</p>
            </div>


              <div className='flex justify-between'>
                            <p className='text-[#4B5563] text-[14px] font-[400]'>Attempts:</p>
                            <p className='text-[#020817] text-[14px] font-[500]'>{props.attempts}</p>
            </div>

              <div className='flex justify-between'>
                            <p className='text-[#4B5563] text-[14px] font-[400]'>Rating :</p>
                            <p className='text-[#020817] text-[14px] font-[500]'>
                                {props.rate}⭐ 
                                        
                            </p>
            </div>
      </div>

      <button className='w-full  bg-[#017CBA] 
      items-center justify-center 
      cursor-pointer text-white
      rounded-[10px]
      p-3
      '>
                    Start Test
      </button>
    </div>
  )
}

export default Mock