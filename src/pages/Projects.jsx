import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { ProjectData } from '../data/ProjectData'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <section>
       <div className="flex justify-start flex-wrap mt-10 ml-10">
          <Link to="/Projects/ChatApp"><ProjectCard name={ProjectData.chatApp.name} logoImg={ProjectData.chatApp.logoImg} /></Link>
          <ProjectCard/>
        
       </div>
    </section>
  )
}

export default Project