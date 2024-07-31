import React from 'react'
import SkillBar from '../Components/SkillBar'
import { SkillCardData } from '../data/SkillCardData'

const Tools = () => {
  return (
    <section>
    <div className='mt-16'>
      <SkillBar title={SkillCardData.tools.title} skills={SkillCardData.tools.skills}/>            
    </div>
  </section>
  )
}

export default Tools