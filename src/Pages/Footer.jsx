import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
const Footer = () => {
  return (
      <div className='flex flex-col w-full lg:h-[376px]
     bg-[#111827] flex   items-center  justify-center
      gap-10  px-5 py-10'> 
         <div className='
    flex  flex-col lg:flex-row  items-start  justify-center
      gap-10 md:gap-20  '>
             <div className='flex flex-col gap-3 text-center lg:text-left'>
                <div className='flex flex-row gap-3 items-center  justify-center lg:justify-start'>
                                        <LuGraduationCap size={32} className='text-[#2563EB]'/>
                                        <p className='font-[700]  text-[#FFFFFF]'>EduPlatform</p>
                </div>
                <p className='text-[#D1D5DB] font-[400] text-[14px]'>
                    Empowering students with quality  <br />
                    education through comprehensive online <br />
                    tuition and coaching programs.
                </p>
                <div className='flex gap-6 justify-center lg:jystify-start'>
                                        <FaFacebookF size={20} className='text-[#9CA3AF] cursor-pointer'/>
                                        <CiTwitter size={20} className='text-[#9CA3AF] cursor-pointer'/>
                                        <RiInstagramLine size={20} className='text-[#9CA3AF] cursor-pointer'/>
                                        <CiYoutube  size={20} className='text-[#9CA3AF] cursor-pointer'/>
                </div>
             </div>

             <div className='flex flex-col  gap-2'>
                  <p className='font-[600] text-[18px] text-[#FFFFFF]'>Quick Links</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>College Tuition</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>Entrance Coaching</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>Government Exams</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>UPSC Coaching</p>
                  
             </div>

             <div className='flex flex-col  gap-2'>
                  <p className='font-[600] text-[18px] text-[#FFFFFF]'>Support</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>Help Center</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>FAQ</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>Contact Us</p>
                  <p className='font-[400] text-[14px] text-[#D1D5DB]'>Privacy And Policy</p>
                    <p className='font-[400] text-[14px] text-[#D1D5DB]'>Terms Of Service</p>
             </div>
             <div className='flex flex-col  gap-2'>
                  <p className='font-[600] text-[18px] text-[#FFFFFF]'>Contact Info</p>
                  <div className='flex gap-4'>
                            <CiMail size={20} className='text-[#3B82F6]'/>
                            <p className='font-[400] text-[14px] text-[#D1D5DB]'>support@eduplatform.com</p>
                  </div>
                  <div className='flex gap-4'>
                            < FiPhone size={20} className='text-[#3B82F6]'/>
                            <p className='font-[400] text-[14px] text-[#D1D5DB]'>+91 98765 43210</p>
                  </div>
                  <div className='flex gap-4'>
                            <IoLocationOutline size={20} className='text-[#3B82F6]'/>
                            <p className='font-[400] text-[14px] text-[#D1D5DB]'>Mumbai, Maharashtra, India</p>
                  </div>
                 
             </div>
             
             
             
    </div>
     <p className='text-center text-[14px] font-[400] text-[#9CA3AF] pb-3'>© 2024 EduPlatform. All rights reserved. | Designed for Excellence in Education</p>
        </div>
    
  )
}

export default Footer