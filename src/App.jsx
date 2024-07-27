import React from 'react'
import SideBar from './Components/SideBar'
import ProfilePic from './assets/Resume_Profile.jpeg'
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
const App = () => {
  return (
    <section>
      <div className='flex h-dvh'>
        <div className='w-3/12 flex flex-col justify-between items-center'>
          <SideBar/>
        </div>
        <div className='w-full flex '>
          {/* Side line seperator */}
            <div className='h-[600px] border-r-4 border-gray-800 mt-4 mb-5'>
              
            </div>
            <div className='w-full flex justify-center items-center '>
            <Routes>
              <Route path="/" element={<Home/>}  />
              <Route path="/Home" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
            </div>
        </div>
      </div>
    </section>
  )
}

export default App