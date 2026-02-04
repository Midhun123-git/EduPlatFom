import React from 'react'
import Review from '../Componets/Review'
import VikashMehta from "../assets/VikashMehta.png"
import ArjunPatel from "../assets/ArjunPatel.png"
import SnehaReddy from "../assets/SnehaReddy.png"
import AnanyaSingh from "../assets/AnanyaSingh.png"
import RahulKumar from "../assets/RahulKumar.png"
const ReviewPage = () => {
  return (
    <div className='bg-[#FFFFFF] w-full lg:h-[967px] px-4 lg:px-0'>
            <p className='text-[#111827] text-[36px] font-[700] text-center pt-2'>Success Stories</p>
            <p className='font-[400] text-[20px] text-[#4B5563] text-center'>Hear from our students who achieved their dreams with our guidance</p>
            <div className='flex items-center justify-center  mt-8'>
                 <div className='flex  flex-col '>
                        <div className='flex lg:flex-row flex-col gap-6  mt-9'>
                                                 <Review
                                                description="EduPlatform's NEET coaching was
                                                        exceptional. The structured approach and
                                                        regular mock tests helped me achieve my
                                                        dream of getting into AIIMS."
                                                
                                                reviewerName="Priya Sharma"
                                                reviewerTitle="NEET 2024 AIR 156"
                                                category="NEET"
                                                rating={5}
                                                /> 

                                                 <Review
                                                description="The doubt clearing sessions and
                                                        personalized attention from teachers
                                                        made all the difference. Highly
                                                        recommend for JEE preparation."
                                                image={ArjunPatel}
                                                reviewerName="Arjun Patel"
                                                reviewerTitle="JEE Advanced AIR 89"
                                                category="JEE"
                                                rating={5}
                                                /> 

                                                 <Review
                                                description="The interactive classes and
                                                        comprehensive study material helped me
                                                        score excellent marks in my boards. The
                                                        teachers are very supportive."
                                                image={SnehaReddy}
                                                reviewerName="Sneha Reddy"
                                                reviewerTitle="Class 12 CBSE - 98.2%"
                                                category="CBSE"
                                                rating={5}
                                                /> 
                        </div>

                           <div className='flex lg:flex-row flex-col  gap-6 mt-9'>
                                                 <Review
                                                description="The speed training and mock tests for
                                                            SSC were exactly what I needed. The
                                                            quantitative aptitude sessions boosted my
                                                            confidence significantly."
                                                    image={AnanyaSingh}
                                                reviewerName="Ananya Singh"
                                                reviewerTitle="SSC CGL 2023 Selected"
                                                category="SSC"
                                                rating={5}
                                                /> 

                                                 <Review
                                                description="EduPlatform's UPSC course is
                                                        comprehensive with excellent current
                                                        affairs coverage. The essay writing
                                                        sessions were particularly helpful."
                                                image={RahulKumar}
                                                reviewerName="RahulKumar"
                                                reviewerTitle="UPSC CSE 2023 - Rank 45"
                                                category="UPSC"
                                                rating={5}
                                                /> 

                                                 <Review
                                                description="The banking exam preparation course is well-structured with focus on reasoning and quantitative aptitude."
                                                image={VikashMehta}
                                                reviewerName="Vikash Mehta"
                                                reviewerTitle="Banking PO - SBI"
                                                category="Banking"
                                                rating={5}
                                                /> 
                        </div>
                 </div>

               
            </div>
              <p className='font-[400] text-[16px] text-[#4B5563] text-center  mt-9'>Join thousands of successful students</p>

              <div className='flex flex-col sm:flex-row items-center justify-center  gap-5  mt-6'>
                <button className='hover:bg-[#017CBA]  lg:w-auto w-full
                 bg-white border border-[#017CBA]   text-[#017CBA] 
                 hover:text-white rounded-[12px] p-2 cursor-pointer
                 transition duration-100 ease-in
                 '>
                    Explore Courses 
                </button>
                <button className='text-[#017CBA] border cursor-pointer
                 border-[#017CBA] bg-white 

                 hover:bg-[#017CBA]  hover:text-white 
                 transition duration-100 ease-in
                 rounded-[12px] p-2
                 lg:w-auto
                 w-full
                 '>
                    View All Success Stories
                </button>
              </div>
    </div>
  )
}

export default ReviewPage