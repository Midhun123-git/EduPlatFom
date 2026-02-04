import React from 'react'
import Header from './Componets/Header'
import { Routes,Route } from 'react-router-dom'
import Hero from './Componets/Hero'
import Programs from './Componets/Programs'
import PopularCourses from './Componets/PopularCourses'
import PopularCoursesPage from './Pages/PopularCoursesPage'
import Trust from './Pages/Trust'
import SectionPage from './Pages/SectionPage'
const App = () => {
  return (
    
    <Routes>
      <Route path="/Header" element={<Header/>}/>
      <Route path="/Hero" element={<Hero/>}/>
      <Route path="/Programs" element={<Programs/>}/>
      <Route path="/PopularCoursesPage" element={<PopularCoursesPage/>}/>
       <Route path="/Trust" element={<Trust/>}/>
       <Route path="/SectionPage" element={<SectionPage/>}/> 
       
       {/* <Route path="/PopularCourses" element={<PopularCourses/>}/> */}
    </Routes>
  )
}

export default App