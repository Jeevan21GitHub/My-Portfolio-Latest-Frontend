import React from "react";
import ProfilePic from "../assets/ProfilePic.png";
const About = () => {
  return (
    <section>
     <div className="flex items-center justify-between mx-10">
      <div className="">
        <div className="">
          <div className="mt-5">
            <h3 className="text-5xl font-bold">
              Hi,
              <br /> I'm <span className="text-blue-400">Jeevanandham S</span>
            </h3>
            <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold px-1 bg-blue-300">
              Software Developer
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="font-semibold text-3xl mb-3">Education</h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="font-semibold text-gray-700">BE - Computer Science and Engineering</span>
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <p className="text-gray-500 font-semibold">9 CGpA</p>
              <p className="text-gray-500 font-semibold">2020 - 2024</p>
              <p className="text-gray-500 font-semibold">Government College Of Engineering, Salem, TN.</p>
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <span className="font-semibold text-gray-700"> Higher Secondary Certificate</span>
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              <p className="text-gray-500 font-semibold">88%</p>
              <p className="text-gray-500 font-semibold">2018 - 2020</p>
              <p className="text-gray-500 font-semibold">Swamy Vivekananda Matriculation Higher Secondary School, Elampillai, Salem, TN.</p>
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <span className="font-semibold text-gray-700">Secondary School Leaving Certificate</span>
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              <p className="text-gray-500 font-semibold">85.4%</p>
              <p className="text-gray-500 font-semibold">2017 - 2018</p>
              <p className="text-gray-500 font-semibold">Government Secondary School, Chinnappillaiyur, Salem, TN.</p>
            </p>
          </li>
        </ol>
      </div>
     </div>
     
    </section>
  );
};

export default About;
