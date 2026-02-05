import React from 'react'
import PopularCourses from '../Componets/PopularCourses'
import Sub from "../assets/Sub.png"
import Intermediate from "../assets/intermediate.png"
import Upsc from "../assets/Upsc.png"
import Ssc from "../assets/Ssc.png"
import { FaArrowRight } from "react-icons/fa";
const PopularCoursesPage = () => {
  return (
    <div className='bg-[#F9FAFB] w-full '>
           <p className='font-inter  font-[700] text-[#111827] text-center text-[36px]'>Popular Courses</p>
           <p className='text-[#4B5563] text-[20px] text-center'>Join thousands of students already learning with our top-rated courses</p>
          <div className='flex flex-wrap  p-4 gap-6 justify-center'>
                    <PopularCourses
                                image={Sub}
                                discount="40% OFF"
                                popular="Popular"
                                level="Advanced"
                                rate="4.8"
                                review="(12,500)"
                                description={
                                    <>
                                    Complete Mathematics for <br /> Class 10 CBSE
                                    </>
                                }
                                professor="Dr. Rajesh Kumar"
                                duration="6 Months"
                                lessons="180 Lessons"
                                price="₹2,999"
                                oldprice="₹8,999"
                        /> 
                        <PopularCourses
                                image={Intermediate}
                                discount="40% OFF"
                                level="Intermediate"
                                rate="4.7"
                                review="((8,900))"
                                description={
                                    <>
                                   CBSE Class 12 Physics <br />
                                                      Complete Course 
                                    </>
                                }
                                professor="Prof. Meera Sharma"
                                duration="4 Months"
                                lessons="120 Lessons"
                                price="₹2,999"
                                oldprice="₹4,999"
                        /> 

                        <PopularCourses
                                image={Upsc}
                                discount="38% OFF"
                                popular="Popular"
                                level="Expert"
                                rate="4.9"
                                review="(15,600)"
                                description={
                                    <>
                                    UPSC Prelims & Mains <br />
                                            Strategy 2024 
                                    </>
                                }
                                professor="IAS Priya Joshi"
                                duration="12 Months"
                                lessons="300 Lessons"
                                price="₹7,999"
                                oldprice="₹12,999"
                        /> 

                        <PopularCourses
                                image={Ssc}
                                discount="42% OFF"
                                
                                level="Intermediate"
                                rate="4.6"
                                review="(6,700)"
                                description={
                                    <>
                                   SSC CGL Complete  <br />
                                            Preparation
                                    </>
                                }
                                professor="Amit Verma"
                                duration="5 Months"
                                lessons="150 Lessons"
                                price="₹3,499"
                                oldprice="₹5,999"
                        /> 
          </div>
       
             <div className='flex justify-center '>
                    <button className='text-[#017CBA] border border-[#2563EB] flex rounded-[10px] p-2 items-center gap-3 cursor-pointer'> 
                            View All Courses
                            <FaArrowRight size={16}/>
                    </button>
             </div>
          
    </div>
  )
}

export default PopularCoursesPage