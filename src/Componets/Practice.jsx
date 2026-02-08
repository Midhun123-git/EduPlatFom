import React from 'react'

const Prctice = (props) => {
  return (
    <div className='border-1 border-[#E2E8F0] 
     lg:w-[596px] min-h-[289px] 
     w-full
     rounded-[12px]
     flex 
     flex-col
     p-7
     '>
      <div className=' flex-grow'>

      
        <div className='flex flex-col gap-3 pb-4'>
                  <div className='flex gap-4 items-center'>
                          {props.icon}
                            <div className='flex flex-col  gap-2'>
                                <p className='text-[18px] font-[600] text-[#020817]'>{props.heading}</p>
                                <p className='text-[#4B5563] font-[400] text-[14px]'>{props.title}</p>
                            </div>
                  </div>
        </div>

        <div className='flex flex-col gap-3 '>
                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full  bg-black'/>
                    <p  className='text-[#4B5563] font-[400] text-[14px]'>{props.p1}</p>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full  bg-black'/>
                   <p  className='text-[#4B5563] font-[400] text-[14px]'>{props.p2} </p>
                </div>

                <div className='flex items-center gap-3 mb-3'>
                  <div className='h-2 w-2 rounded-full  bg-black'/>
                    <p  className='text-[#4B5563] font-[400] text-[14px]'>{props.p3}</p>
                </div>
        </div>
     { props.p4 &&(
     <p  className='text-[#4B5563] font-[400] text-[14px] pb-5 '>{props.p4}</p>
     )}
              

              </div>
      <button className='w-full h-[40px] mt-5 bg-[#017CBA] 
            items-center justify-center 
            cursor-pointer text-white
            rounded-[10px]
      '>
                    {props.btn}
      </button>
    </div>
  )
}

export default Prctice