import React from 'react'
import { SkillCardData } from "../data/SkillCardData";
import SkillBar from "../Components/SkillBar";
const Backend = () => {
  return (
    <section>
    <div className='mt-16'>
      <SkillBar title={SkillCardData.backend.title} skills={SkillCardData.backend.skills}/>            
    </div>
  </section>
  )
}

export default Backend