import React from "react";
import heroblur from "../img/herroblur.png";

const Hero = () => {
  return (
    <div className="bg-black h-[80vh] w-full ">
      <div className="  lg:flex lg:justify-between lg:mx-[3rem] xl:mx-[6rem] lg:py-[3rem] xl:py-[6rem] ">
        <div className="">
          <div className="flex items-center justify-center text-center lg:justify-start ">
            <h1 className="uppercase text-white lg:text-[1rem] xl:text-[2rem]">
              eko solutions powers
            </h1>
          </div>
          <div className="flex items-center justify-center text-center lg:justify-start ">
            <h1 className="text-bright-blue flex items-center justify-center text-[2rem] lg:text-[4rem] xl:text-[6rem] font-bold">
              your marketing
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center border border-red-500">
          <img src={heroblur} alt="hero" className="lg:w-[60rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
