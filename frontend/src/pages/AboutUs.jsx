import React from "react";
import Logo from "../../src/assets/logo.jpg";
import vivek from "../../src/assets/Images/vivek.jpeg"
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const AboutUs = () => {
  return (
    <div className="w-[11/12] flex flex-col justify-center items-center">
      <div className="w-full flex md:flex-row flex-col items-center  min-h-[600px] py-3 px-10 gap-4">
        <div className="md:w-[50%] w-full px-5 flex justify-center">
          <img src={Logo} className="w-[40%] rounded-full" alt="LOGO" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 w-[70%] gap-3 md:m-0 mt-3 mb-3">
          <h1 className="text-white leading-10 md:text-7xl text-4xl font-bold">
            Music Mate
          </h1>
          <div className="bg-richblack-300 h-2 w-[20%] mx-auto my-4 rounded-md"></div>
          <p className="text-pure-greys-200 text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            dicta qui quasi aspernatur maiores labore hic tempora, dolorem fugit
            debitis, quam explicabo iure exercitationem amet, similique ab
            officiis rerum eius.
          </p>
        </div>
        <div></div>
      </div>

      <div>
        <div className="pb-5 flex flex-col gap-3 items-center">
          <h1 className="text-white leading-10 text-5xl">Our Team</h1>
          <div className="bg-richblack-300 h-2 w-[20%] mx-auto my-4 rounded-md"></div>
        </div>
        <div className="grid md:grid-cols-3 mx-auto px-3 gap-10 grid-row-3 mb-4">
          <div>
            <div>
              <img
                src={vivek}
                className=" w-[1/3]  rounded-full "
                alt="Vivek"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-1 leading-5 text-sm font-semibold text-pure-greys-300 mt-2">
              <span className="hover:text-white transition-all duration-200">
                Vivek Kumar
              </span>
              <br />
              <span className="hover:text-white transition-all duration-200">
                CSE
              </span>
              <br />
              <div className="flex space-x-3">
                <FiGithub className="w-[20px] h-[20px] hover:text-white transition-all duration-200 cursor-pointer" />
                <CiLinkedin className="w-[25px] h-[25px] hover:text-white transition-all duration-200 cursor-pointer" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={vivek} className=" w-[1/3]  rounded-full " alt="" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-1 leading-5 text-sm font-semibold text-pure-greys-300 mt-2">
              <span className="hover:text-white transition-all duration-200">
                Vivek Kumar
              </span>
              <br />
              <span className="hover:text-white transition-all duration-200">
                CSE
              </span>
              <br />
              <div className="flex space-x-3">
                <FiGithub className="w-[20px] h-[20px] hover:text-white transition-all duration-200 cursor-pointer" />
                <CiLinkedin className="w-[25px] h-[25px] hover:text-white transition-all duration-200 cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={vivek} className=" w-[1/3]  rounded-full " alt="" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-1 leading-5 text-sm font-semibold text-pure-greys-300 mt-2">
              <span className="hover:text-white transition-all duration-200">
                Vivek Kumar
              </span>
              <br />
              <span className="hover:text-white transition-all duration-200">
                CSE
              </span>
              <br />
              <div className="flex space-x-3">
                <FiGithub className="w-[20px] h-[20px] hover:text-white transition-all duration-200 cursor-pointer" />
                <CiLinkedin className="w-[25px] h-[25px] hover:text-white transition-all duration-200 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
