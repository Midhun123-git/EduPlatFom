import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import Sub from '../src/assets/Sub.png'
import { HiOutlineBookOpen } from "react-icons/hi2";
import './index.css'
import Programs from "./Componets/Programs.jsx"
import App from './App.jsx'
import PopularCourses from "./Componets/PopularCourses.jsx";
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
         /> */}
         {/* <PopularCourses
  image={Sub}
  discount="40% OFF"
  popular="Popular"
  level="Advanced"
  rate="4.8"
  review="(12,500)"
  description={
    <>
      Complete Mathematics for <br /> Class 10 CBSE
    </>
  }
  professor="Dr. Rajesh Kumar"
  duration="6 Months"
  lessons="180 Lessons"
  price="₹2,999"
  oldprice="₹8,999"
/> */}

   </BrowserRouter>
   </React.StrictMode>,
    
   
)
