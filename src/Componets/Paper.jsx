import React from 'react'

const Paper = (props) => {
  return (
    <div className='w-full lg:w-[596px] min-h-[289px] flex flex-col  border-1 border-[#E2E8F0] p-5'>
                                    <div className='flex flex-col gap-3 pb-4'>
                                                      <div className='flex gap-4 items-center'>
                                                                    {props.icon}
                                                                <div className='flex flex-col  gap-2'>
                                                                    <p className='text-[18px] font-[600] text-[#020817]'>{props.h1}</p>
                                                                    <p className='text-[#4B5563] font-[400] text-[14px]'>{props.title}</p>
                                                                </div>
                                                               
                                                      </div>
                                                       <p className='text-[#4B5563] font-[400] pt-2 text-[14px]'>Select Subject :</p>


<div className='flex lg:flex-row flex-col gap-4 justify-center items-center'>
            <div className='flex w-full flex-col gap-3'>
                    <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        {props.sub1}
                    </div>

                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                        {props.sub2}
                    </div>
                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                       {props.sub3}
                    </div>
            </div>

             <div className='flex w-full flex-col gap-3'>
                    <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                       {props.sub4}
                    </div>

                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                                            {props.sub5}

                    </div>
                     <div className='w-full lg:w-[242px] h-[40px] 
                    flex justify-center 
                    items-center
                    rounded-[10px] border-1 border-[#E2E8F0]'>
                                               {props.sub6}

                    </div>
            </div>
</div>
                                            </div>
    </div>
  )
}

export default Paper