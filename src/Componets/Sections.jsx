import React from 'react'
import { IoVideocamOutline } from "react-icons/io5";
const Sections = (props) => {
  return (
    <div className='flex w-full  flex-col items-center lg:w-[280px] lg:h-[216px] shadow-md mt-5 ml-3'>
         <div className='w-[48px] h-[48px] flex items-center justify-center bg-[#E9F8FF]  rounded-[16px] mt-2'>
                {/* <IoVideocamOutline  size={24} className='text-[#017CBA]'/> */}
                {props.icon}
         </div>
         <p className='text-[#111827] font-[600] text-[18px] text-center mt-2 p-2'> {props.title}</p>
         <p className='font-[400] text-[14px]  text-center text-[#4B5563] p-2 pt-0'>{props.description}</p>
    </div>
  )
}

export default Sections