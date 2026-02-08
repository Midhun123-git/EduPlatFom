import React from 'react'

import { TbBackground } from 'react-icons/tb';
const PhyComp2 = (props) => {
  return (
    <div >
            <div className='flex flex-col items-center gap-2'>
                <div className='w-12 h-12 flex items-center justify-center 
    rounded-full' style={{backgroundColor:props.bg}}>
           {props.icon}
    </div>
    <p className='font-bold text-3xl text-[#16A34A]' style={{color:props.textcolour}}>{props.text}</p>
    <p className='text-[#4B5563] font-normal text-[14px]'>{props.text2}</p>
            </div>
    
  </div>
  )
}

export default PhyComp2