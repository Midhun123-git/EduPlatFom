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
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
        <App />
       <Sections
  icon={<IoVideocamOutline size={24} className="text-[#017CBA]" />}
  title="Live Interactive Classes"
  description="Attend live classes with real-time interaction, 
      whiteboard sharing, and instant doubt resolution."
  
/>


   </BrowserRouter>
   </React.StrictMode>,
    
   
)
