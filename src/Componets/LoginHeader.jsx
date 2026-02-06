import React, { useState } from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { Link } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import Profile from '../assets/Profile.jpg'
const LoginHeader = () => {
    const [isopen,setisopen]=useState(false);
  return (
    <div className='w-full shadow-md  h-[63px] flex items-center mt-3 gap-9  p-4 md:p-6 justify-between'>
        <div className='flex flex-row '>
            <div className='flex flex-row gap-3 items-center  lg:ml-[120px] lg:mr-[160px]'>
                        <LuGraduationCap size={32} className='text-[#2563EB]'/>
                        <p className='font-[700]  text-[#111827]'>EduPlatform</p>
            </div>

            <ul className='hidden md:flex items-center  gap-7 font-[500] text-[#374151] '>
                <li className='hover:text-[#2563EB]'><Link to="/">Home</Link></li>
                <li className='relative group cursor-pointer '>
                    <div className='flex items-center justify-center gap-1 hover:text-[#2563EB]'> 
                        <span >Courses</span>
                        <span className='transition-transform duration-200 group-hover:rotate-180 '>▾</span>
                    </div>

                    {/* Dropdown */}
 
                    <ul className='absolute left-1/2 top-full mt-2 w-40 hover:text-none
                    -translate-x-1/2 bg-white rounded-lg shadow-lg opacity-0 invisible 
                     group-hover:opacity-100 group-hover:visible
                     transition-all duration-300'>
                                <li className='px-4 py-2 text-center hover:bg-gray-100 rounded-t-lg hover:text-[#2563EB]'>
                                    Science
                                </li>
                                 <li className='px-4 py-2 text-center hover:bg-gray-100 rounded-t-lg hover:text-[#2563EB]'>
                                    Maths
                                </li>

                                <li className='px-4 py-2 text-center hover:bg-gray-100 rounded-t-lg hover:text-[#2563EB]'>
                                    English
                                </li>
                    </ul>
                </li>
                <li className='hover:text-[#2563EB]'><Link to="/">My Learning</Link></li>
                <li className='hover:text-[#2563EB]'><Link to="/">Test Practice</Link></li>
                <li className='hover:text-[#2563EB]'><Link to="/">About Us</Link></li>
                
            </ul>
                 
            <div className='md:hidden flex justify-end ml-[190px]'>
                        <button onClick={()=>setisopen(true)}>
                                 <HiBars3  size={24}/>
                        </button>
            </div>
    {/* Mobile SideBAR */}
             <div className={`fixed top-0 right-0 h-full w-64 \
                bg-white shadow-lg  transform  
                ${isopen ? "translate-x-0"
                 : "translate-x-full"
                 }
                 transition-transform duration-300 z-50
                 `}>
                    {/* closing */}

                    <div  className='md:hidden flex justify-end'>
                           <button
                           onClick={()=>setisopen(false)}
                           >
                              <IoIosClose size={24}/>
                           </button>
                    </div>
                    <div className='w-[42px] h-[42px] ml-3 mb-4 lg:mr-[90px]'>
                            <img src={Profile} alt="" className='rounded-full'/>
                    </div>
                     <ul className='flex flex-col gap-4 pl-2 text-lg font-medium '>
                            <li className='ml-2'>
                                 <Link to="/">Home</Link> 
                            </li>

                            <li className='ml-2'>
                                <div className='flex items-center justify-between cursor-pointer'>
                                             <span>Courses</span>
                                </div>
                                <ul className='ml-4 mt-2 flex flex-col gap-2'>
                                    <li>Science</li>
                                    <li>Maths</li>
                                    <li>English</li>
                                </ul>
                            </li>

                            <li className='ml-2'><Link>My Learning</Link></li>
                            <li className='ml-2'>  <Link to="/"> Test Practice </Link></li>
                            <li className='ml-2'>About Us</li>
                     </ul>
                       
                     
             </div>
        </div>
         <div className='w-[42px] h-[42px] lg:mr-[90px]'>
                            <img src={Profile} alt="" className='rounded-full'/>
         </div>
    </div>
  )
}

export default LoginHeader