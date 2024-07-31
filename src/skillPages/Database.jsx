import React from 'react'
import { SkillCardData } from '../data/SkillCardData'
import SkillBar from '../Components/SkillBar'

const Database = () => {
  return (
    <section>
    <div className='mt-16'>
      <SkillBar title={SkillCardData.database.title} skills={SkillCardData.database.skills}/>            
    </div>
  </section>
  )
}

export default Database