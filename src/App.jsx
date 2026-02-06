import React from 'react'
import Header from './Componets/Header'
import { Routes,Route } from 'react-router-dom'
import Hero from './Componets/Hero'
import Programs from './Componets/Programs'
import PopularCourses from './Componets/PopularCourses'
import PopularCoursesPage from './Pages/PopularCoursesPage'
import Trust from './Pages/Trust'
import SectionPage from './Pages/SectionPage'
import Review from "./Componets/Review"
import ReviewPage from './Pages/ReviewPage'
import Promotion from './Pages/Promotion'
import Footer from './Pages/Footer'
import LearningProg from './Pages/LearningProg'
import FullPage from './Pages/FullPage'
import LoginHeader from './Componets/LoginHeader'
import Test from "./Componets/Test"
import Mock from "./Componets/Mock"
import TestPractice from './Pages/TestPractice'
import Practice from "./Componets/Practice"
import Paper from "./Componets/Paper"

const App = () => {
  return (
    
    <Routes>
      <Route path="/Header" element={<Header/>}/>
      <Route path="/Hero" element={<Hero/>}/>
      <Route path="/Programs" element={<Programs/>}/>
      <Route path="/PopularCoursesPage" element={<PopularCoursesPage/>}/>
       <Route path="/Trust" element={<Trust/>}/>
       <Route path="/SectionPage" element={<SectionPage/>}/> 
       <Route path="/Review" element={<Review/>}/> 
       <Route path="/ReviewPage" element={<ReviewPage/>}/> 
       <Route path="/Promotion" element={<Promotion/>}/> 
       <Route path="/Footer" element={<Footer/>}/> 
       <Route path="/LearningProg" element={<LearningProg/>}/>
       <Route path="/" element={<FullPage/>}/>
        <Route path="/LoginHeader" element={<LoginHeader/>}/>
        <Route path="/Test" element={<Test/>}/>
         <Route path="/Mock" element={<Mock/>}/>
         <Route path='/TestPractice' element={<TestPractice/>}/>
          <Route path='/Practice' element={<Practice/>}/>
          <Route path='/Paper' element={<Paper/>}/>
       {/* <Route path="/PopularCourses" element={<PopularCourses/>}/> */}
    </Routes>
  )
}

export default App