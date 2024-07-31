import React from 'react'

const ProjectCard = ({name,logoImg}) => {
  return (
    <>
    <div className="border-4 rounded-lg border-gray-700 w-56 h-52 flex flex-col items-center justify-evenly shadow-md m-5 hover:bg-blue-100 cursor-pointer hover:scale-105 duration-300">
      <div className="">
        <img src={logoImg} alt="" width={150} />
      </div>
      <div>
        <h3 className="font-semibold px-3 py-2">{name}</h3>
      </div>
    </div>
  </>
  )
}

export default ProjectCard