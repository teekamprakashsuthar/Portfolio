import React from "react";
import imghome from "../../src/assets/IMG_5056.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { ReactTyped } from "react-typed";


function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-6xl conatiner mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mt-24 mt-12 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-600 font-bold">Developer</span> */}
              <ReactTyped
              className="text-red-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Engineering Graduate seeking a challenging position, where I Can
              Learn new skills, expand my knowledge. Also get an opportunity
              where I can make the best of my potential and contribute to the
              organization's growth and nurture mypersonality as well.
            </p>
            <br />

            {/*social media icons*/}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                  <a href="https://www.instagram.com/">
                    <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  
                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <IoLogoYoutube className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <BsTelegram className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on </h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaReact className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <TbBrandReactNative className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <IoLogoYoutube className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <BsTelegram className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 ml-12 mt-8 md:mt-20 order-1"> 
          <img src={imghome} className="rounded-full  md:w-96 " alt="" /></div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;