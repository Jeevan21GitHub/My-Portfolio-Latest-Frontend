import React from "react";
import { SkillCardData } from "../data/SkillCardData";
import SkillBar from "../Components/SkillBar";
const ProgrammingLanguages = () => {
  return (
    <section>
      <div>
        <SkillBar title={SkillCardData.programmingLanguages.title} skills={SkillCardData.programmingLanguages.skills}/>            
      </div>
    </section>
  );
};

export default ProgrammingLanguages;
