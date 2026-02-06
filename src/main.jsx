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
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
        <App />
        <Mock
        sub="gfchgkl"
        level="High"
        question="180 Questiond"
        duration="3 Hour"
        attempts="1221"
        rate="4.0"
        />
   </BrowserRouter>
   </React.StrictMode>,
    
   
)
