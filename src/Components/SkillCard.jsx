import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const SkillCard = ({skillTitle,skillName}) => {
  return (
    <>
        <div className='border-4 rounded-lg border-gray-700 w-56 h-52 flex flex-col items-center justify-evenly shadow-md m-5 hover:bg-blue-400 hover:text-white hover:scale-105 duration-300'>
            <div>
                <h3 className='font-semibold px-3 py-2'>{skillTitle}</h3>
            </div>
            <div className='flex'>
              {
                skillName.slice(0,2).map((item,index)=>(
                  <img key={index} src={item} alt=""  width={60} className='border-2 border-black rounded mr-3'/>
                ))
              }
                
            </div>
            <div className='flex justify-center'>
                <MdOutlineKeyboardDoubleArrowRight className='text-xl'/>
                <span className='text-sm border-b border-black'>Click More</span>
            </div>
        </div>
    </>
  )
}

export default SkillCard