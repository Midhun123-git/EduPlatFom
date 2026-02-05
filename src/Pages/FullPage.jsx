import React from 'react'
import Header from '../Componets/Header'
import Hero from '../Componets/Hero'
import LearningProg from './LearningProg'
import PopularCoursesPage from './PopularCoursesPage'
import Trust from './Trust'
import SectionPage from './SectionPage'
import Promotion from './Promotion'
import ReviewPage from '../Pages/ReviewPage'
import Footer from './Footer'
import Demo from "../assets/Demo.jpg"
const FullPage = () => {
  return (
    <div className='flex flex-col'>
                <div className='fixed top-0 left-0 z-50 bg-white w-full shadow-md'>
                  <Header/>
                </div>
                <Hero/>
                <div className='relative'>
                    <img src={Demo} className='block lg:hidden lg:w-[90%] sm:w-[80%] mt-6 mb-5' alt="" />
                     <div className='absolute top-0 left-2 lg:hidden
                h-[52px] w-[135px]  
               bg-white rounded-[12px] flex items-center gap-4'> 
                         <div className='rounded-full  h-[12px]
                          w-[12px] bg-[#22C55E] ml-3'>
                                       
                         </div>
                         <p>
                            Live Classes
                         </p>
               </div>

                <div className='w-[121px] 
                 h-[84px] absolute bottom-0 right-2 lg:hidden 
                 bg-white rounded-[12px] 
                
                 flex flex-col items-center  
                 justify-center
                 
                 '> 
                    
                    <div>
                    <p className='text-[#2563EB]  font-[700] text-[24] '>98%</p>
                    <p className='text-[#4B5563] font-[400]'>Succes Rate</p>
                    </div>
                   
               </div>
                </div>
                
                <div className='lg:mt-6  sm:mt-[60px]'>
                         <LearningProg />
                </div>

                <div className='mt-8'>
                    <PopularCoursesPage/>
                </div>

                <div className='mt-9'>
                    <Trust/>
                </div>
            <div className='mt-9'>
              <SectionPage/>
            </div>
            <div className='mt-9'>
              <ReviewPage/>
            </div>
                <div className='mt-9'>
                <Promotion/>
                </div>
                 <div className=''>
                <Footer/>
                </div>
              

            
    </div>
  )
}

export default FullPage