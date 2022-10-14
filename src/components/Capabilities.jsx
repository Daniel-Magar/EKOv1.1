import React from "react";
import artificial from "../img/ArtificialInt.png";
import dataeng from "../img/dataeng.png";
import ml from "../img/ML.png";
import webdev from "../img/webdev.png";
import bi from "../img/BI.png";
import L from "../img/L.png";
import L11 from "../img/L11.png";
import L2 from "../img/L2.png";
import I from "../img/I.png";

const Capabilities = () => {
  return (
    <section
      className="md:h-screen my-[0rem] lg:my-0 md:mt-[4rem] lg:mt-2 relative"
      id="capabilities"
    >
      <div
        id="parent_div "
        className=" mx-5  md:h-screen lg:h-[85%] xl:h-[100%]   2xl:h-[85%]   md:mx-[2rem] xl:mx-[6rem] lg:mt-[8rem] xl:mt-[4rem] 2xl:mt-[24rem]"
      >
        <div id="background"></div>
        <div id="textarea" className="">
          <div className="mt-[5rem] md:mt-[3rem] lg:mt-[5rem] flex md:flex-col lg:flex-col  justify-center items-center text-white mx-6 md:mx-0  gap-5 md:gap-1">
            <div className=" flex flex-col md:flex-row lg:flex-row gap-3 md:gap-2 md:mx-[4.5rem] lg:mx-[5rem] xl:mx-[5rem] 2xl:mx-[6rem] lg:gap-8 flex-[0.7] md:flex-0 ">
              <div>
                <img
                  src={dataeng}
                  alt=""
                  // className="object-fill"
                  className="object-fill max-w-[6rem] sm:max-w-[10rem]    md:max-w-[8rem] lg:max-w-[10rem] xl:max-w-[10rem] 2xl:max-w-[15rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={artificial}
                  alt=""
                  className="object-fill  max-w-[6rem] sm:max-w-[10rem]   md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[10rem] 2xl:max-w-[15rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={ml}
                  alt=""
                  className="object-fill  max-w-[6rem] sm:max-w-[10rem]     md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[10rem]  2xl:max-w-[15rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={webdev}
                  alt=""
                  className="object-fill   max-w-[6rem] sm:max-w-[10rem]    md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[10rem] 2xl:max-w-[15rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={bi}
                  alt=""
                  className="object-fill   max-w-[6rem] sm:max-w-[10rem]   md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[10rem] 2xl:max-w-[15rem] 3xl:max-w-[30rem]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start item-start  md:rotate-90  lg:rotate-90   flex-[0.77] md:flex-0  lg:flex-1 md:mx-[20.8rem] lg:mx-[30rem] xl:mx-[32.10rem] 2xl:mx-[49.10rem] md:absolute md:mt-[17.5rem] lg:absolute xl:mt-[30rem] 2xl:mt-[45rem] lg:mt-[30rem] 3xl:mt-[40rem]">
              <div className="w-full">
                <img
                  src={L}
                  alt=""
                  className="max-w-[7rem] sm:max-w-[11rem]   md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[11rem] xl:max-w-[14rem] 2xl:w-[16rem] 2xl:max-w-[16rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={L}
                  alt=""
                  className="max-w-[7rem] sm:max-w-[11rem] md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[11rem] xl:max-w-[14rem] 2xl:w-[16rem] 2xl:max-w-[16rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={L}
                  alt=""
                  className="max-w-[7rem] sm:max-w-[11rem] md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[11rem] xl:max-w-[14rem] 2xl:w-[16rem] 2xl:max-w-[16rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={L}
                  alt=""
                  className="max-w-[7rem] sm:max-w-[11rem] md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[11rem] xl:max-w-[14rem] 2xl:w-[16rem] 2xl:max-w-[16rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={I}
                  alt=""
                  className="max-w-[7rem] sm:max-w-[11rem] md:w-[8rem] md:max-w-[8rem] lg:w-[14rem]  lg:max-w-[11rem] xl:w-[11rem] xl:max-w-[14rem] 2xl:w-[16rem] 2xl:max-w-[16rem]"
                />
              </div>
            </div>
            <div className="vertical flex md:hidden lg:hidden">
              <h1 className="capitalize bgblur2 p-3 ml-[-3.5rem] text-[30px] md:text-[30px] lg:text-[40px] ">
                our Capabilites
              </h1>
            </div>
            <div className="hidden md:flex lg:flex absolute">
              <h1 className="capitalize bgblur2 border-0 p-3 ml-[-8rem] md:mt-[5.5rem] lg:mt-[12rem] xl:mt-[12rem] 2xl:mt-[19rem]  absolute  text-[30px] md:text-[30px] lg:text-[38px] xl:text-[42px] font-semibold ">
                our Capabilites
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
