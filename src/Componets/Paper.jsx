import React from 'react'
import { FaRegClock } from "react-icons/fa6";
const Paper = () => {
  return (
    <div className='w-full lg:w-[596px] h-[289px] flex flex-col  border-1 border-[#E2E8F0] p-5'>
                                    <div className='flex flex-col gap-3 pb-4'>
                                                      <div className='flex gap-4 items-center'>
                                                            <FaRegClock   size={32} className='text-[#EA580C]'/>
                                                                <div className='flex flex-col  gap-2'>
                                                                    <p className='text-[18px] font-[600] text-[#020817]'>Previous Year Papers</p>
                                                                    <p className='text-[#4B5563] font-[400] text-[14px]'>Solve previous year question papers</p>
                                                                </div>
                                                               
                                                      </div>
                                                       <p className='text-[#4B5563] font-[400] pt-2 text-[14px]'>Select Subject :</p>


<div className='flex lg:flex-row flex-col gap-4 justify-center items-center'>
            <div className='flex w-full flex-col gap-3'>
                    <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        Mathematics Previous Papers
                    </div>

                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        Mathematics Previous Papers
                    </div>
                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        Mathematics Previous Papers
                    </div>
            </div>

             <div className='flex w-full flex-col gap-3'>
                    <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        Mathematics Previous Papers
                    </div>

                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        Mathematics Previous Papers
                    </div>
                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        Mathematics Previous Papers
                    </div>
            </div>
</div>
                                            </div>
    </div>
  )
}

export default Paper