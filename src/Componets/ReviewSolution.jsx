import React from 'react'
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";

import { FaRegEye } from "react-icons/fa";
const ReviewSolution = (props) => {

    const options=[
        {id:1,Opt:"A",Ans:props.op1},
         {id:2,Opt:"B",Ans:props.op2},
          {id:3,Opt:"C",Ans:props.op3},
           {id:4,Opt:"D",Ans:props.op4}
    ]
const {correctanswer,useranswer}=props;
  return (
    <div className='w-full lg:w-[1216px] bg-[#EFF6FF] h-[425px] rounded-2xl'>
     <div className='flex flex-col gap-2 p-3'>
            <div className='flex justify-between flex-wrap'>
                    <div className='flex gap-3 items-center'>
                        {useranswer === correctanswer ?(
                                <SiTicktick size={20} className='text-[#16A34A]'/>
                        ) : (
                             <RxCrossCircled  size={20} className='text-[#DC2626]'/>
                        )
                    }
                        
                        <p className='text-[#020817]  font-semibold text-[18px]'>{props.question}</p>
                    </div>
                    <div className='flex gap-3 flex-wrap'>
                         <div className='border border-[#E2E8F0] rounded-4xl'> 
                            <p className='p-2'>{props.sub}</p>
                         </div>
                         <div className='bg-[#F97316] rounded-4xl'> 
                            <p className='p-2 text-white'>{props.mark}</p>
                         </div>
                    </div>
            </div>

            <p className='font-medium text-[16px] mb-3 text-[#111827]
            '>{props.questionText}</p>
            {options.map((items)=>{
                   const isCorrect = items.Opt === correctanswer;
                    const IsWrongSelected =
                    items.Opt === useranswer && useranswer !=correctanswer
                    return (
                          <div 
                          key={items.id}
                          className={`w-full 
                            h-auto min-h-[49px] 
                            cursor-pointer
                            border 
                            rounded-4xl 
                            m-1 ml-0 
                            flex 
                            items-center pl-3
                            ${
                                isCorrect ? "bg-[#DCFCE7] border-[#22C55E]" 
                                : IsWrongSelected ?
                                "bg-[#FEE2E2] border-[#EF4444]"
                                : "bg-white border-[#E2E8F0]"
                            }
                            `
                          }>
                        <div className='flex  items-center w-full justify-between gap-3'>
                             <div className='flex gap-3 items-center flex-wrap'>
                                        <p className='font-medium text-[16px]
                                        text-[#020817]
                                        '>{items.Opt}</p>
                                        <p className='font-normal text-[16px] text-[#020817]'>
                                            {items.Ans}
                                        </p>
                            </div>
                            <div className='mr-3'>
                                {
                                    isCorrect ? (
                                                 <SiTicktick size={16} className='text-[#16A34A]'/>
                                    ) :
                                    (
                                                 <RxCrossCircled  size={16} className='text-[#DC2626]'/>
                                    )
                                }
                                   
                                   
                            </div>
                              
                        </div>
                       
                        </div>
                    )
                    
})}
       <div className='flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>

        <div>
            <p className='text-[#4B5563] font-normal text-[14px] mt-4'>
            Your Answer {useranswer}
            <span className='ml-2'>Correct Answer {correctanswer}</span>
          </p>
         
        </div>
         <div className='bg-[#FFFFFF] cursor-pointer border flex items-center justify-center p-2 border-[#E2E8F0] rounded-2xl'>
                <div className='flex gap-3 items-center'>
                        <FaRegEye size={16}/>
                       <p className='text-[#4B5563] font-normal text-[14px] flex flex-wrap gap-2'>
Show Explanation</p>
                </div>
          </div>
        </div>         
          
     </div>
    </div>
  )
}

export default ReviewSolution