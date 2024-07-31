import React, { useState } from 'react'
import PhonePic from '../assets/ProjectImages/Phone.png'
import LaptopPic from '../assets/ProjectImages/Laptop.png'
import ChatAppPhone from '../assets/ProjectImages/ChatApplication/ChatAppPhone.png'
import ChatAppLaptop from '../assets/ProjectImages/ChatApplication/ChatAppLaptop.png'
import ChatAppLogo from '../assets/ProjectImages/ChatApplication/ChatAppLogo.png'

const ProjectDesk = () => {
    const [portrait,setPortrait]=useState(true)
  return (
    <>
        <div className='flex'>
            <div className='w-1/3'>
                <div className='flex justify-evenly mb-2'>
                    <img src={PhonePic} alt="" className={`${portrait?"-translate-y-2 scale-105 ":""} cursor-pointer duration-300`} onClick={()=>setPortrait(true)} />
                    <img src={LaptopPic} alt="" className={`${portrait?"":"-translate-y-2 scale-105 "} cursor-pointer duration-300`} onClick={()=>setPortrait(false)} />
                </div>
                <div className={`flex justify-center w-[380px] h-[500px] `}>
                    {
                        portrait?<img src={ChatAppPhone} alt="" />:<img src={ChatAppLaptop} alt="" className='w-80 h-64' />
                    }
                </div>
            </div>
            <div className='w-2/3 ml-10'>
                <div>
                    <h3 className='text-3xl font-bold'>Chat App</h3>
                </div>
                <div className='mt-10 mr-10'>
                    <div className='mb-4'>
                        <h5 className='text-xl font-semibold mb-2'>Application Name</h5>
                        <p className='font-semibold text-gray-700'>Chat App</p>
                    </div>
                    <div className='mb-4'>
                        <h5 className='text-xl font-semibold mb-2'>Description</h5>
                        <p className='font-semibold text-gray-700'>In this chat app, we can easily connect with our closed ones, and also fun together with your groups.</p>
                    </div>
                    <div>
                        <h5 className='text-xl font-semibold mb-2'>Tech Stack and Tools</h5>
                        <div className='flex flex-wrap'>
                            <img src={PhonePic} alt="" />
                            <img src={PhonePic} alt="" />
                            <img src={PhonePic} alt="" />
                            <img src={PhonePic} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectDesk