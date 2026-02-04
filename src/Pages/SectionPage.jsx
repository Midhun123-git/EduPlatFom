import React from 'react'
import Sections from '../Componets/Sections'
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { LuNotepadText } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuGlobe } from "react-icons/lu";
import { IoShieldOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
const SectionPage = () => {
  return (
    <div className='bg-[#F9FAFB] lg:w-full lg:h-[800px] py-12'>
      <p className='font-[700] text-[28px] sm:text-[32px] lg:text-[36px] p-2 text-[#111827] text-center'>Why Choose EduPlatform?</p>
      <p className='font-[400] text-[16px] sm:text-[18px] lg:text-[20px] text-[#4B5563] text-center'>Experience the perfect blend of technology and personalized learning designed
<br className='hidden sm:block'/> for your success</p>

<div className='flex flex-col gap-8 justify-center items-center'>
    <div className='flex flex-col sm:flex-row flex-wrap gap-4'>
             <Sections 
                    icon={<IoVideocamOutline size={24} className="text-[#017CBA]" />}
                    title="Live Interactive Classes"
                    description="Attend live classes with real-time interaction, 
                        whiteboard sharing, and instant doubt resolution."
             />
             <Sections
                    icon={<LuMessageCircle size={24} className="text-[#017CBA]" />}
                    title="Doubt Clearing"
                    description= {
                        <>
                         24/7 doubt clearing through chat,
                                    voice calls, or dedicated <br /> doubt
                                    clearing sessions.
                        </>
                    }
             />

              <Sections
                    icon={<CiCalendar size={24} className="text-[#017CBA]" />}
                    title="Flexible Scheduling"
                    description={<>
                               Choose class timings that fit your <br />
                                schedule with recorded sessions
                                for missed classes
                    </>}
             />
             <Sections
                    icon={<LuNotepadText size={24} className="text-[#017CBA]" />}
                    title="Test Series & Practice"
                    description={
                        <>
                                Regular mock tests, chapter-wise
                                <br />
                                quizzes, and previous year
                                question papers.
                        </>
                    }
             />
    </div>
    <div className='flex flex-col sm:flex-row flex-wrap gap-4'>
             <Sections
                    icon={< FaArrowTrendUp  size={24} className="text-[#017CBA]" />}
                    title="Progress Tracking"
                    description={
                        <>
                        Detailed analytics of your <br />
                        performance with personalized
                        improvement suggestions.
                        </>
                    }
             />
             <Sections
                    icon={<LuGlobe size={24} className="text-[#017CBA]" />}
                    title="Multi-language Support"
                    description={
                        <>
                        Learn in your preferred language <br />
                        with content available in Hindi,
                        English, and regional languages.
                        </>
                    }
             />

              <Sections
                    icon={<IoShieldOutline size={24} className="text-[#017CBA]" />}
                    title="Certified Instructors"
                    description={
                        <>
                        Learn from experienced teachers  <br />
                        with proven track records in their
                        respective subjects.
                        </>
                    }
             />
             <Sections
                    icon={<CiHeadphones size={24} className="text-[#017CBA]" />}
                    title="24/7 Support"
                    description={
                        <>
                        Round-the-clock technical and <br />
                        academic support to ensure
                        smooth learning experience.
                        </>
                    }
             />
    </div>
</div>
    </div>
  )
}

export default SectionPage