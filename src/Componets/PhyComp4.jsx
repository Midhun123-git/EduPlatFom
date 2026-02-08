import React from 'react'

const PhyComp4 = () => {
  return (
    <div className='w-full lg:w-[384px] 
    border border-[#E2E8F0] rounded-xl flex flex-col gap-2
    '> 
        <p className='p-4 text-[#020817] font-semibold text-[24px]'>Quick Actions</p>
        <div className='pl-4 pr-4 flex flex-col gap-2 pb-3'>
            <button className='border font-medium 
            text-[14px] border-[#E2E8F0] 
            w-full p-5 rounded-[10px]
            cursor-pointer
            '>
                Review Solutions
           </button>

            <button className='border font-medium 
            text-[14px] border-[#E2E8F0] 
            w-full p-5 rounded-[10px]
            cursor-pointer
            '>
                Take Similar Test
           </button>

            <button className='border font-medium  bg-[#017CBA]
            text-[14px] border-[#E2E8F0] 
            w-full p-5 rounded-[10px] text-white
            cursor-pointer
            '>
                Back to Tests
           </button>
        </div>
        
    </div>
  )
}

export default PhyComp4