import React from "react";
import { navBarData } from "../data/NavbarData";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import ProfilePic from "../assets/ProfilePic.png";
import "./Home.css"
const Home = () => {
  return (
    <section>
      <div className="flex items-center">
        <div className="mr-10 cursor-pointer hover:scale-105 duration-300">
          <img src={ProfilePic} alt="" width={300} />
        </div>
        <div className="">
          <div>
          <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-gray-900 font-bold ">
              Software Developer
            </p>
            <p className="w-2 h-1 text-black"></p>
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-bold">Hi,<br /> I'm <span className="text-blue-400">Jeevanandham S</span></h3>
            <p className="text-justify w-96">
            I am a dedicated and analytical individual with a passion for programming and Web development. I am actively seeking job opportunities in this field. Known for my diligence and ability to work seamlessly in a team, I am eager to contribute my skills and creativity to help create engaging and innovative platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
