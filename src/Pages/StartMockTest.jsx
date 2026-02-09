import React from 'react'
import { FiClock } from "react-icons/fi";
import { CiFlag1 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const StartMockTest = () => {
    const items=[
        {id:1,letter:"A",name:"Nucleus"},
         {id:2,letter:"B",name:"Mitochondria"},
          {id:3,letter:"C",name:"Ribosome"},
           {id:4,letter:"D",name:"Endoplasmic Reticulum"}
    ]
    const steps=[
            {id:1,no:1,bg:"#017CBA"},
            {id:2,no:2,bg:"#D1D5DB"},
            {id:3,no:3,bg:"#D1D5DB"}
        
    ]
    const status=[
        {id:1,bg:"#22C55E",state:"Answered (0)"},
          {id:2,bg:"#EAB308",state:"Flagged (0)"},
          {id:3,bg:"#EF4444",state:"Skipped"},
           {id:4,bg:"#D1D5DB",state:"Not Visited"}
          
    ]
  return (
  <div className='flex flex-col gap-2 w-full'>
    <div className='flex justify-between p-6 flex-wrap'>
                <div className='flex flex-col gap-2  ml-7'>
                        <p className='text-[#111827] font-[600] 
                        text-[20px] ' > Plus Two Bio science - Complete Course</p>
                          <p className='text-[#4B5563] font-[400] 
                        text-[14px] ' > Question 1 of 3</p>
                </div>
                <div className='flex gap-3 flex-wrap'>
                     <div className='w-[116px] h-[40px] flex items-center  justify-center bg-[#F1F5F9] rounded-[12px]'>
                                <div className='flex  items-center justify-center gap-2'>
                                        <FiClock size={16}/>
                                        <p className='text-[#374151] 
                                        font-[500] 
                                        text-[16px]'>01:29:04</p>
                                </div>
                     </div>
                       <div className='w-[116px] h-[40px] flex items-center  justify-center bg-[#F1F5F9] rounded-[12px]'>

                                 <div className='flex  items-center justify-center gap-2'>
                                        <p className='text-[#020817] 
                                        font-[500] 
                                        text-[14px]'>Submit Test</p>
                                </div>
                     </div>
                </div>
    </div>
<div className="flex justify-center px-4">
  <div className="w-[1216px] h-[16px] bg-[#E5E7EB] rounded-[15px] flex ">
    
    {/* Left Progress (Blue) */}
    <div className="h-full w-[60%] bg-blue-600 rounded-l-[15px]" />

    {/* Right Progress (Orange Dashed) */}
    <div className="h-full w-full  bg-[#F97316] rounded-r-[15px]"/>

  </div>
</div>

        <div className='flex gap-5 flex-col lg:flex-row mt-7 flex-wrap'>
            <div className='flex lg:flex-row  flex-col gap-16'>
                        <div className='flex flex-col'>
                             <div className='flex flex-col p-6 gap-2 
                        lg:h-[536px] bg-[#FFFFFF] w-full lg:w-[906px] rounded-[12px] border-1 border-[#E2E8F0]
                        '>
                             <div className='flex justify-between  p-6 pb-2'>
                                    <p className='text-[#020817] font-[600] text-[18px]
                                    '>Question 1</p>
                                    <div className='flex gap-3'>
                                                    <div className='rounded-[15px] border-1 border-[#E2E8F0]'>
                                                        <p  className='p-3'>Physics</p>
                                                    </div>

                                                      <div className='rounded-[15px] flex  items-center justify-center border-1 border-[#E2E8F0]'>
                                                        <div className='pl-3 pr-3' >
                                                             <CiFlag1 size={16}/>
                                                        </div>
                                                       
                                                    </div>
                                    </div>
                             </div>
                                     <p className='text-[#020817] font-[600] text-[18px] p-6 pt-2
                                    '>Which of the following is the powerhouse of the cell?</p>
                {items.map((item)=>(
  <div  key={item.id}
  className='h-[68px] flex items-center p-6  border-2 rounded-[12px] border-[#E5E7EB]'>
                                                <div className='flex gap-4 items-center'>
                                                            <div className='rounded-full border-2  border-[#E2E8F0]
                                                            h-[32px] w-[32px] flex items-center justify-center text-[#020817]
                                                            '>
                                                               {item.letter}
                                                            </div>
                                                            <p className='text-[#020817]'>{item.name}</p>
                                                </div>
                                    </div>
                ))}
                                  
                             
                             </div>
                             <div className='flex justify-between  flex-wrap
                             gap-5
                               items-center  mt-5
                              '>
                               <div className='flex cursor-pointer gap-2  p-4  border-1 border-[#E2E8F0] justify-center  rounded-[10px]'>
                                    <MdOutlineKeyboardArrowLeft size={24} />
                                    <p className='text-[#020817] font-[500] text-[14px]'> Previous</p>
                               </div>
                                <div className='p-4 cursor-pointer border-1 border-[#E2E8F0] justify-center  rounded-[10px]'>
                                    <p className='text-[#020817] font-[500] text-[14px]'> Clear Response</p>
                               </div>

                               <div className='p-4 cursor-pointer border-1 border-[#E2E8F0] justify-center  rounded-[10px]'>
                                    <p className='text-[#020817] font-[500] text-[14px]'> Save And Next</p>
                               </div>

                                <div className='flex gap-2 cursor-pointer bg-[#017CBA] p-4 text-white border-1 border-[#E2E8F0] justify-center  rounded-[10px]'>
                                  
                                    <p className='text-white font-[500] text-[14px]'> Next</p>
                                      <MdKeyboardArrowRight size={24} />
                               </div>
                               
                             </div>
                             
                        </div>
                       
                           <div className='w-full lg:w-[280px] h-[330px] border-1 m-2 border-[#E2E8F0] justify-center flex flex-col rounded-[12px]'>
                                <p className="font-[600] text-[#020817] p-4 text-[16px]">Question Navigation</p>
                                 <div className='flex pl-4   gap-3'>
                                                            {steps.map((item)=>(
                                                                     <div className='w-[40px] h-[40px] rounded-[4px]
                                                             
                                                             text-white
                                                             flex items-center justify-center'
                                                             style={{ backgroundColor:item.bg }}
                                                             >
                                                                   {item.no}
                                                                </div>
                                                            ))}
                                                           
                                </div>
                               <div className='flex flex-col gap-4 p-4'>
                                {status.map((stat)=>(
                                        <div className='flex items-center gap-3'>
                                                <div className='h-[16px] w-[16px] rounded-[4px]'  style={{ backgroundColor:stat.bg}}/>
                                                        <p>{stat.state}</p>
                                                                
                                                 </div>
                                                 
                                ))}
                                        <button className='bg-[#EF4444] text-white p-3 rounded-[10px] cursor-pointer'>
                                            Submit
                                        </button>        
                               </div>
                          </div>  
                                        
                            
                       
            </div>
        </div>     

        </div>
     
  )
}

export default StartMockTest