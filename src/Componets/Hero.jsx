import React from 'react'
import { CiStar } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import DemoImg from '../assets/Demo.jpg'
const Hero = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center relative
    bg-[linear-gradient(120deg,#DB0082_0%,#DB0082_10%,#017CBA_90%,#017CBA_100%)]
    '>
      <div  className=' 
            relative
            h-[482px] 
            w-[90%] 
            max-w-[1400px]
            gap-10 
            flex 
            lg:flex-row 
            flex-col'>
         {/* Left Section */}
         <div className=''>
          <h1 className='font-[700] text-[#FFFFFF] text-[60px] leading-[1.04]'>
                Master Your <br />
                <span  className='font-[700] text-[#017CBA] text-[60px]'>
                     Academic Goals 
                </span>
                <br />
                  with Expert
                  <br />
                   Guidance
            </h1>
            <p className='text-[#FFFFFF] font-[400] text-[20px] mt-7 1 pb-4'>
                From school tuition to competitive exam preparation, get
                <br />
                personalized online coaching that adapts to your learning
                <br />
                style and schedule.
            </p>

                    <div className='flex gap-7 flex-wrap'>
                        <div className='flex items-center gap-2'> 
                            <CiStar  size={20} className='text-[yellow] '/>
                            <p className='text-white'>
                                4.9/5 Rating
                            </p>
                        </div>

                        <div className='flex items-center gap-2'> 
                            <HiOutlineUsers  size={20} className='text-[Blue] '/>
                            <p className='text-white'>
                            50,000+ Students
                            </p>
                        </div>

                        <div className='flex items-center gap-2'> 
                            <FaBookOpen  size={20} className='text-[#F97316] '/>
                            <p className='text-white'>
                            500+ Courses
                            </p>
                        </div>
                    </div>
    <div className='flex gap-3 flex-wrap'>
         <button className='px-6 py-3 bg-[#017CBA] rounded-[10px]  text-white mt-5 cursor-pointer'>
                    Explore Courses
                 </button>
                  <button className='px-6 py-3 bg-[#FFFFFF] rounded-[10px] 
                  ml-6 text-[#017CBA] mt-5 flex  items-center gap-3 cursor-pointer'>
                     <CiPlay1 size={16}  className='text-[#017CBA] '/>  
                     Watch Demo
                 </button>
    </div>
                 
         </div> 
          {/* Left Section Ends*/}
          {/* Right Section */}
          <div className='w-full hidden lg:block lg:w-[50%] h-[584px] ml-auto mt-8 '>
               <img src={DemoImg} alt="" className='max-w-full h-auto'/>

               <div className='absolute top-0
               lg:left-150  hidden md:flex sm:left-120  h-[52px] w-[135px]  
               bg-white rounded-[12px] flex items-center gap-4'> 
                         <div className='rounded-full  h-[12px]
                          w-[12px] bg-[#22C55E] ml-3'>
                                       
                         </div>
                         <p>
                            Live Classes
                         </p>
               </div>
            
              
          </div>
            {/* Right Section Ends*/}
      </div>
               <div className='w-[121px] 
                 h-[84px] absolute bottom-[76px] 
                 right-9 bg-white rounded-[12px] 
                 max-md:right-6 max-md:bottom-12
                 max-sm:right-4 max-sm:bottom-8
                 flex flex-col items-center  
                 justify-center
                 hidden md:flex
                 '> 
                    
                    <div>
                    <p className='text-[#2563EB]  font-[700] text-[24] '>98%</p>
                    <p className='text-[#4B5563] font-[400]'>Succes Rate</p>
                    </div>
                   
               </div>
    </div>
  )
}

export default Hero