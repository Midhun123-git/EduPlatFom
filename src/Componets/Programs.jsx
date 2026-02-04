import React from 'react'
import { HiOutlineBookOpen } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";
const Programs = (props) => 
    {
  return (
    <div className='flex flex-col lg:max-w-[384px] sm:w-full ml-3 mt-7 shadow-md p-3 rounded-[12px]'>
     <div className='h-[67px] w-[67px] mb-4 rounded-[16px] flex items-center justify-center text-white 
     '
     style={{backgroundColor:props.iconBg}}>
           {/* < HiOutlineBookOpen size={35}/> */}
           {props.icon}
     </div>
     <p className='font-[700] text-[#111827] leading-[1.05] mb-2'>{props.title}</p>
     <p className='text-[#4B5563] font-[400] mb-3'>{props.description} <br /></p>

<div className='flex flex-col gap-3 '>
      <div className='flex items-center gap-3'>
        <div className='h-3 w-3 rounded-full  bg-[#017CBA]'/>
           <p>{props.point1}</p>
      </div>

      <div className='flex items-center gap-3'>
        <div className='h-3 w-3 rounded-full  bg-[#017CBA]'/>
           <p>{props.point2}</p>
      </div>

      <div className='flex items-center gap-3 mb-3'>
        <div className='h-3 w-3 rounded-full  bg-[#017CBA]'/>
           <p>{props.point3}</p>
      </div>
</div>
<button className='border border-[#E2E8F0] rounded-[10px] w-[143px] p-3 cursor-pointer'>
    Explore Courses
</button>
    </div>
  )
}

export default Programs