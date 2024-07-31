import React from 'react'
import SideBar from './Components/SideBar'
import ProfilePic from './assets/Resume_Profile.jpeg'
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import ProgrammingLanguages from './skillPages/ProgrammingLanguages'
import Frontend from './skillPages/Frontend'
import Backend from './skillPages/Backend'
import CSSFrameworks from './skillPages/CSSFrameworks'
import Database from './skillPages/Database'
import Tools from './skillPages/Tools'
import Projects from './pages/Projects'
import ChatAppPage from './ProjectPages/ChatAppPage'
const App = () => {
  return (
    <section>
      <div className='flex h-dvh'>
        <div className='w-3/12 flex flex-col justify-between items-center fixed'>
          <SideBar/>
        </div>
        <div className='w-full flex items-center ml-96'>
          {/* Side line seperator */}
            <div className='h-[600px] border-r-4 border-gray-800 mt-5 mb-5 fixed'>
              
            </div>
            <div className='w-full flex justify-center items-center '>
            <Routes>
              <Route path="/" element={<Home/>}  />
              <Route path="/Home" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Skills" element={<Skills/>} />
              <Route path="Skills/ProgrammingLanguages" element={<ProgrammingLanguages/>} />
              <Route path="Skills/Frontend" element={<Frontend/>} />
              <Route path="Skills/Backend" element={<Backend/>} />
              <Route path="Skills/CSSFrameworks" element={<CSSFrameworks/>} />
              <Route path="Skills/Database" element={<Database/>} />
              <Route path="Skills/Tools" element={<Tools/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="Projects/ChatApp" element={<ChatAppPage/>} />
              <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
            </div>
        </div>
      </div>
    </section>
  )
}

export default App