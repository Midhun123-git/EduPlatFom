import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { LuBookOpen } from "react-icons/lu";
const PopularCourses = (props) => {
  return (
    <div className='w-full lg:max-w-[280px] h-[489px]  rounded-[12px] shadow-md relative'>
             <div>
                 <img src={props.image} alt=""  className='rounded-[12px] h-[192px] w-full'/>
                 <div className='bg-[#2563EB] rounded-md  w-[90px] absolute top-2 left-2'>
                       <p className='text-white font-[600] p-2'>
                        {props.discount}
                       </p>
                 </div>
                 {props.popular &&(
                 <div className='bg-[#EAB308] rounded-md  w-[90px] absolute top-2 right-2'>
                       <p className='text-white font-[600] p-2 text-center'>
                        {props.popular}
                       </p>
                 </div>
                 )}
                 
             </div>

             <div className='flex flex-col '>
                  <div className='flex flex-row items-center justify-between m-2'>
                        <button className='border border-[#E2E8F0] rounded-[20px] text-[#020817] font-[600] p-2 cursor-pointer'>
                            {props.level}
                        </button>
                        <div className='flex  gap-2 items-center'>
                                <FaStar  size={16} className='text-[yellow]'/>
                                <p className='font-[500] text-[#374151]'>
                                   {props.rate}
                                </p>
                                <p className='text-[#6B7280]  font-[400]'>
                                    {props.review}
                                </p>
                        </div>

                     </div>
                  <p className='text-[#111827] font-[600] m-2'>
                            {props.description}
                  </p>
                  <p className='text-[#4B5563] font-[#4B5563] m-2'>
                    {props.Proffeser}
                  </p>
                   <div className='flex '>
                            <div className='flex gap-2 items-center ml-2'>
                                <CiClock1 size={16}/>
                                <p className='text-[#6B7280] font-[400]'>{props.duration}</p>
                            </div>

                            <div className='flex gap-2 items-center ml-2'>
                                <LuBookOpen  size={16} className='text-[#6B7280]'/>
                                <p className='text-[#6B7280] font-[400]'>{props.lessons}</p>
                            </div>
                   </div>
                  <p className='font-[700] text-[#111827] m-2 '>
                   {props.price}
                    <span className='ml-3 text-[#6B7280] font-[400] line-through'>
                        {props.oldprice}
                    </span>
                  </p>

                  <button className='bg-[#017CBA]  rounded-[10px] text-white  w-[104px] p-2 m-2 cursor-pointer'>
                    Enroll Now
                  </button>
             </div>
    </div>
  )
}

export default PopularCourses