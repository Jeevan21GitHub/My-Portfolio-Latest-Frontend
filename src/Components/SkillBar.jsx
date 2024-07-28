import React from "react";
import { SkillCardData } from "../data/SkillCardData";
const SkillBar = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl mb-5 font-bold">
          {SkillCardData.programmingLanguages.title}
        </h3>
      </div>
      <div>
        {SkillCardData.programmingLanguages.skills.map((item, index) => (
          <div className="border-2 border-gray-800 rounded-md w-[800px] p-1 shadow-md mb-3">
            <div>
              <div className="flex justify-between">
                <div className="flex items-center mb-1">
                  <img
                    src={SkillCardData.programmingLanguages.skills[0]}
                    alt=""
                  />
                  <p className="ml-1 text-xl font-semibold">C#</p>
                </div>
                <div>
                  <p>88%</p>
                </div>
              </div>
              <div>
                <p className="w-[688px] h-2 rounded-md bg-blue-400"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillBar;
