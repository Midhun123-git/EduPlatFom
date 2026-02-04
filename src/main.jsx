import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import Sub from '../src/assets/Sub.png'
import { HiOutlineBookOpen } from "react-icons/hi2";
import './index.css'
import App from './App.jsx'
import Sections from "./Componets/Sections.jsx"
import { IoVideocamOutline } from "react-icons/io5";
import Programs from "./Componets/Programs.jsx"
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
        <App />
        {/* <Programs
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
         />  */}
      


   </BrowserRouter>
   </React.StrictMode>,
    
   
)
