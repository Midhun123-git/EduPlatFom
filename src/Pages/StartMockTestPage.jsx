import React from 'react'
import { LuBookOpen } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import LoginHeader from '../Componets/LoginHeader'
import Test from "../Componets/Test"
import { FaRegChartBar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import Mock from "../Componets/Mock"
import Footer from "./Footer"
import StartMockTest from './StartMockTest';
const  StartMockTestPage = () => {
  return (
    <div>
        <div className='fixed top-0 left-0 right-0 z-50 bg-white '>
                <LoginHeader/>
        </div>
   <StartMockTest/>
  


    <div className='mt-9'>
     <Footer/>
    </div>
    
    </div>
  )
}

export default StartMockTestPage