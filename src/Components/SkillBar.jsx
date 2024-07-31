import React from "react";

const SkillBar = ({title,skills}) => {
  return (
    <section>
      <div>
        <h3 className="text-3xl font-bold fixed z-10 overflow-hidden">
          {title}
        </h3>
      </div>
      <div className="pt-16">
        {skills.map((item, index) => (
          <div className="border-2 border-gray-800 rounded-md w-[800px] p-1 shadow-md mb-4 hover:scale-105 duration-300 hover:bg-blue-100">
            <div>
              <div className="flex justify-between">
                <div className="flex items-center mb-1">
                  <img
                    src={item.img}
                    alt=""
                  />
                  <p className="ml-1 text-xl font-semibold">{item.name}</p>
                </div>
                <div>
                  <p className="text-xl font-semibold">{item.percentage}%</p>
                </div>
              </div>
              <div>
                <input type="range" min="1" max="100" value={item.percentage} className="w-full"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillBar;
