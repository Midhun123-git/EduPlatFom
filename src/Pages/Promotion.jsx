import React from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineDeviceMobile } from "react-icons/hi";
const Promotion = () => {
  return (
    <div className='w-full py-10 relative flex justify-center items-center   lg:h-[613px] bg-[linear-gradient(120deg,#017CBA_0%,#017CBA_10%,#DB0082_90%,#DB0082_100%)]'>
       <div className='w-[90%]   lg:h-[453px] flex 
        flex-col lg:flex-row  gap-10'>
           {/* left section */}
           <div className='flex flex-col gap-3 text-center lg:text-left'>
                    <p className='font-[700] text-[28px] lg:text-[36px]  text-[#FFFFFF] '>Take Your Learning</p>
                    <p className='font-[700] text-[28px] lg:text-[36px]  text-[#FFFFFF] leading-0.5'>Anywhere with Our App</p>
                    <p className='font-[400] text-[16px] lg:text-[20] text-[#E9EDF2] mt-5'>
                        Download the EduPlatform mobile app and access all your  <br className='hidden lg:block'/>
                        courses, live classes, and study materials on the go.</p>

                        {/* <div className='flex flex-col gap-4 mt-5'>
                                 <div className='flex gap-3  items-center'>
                                              <div className='rounded-full h-[10px] w-[10px]  bg-[#FFFFFF]'/>
                                              <p className='font-[400]  text-[16px] text-[#E9EDF2]'>Offline video downloads</p>
                                </div>

                                <div className='flex gap-3  items-center'>
                                              <div className='rounded-full h-[10px] w-[10px]  bg-[#FFFFFF]'/>
                                              <p className='font-[400]  text-[16px] text-[#E9EDF2]'>Push notifications for classes</p>
                                </div>

                                <div className='flex gap-3  items-center'>
                                              <div className='rounded-full h-[10px] w-[10px]  bg-[#FFFFFF]'/>
                                              <p className='font-[400]  text-[16px] text-[#E9EDF2]'>Progress tracking & analytics</p>
                                </div>

                                
                                <div className='flex gap-3  items-center'>
                                              <IoIosStarOutline size={20} className='text-[yellow]'/>
                                              <p className='font-[400]  text-[16px] text-[#E9EDF2]'>4.8/5 on App Store & Play Store</p>
                                </div>
                        </div> */}

                      <div className="flex flex-col gap-4 mt-5 items-center">
  {[
    "Offline video downloads",
    "Push notifications for classes",
    "Progress tracking & analytics with detailed reports and insights that extend to next line"
  ].map((text, i) => (
    <div
      key={i}
      className="flex gap-3 items-start text-left w-full max-w-md"
    >
      <div className="rounded-full h-[10px] w-[10px] bg-white mt-2 flex-shrink-0" />
      <p className="text-[#E9EDF2]">
        {text}
      </p>
    </div>
  ))}
</div>


                        <div className='flex gap-5 mt-5 flex-wrap  lg:justify-start justify-center'>
                                        <div className='flex gap-4 w-[181px]  cursor-pointer rounded-[10px] p-2 bg-[#000000] text-white items-center'>
                                        <MdOutlineFileDownload size={16} />
                                        <p className='font-[600]'>Download on the <br /> <span className='font-[500]'>App Store</span></p>
                                        </div>

                                         <div className='flex gap-4 w-[181px] cursor-pointer rounded-[10px] p-2 bg-[#000000] text-white items-center'>
                                        <MdOutlineFileDownload size={16} />
                                        <p className='font-[600]'>Get It On <br /> <span className='font-[500]'>Google Play</span></p>
                                        </div>
                        </div>
           </div>
        
           {/* leftsection ends */}
         <div className='flex  flex-col sm:mt-4 items-center justify-center relative  sm:ml-0 lg:ml-[230px]'>
             <div className='lg:w-[256px] lg:h-[384px] border-5 border-[#111827]  bg-[#FFFFFF]
           rounded-[24px] 
           '>
                 <div  className='w-full h-[24px] bg-[#F1F5F9]  flex justify-between  rounded-tr-[16px] rounded-tl-[16px]'>
                             <p className='ml-2  font-[500]  text[#020817]'>9:41</p>
                             <BsThreeDots  className='mr-3 text-[#9CA3AF]'/>

                 </div>

                 <div className='flex justify-between mt-5 '>
                    <p className='font-[700] text-[18px] text-[#111827]  ml-2'>EduPlatform</p>
                        <HiOutlineDeviceMobile  size={24} className='mr-2 text-[#2563EB]'/>
                 </div>

                 <div className='flex flex-col items-center  gap-7  mt-5'>
                        <div className='flex flex-col gap-1 p-2 bg-[#F0FDF4] w-[208px] h-[60px] rounded-[12px]'>
                             <p className='text-[#2563EB] text-[14px] font-[500] mt-1'>Live Class Starting</p>
                               <p className='text-[#4B5563] text-[12px] font-[400]'>Mathematics - 10:00 AM</p>
                        </div> 

                          <div className='flex flex-col gap-1 p-2  bg-[#F0FDF4] w-[208px] h-[60px] rounded-[12px]'>
                             <p className='text-[#111827] text-[14px] font-[500] mt-1'>Today's Practice</p>
                               <p className='text-[#4B5563] text-[12px] font-[400]'>5 questions remaining</p>
                        </div>

                          <div className='flex flex-col gap-1 p-2 bg-[#F0FDF4] w-[208px] h-[60px] rounded-[12px]'>
                             <p className='text-[#16A34A] text-[14px] font-[500] mt-1'>Test Results</p>
                               <p className='text-[#4B5563] text-[12px] font-[400]'>Score: 85/100</p>
                        </div>
                 </div>
           </div>
         </div>
           

            <div className='w-[48px] h-[48px]
             bg-[#FACC15] rounded-full 
             ml-5 flex items-center 
             hidden lg:flex
             cursor-pointer justify-center
             absolute
             top-[20%]
             lg:left-[75%]
             
             '>
                    <IoIosStarOutline  size={24}/>
            </div>
           
       </div>
         <div className='w-[48px] h-[48px] 
         bg-[#4ADE80] cursor-pointer 
         rounded-full ml-5 flex 
         hidden lg:flex
         items-center justify-center 
         absolute
         lg:bottom-[20%]
         sm:bottom-[10%]
         right-[50%]
         '>
                    <MdOutlineFileDownload  size={24}/>
        </div>
    </div>
  )
}

export default Promotion