import React from 'react'
import { LuBookOpen } from "react-icons/lu";
const Test = () => {
  return (
    <div className='w-full lg:w-[286px] h-[102px] border-1 flex gap-3 pl-9 border-[#E2E8F0] '>
                
                 <div className='flex items-center  gap-4'>
             <div className='flex '>
                        <LuBookOpen  size={32} className='text-[#017CBA]  gap-5'/>
                 </div>
                 <div className='flex flex-col '>
                         <p className='font-[700] text-[#020817]  text-[24px]'>25</p>
                <p className='font-[400] text-[#4B5563] text-[14px]'>Tests Taken</p>
                 </div>
                 </div>
                
                
    </div>
  )
}

export default Test