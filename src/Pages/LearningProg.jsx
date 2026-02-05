import React from 'react'
import Programs from '../Componets/Programs'
import { HiOutlineBookOpen } from "react-icons/hi2";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiSpiralThin } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";
import { LuCrown } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
const LearningProg = () => {
  return (
    <div className='flex flex-col gap-5 flex-wrap '>
                 <p className='font-inter  font-[700] text-[#111827] text-[24px] md:text-[30px] lg:text-center text-[36px]'>Comprehensive Learning Programs</p>
           <p className='text-[#4B5563] text-[16px] md:text-[18px] lg:text-[20px] text-center'>Choose from our wide range of courses designed to help you achieve your <br className='hidden md:block'/>
academic and career goals</p>
          <div className='flex lg:flex-row flex-col  gap-9 justify-center'>
    <Programs
                icon={<HiOutlineBookOpen size={35} />}
                iconBg="#3B82F6"
                title="School Tuition"
                description=
                {
                    <>
                    Classes 4-12 covering CBSE, ICSE,<br/> And State syllabi
                    </>
                }
                
                point1="Interactive Live Classes"
                point2="Doubt Clearing Sessions"
                point3="Regular Assessments"
         />  

          <Programs
                icon={<RiGraduationCapLine size={35} />}
                iconBg="#A855F7"
                title="College Tuition"
                description=
                {
                    <>
                   BSc, BCom, BA, BTech and other <br /> degree 
                    programs
                    </>
                }
                
                point1="Subject Experts"
                point2="Practical Learning"
                point3="Project Guidance"
         />  

         <Programs
                icon={<PiSpiralThin size={35} />}
                iconBg="#22C55E"
                title="Entrance Coaching"
                description=
                {
                    <>
                   NEET, JEE, KEAM, CUET preparation
                    </>
                }
                
                point1="Mock Tests"
                point2="Previous Year Papers"
                point3="Rank Prediction"
         />  
          </div>

          <div className='flex  lg:flex-row flex-col  gap-9 justify-center'>
                        <Programs
                                icon={< PiMedalThin  size={35} />}
                                iconBg="#F97316"
                                title="Government Exams"
                                description=
                                {
                                    <>
                                SSC, Bank, PSC, Railway exam <br />
                                    preparation
                                    </>
                                }
                                
                                point1="Current Affairs"
                                point2="Speed Training"
                                point3="Interview Prep"
                        />  

                        <Programs
                                icon={< LuCrown size={35} />}
                                iconBg="#EF4444"
                                title="UPSC Coaching"
                                description=
                                {
                                    <>
                                Prelims, Mains, Interview, Optional <br />
                                    subjects
                                    </>
                                }
                                
                                point1="Comprehensive Coverage"
                                point2="Essay Writing"
                                point3="Personality Dev"
                        />  

                        <Programs
                                icon={<FiUsers size={35} />}
                                iconBg="#14B8A6"
                                title="Skill Development"
                                description=
                                {
                                    <>
                               Professional skills and certification <br />
                               courses
                                    </>
                                }
                                
                                point1="Industry Relevant"
                                point2="Hands-on Practice"
                                point3="Certificate"
                        />  
          </div>
    </div>
  )
}

export default LearningProg