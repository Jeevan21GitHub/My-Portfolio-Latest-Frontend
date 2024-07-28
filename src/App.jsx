import React from 'react'
import SideBar from './Components/SideBar'
import ProfilePic from './assets/Resume_Profile.jpeg'
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
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
              <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
            </div>
        </div>
      </div>
    </section>
  )
}

export default App