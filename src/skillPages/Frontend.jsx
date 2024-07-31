import React from 'react'
import { SkillCardData } from "../data/SkillCardData";
import SkillBar from "../Components/SkillBar";
const Frontend = () => {
  return (
    <section>
    <div className='mt-16'>
      <SkillBar title={SkillCardData.frontend.title} skills={SkillCardData.frontend.skills}/>            
    </div>
  </section>
  )
}

export default Frontend