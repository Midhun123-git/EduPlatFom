import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import Sub from '../src/assets/Sub.png'
import { HiOutlineBookOpen } from "react-icons/hi2";
import './index.css'
import App from './App.jsx'
import Review from "./Componets/Review.jsx"
import VikashMehta from "./assets/VikashMehta.png"
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
      
 {/* <Review/> */}
 {/* <Review
  description="The banking exam preparation course is well-structured with focus on reasoning and quantitative aptitude."
  image={VikashMehta}
  reviewerName="Vikash Mehta"
  reviewerTitle="Banking PO - SBI"
  category="Banking"
  rating={5}
/> */}




   </BrowserRouter>
   </React.StrictMode>,
    
   
)
