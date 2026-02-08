import React from 'react'

const PhyComp5 = () => {
  return (
    <div className='w-full lg:w-[384px] h-[261px] border border-[#E2E8F0]
     rounded-xl
    '>
        <div className='flex flex-col gap-1 p-3 '>
                <p className='font-semibold text-[24px]
                text-[#020817]
                '>Performance Comparison</p>
                <div className='flex justify-between p-3 pb-1'>
                    <p className='font-normal text-[#020817] text-[14px]'>Your Score</p>
                    <p className='font-bold text-[16px] text-[#020817]'>80%</p>
                </div>
                  <div className='flex justify-between p-3 pb-1'>
                    <p className='font-normal text-[#020817] text-[14px]'>Average Score</p>
                    <p className='font-normal text-[16px] text-[#020817]'>65.4%</p>
                </div>
                  <div className='flex justify-between p-3 pb-2'>
                    <p className='font-normal text-[#020817] text-[14px]'>Top Score</p>
                    <p className='font-normal text-[16px] text-[#020817]'>94.2%</p>
                </div>
        </div>
        <div className='pl-3 pr-3'>
                 <div className='p-3 rounded-xl bg-[#EFF6FF]'>
            <p className='text-[#1E40AF] font-normal text-[14px]'>You scored better than 68% of test takers!</p>
  </div>
        </div>
 
    </div>
  )
}

export default PhyComp5