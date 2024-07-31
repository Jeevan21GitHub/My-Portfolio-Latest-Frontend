import React from 'react'
import { SkillCardData } from '../data/SkillCardData'
import SkillBar from '../Components/SkillBar'

const CSSFrameworks = () => {
  return (
    <section>
    <div className='mt-16'>
      <SkillBar title={SkillCardData.cssFrameworks.title} skills={SkillCardData.cssFrameworks.skills}/>            
    </div>
  </section>
  )
}

export default CSSFrameworks