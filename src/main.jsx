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
import Mock from "./Componets/Mock.jsx"
import ReviewSolution from "./Componets/ReviewSolution.jsx"
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
        {/* <App /> */}
     <ReviewSolution
  question="Question 1"
  questionText="Which organelle is known as the powerhouse of the cell?"
  sub="Physics"
  mark="4 Marks"
  op1="Nucleus"
  op2="Mitochondria"
  op3="Ribosome"
  op4="Golgi Apparatus"
  correctanswer="B"
  useranswer="B"
/>



   </BrowserRouter>
   </React.StrictMode>,
    
   
)
