import React from 'react'
import { FaRegChartBar } from "react-icons/fa";
import PhyComp2 from './PhyComp2';
import { FiCheckCircle } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { FiClock } from "react-icons/fi";
const PhyComp3 = () => {
    const Subjects=[
        {
            name:"Cell Biolagy",
            Score:"7/8 (87.5%)",
            orange:"20%",
            blue:"80%"
        },
        {
            name:"Genatics",
            Score:"8/10 (80%)",
            orange:"25%",
            blue:"75%"
        },
        {
            name:"Ecology",
            Score:"5/7 (71.4%)",
            orange:"40%",
            blue:"60%"
        },
        {
            name:"Plant Physiolagy",
            Score:"9/12 (75%)",
            orange:"30%",
            blue:"70%"
        },
         {
            name:"Human Physiolagy",
            Score:"6/8 (75%)",
            orange:"30%",
            blue:"70%"
        }
        
    ]
  return (
    <div className=' w-full lg:w-200  flex flex-col 
  border border-[#E2E8F0]  rounded-xl bg-[#FFFFFF]'>
        <div className='flex items-center p-4 gap-2'>
            <FaRegChartBar  size={20}/>
            <p className='font-semibold text-[24px] text-[#020817]'>Question Analysis</p>
        </div>
        <div>

       
     <div className='flex gap-5  justify-evenly'>
            
            <PhyComp2
            icon={ <FiCheckCircle size={24} className='text-[#16A34A]'/>}
            bg="#DCFCE7"
            text="4"
            textcolour="#16A34A"
            text2="Corect"
            />

             <PhyComp2
            icon={ < RxCrossCircled  size={24} className='text-[#DC2626]'/>}
            bg="#FEE2E2"
            text="7"
            textcolour="#DC2626"
            text2="InCorect"
            />

             <PhyComp2
            icon={ <FiClock  size={24} className='text-[#4B5563]'/>}
            bg="#F1F5F9"
            text="3"
            textcolour="#4B5563"
            text2="Skipped"
            />

           

     </div>
     {/* Bar And The Text Ends*/}
     {Subjects.map((items)=>(
<div className='pb-4'>
        {/* sub Starts*/}
<div className='flex justify-between p-4'>
                <p className='text-[#020817] font-medium text-[16px]'>{items.name}</p>
                <p className='text-[#4B5563] font-normal text-[14px]'>{items.Score}</p>
     </div>
     {/* sub end*/}
     {/* Progras Bar Starts*/}
     <div className="flex justify-center px-4">
  <div className="w-187 h-2 bg-[#E5E7EB] rounded-[15px] flex ">
    
    {/* Left Progress (Blue) */}
    <div className="h-full  bg-blue-600 rounded-l-[15px]"
    style={{width:items.blue}}
    />

    {/* Right Progress (Orange Dashed) */}
    <div className="h-full w-full  bg-[#F97316] rounded-r-[15px]"
    style={{width:items.orange}}
    />

  </div>
    </div>
      {/* Progras Bar End*/}
     </div>
     ))}
     
     {/* Bar And The Text Ends*/}
   

 </div>
    </div>
  )
}

export default PhyComp3