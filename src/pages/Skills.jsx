import React from "react";
import SkillCard from "../Components/SkillCard";
import { SkillCardData } from '../data/SkillCardData'
const Skills = () => {
  return (
    <section>
      <div className="flex justify-start flex-wrap mt-10 ml-10">
        <SkillCard skillTitle={SkillCardData.programmingLanguages.title} skillName={SkillCardData.programmingLanguages.skills}/>
        <SkillCard skillTitle={SkillCardData.frontend.title} skillName={SkillCardData.frontend.skills} />     
        <SkillCard skillTitle={SkillCardData.backend.title} skillName={SkillCardData.backend.skills} />     
        <SkillCard skillTitle={SkillCardData.cssFrameworks.title} skillName={SkillCardData.cssFrameworks.skills} />     
        <SkillCard skillTitle={SkillCardData.database.title} skillName={SkillCardData.database.skills} />     
        <SkillCard skillTitle={SkillCardData.tools.title} skillName={SkillCardData.tools.skills} />     
      </div>
    </section>
  );
};

export default Skills;
