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
    <section className=" my-[14rem] md:my-[5rem] h-screen  md:pt-0 ">
      <div id="parent_div ">
        <div id="background"></div>
        <div id="textarea">
          <div className=" flex md:flex-col lg:flex-col  justify-center items-center text-white mx-6 md:mx-0  gap-5 md:gap-1">
            <div className=" flex flex-col md:flex-row lg:flex-row gap-3 md:gap-2 md:mx-[4.5rem] lg:mx-[5rem] 2xl:mx-[2rem] lg:gap-8 flex-[0.7] md:flex-0 ">
              <div>
                <img
                  src={dataeng}
                  alt=""
                  // className="object-fill"
                  className="object-fill   md:max-w-[8rem] lg:max-w-[10rem] xl:max-w-[13rem] 2xl:max-w-[22rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={artificial}
                  alt=""
                  className="object-fill  md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[13rem] 2xl:max-w-[22rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={ml}
                  alt=""
                  className="object-fill    md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[13rem]  2xl:max-w-[22rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={webdev}
                  alt=""
                  className="object-fill    md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[13rem] 2xl:max-w-[22rem] 3xl:max-w-[30rem]"
                />
              </div>
              <div>
                <img
                  src={bi}
                  alt=""
                  className="object-fill    md:max-w-[8rem]  lg:max-w-[10rem] xl:max-w-[13rem] 2xl:max-w-[22rem] 3xl:max-w-[30rem]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start item-start  md:rotate-90  lg:rotate-90   flex-[0.77] md:flex-0  lg:flex-1 md:mx-[20.8rem] lg:mx-[30rem] xl:mx-[32.10rem] 2xl:mx-[49.10rem] md:absolute md:mt-[17.5rem] lg:absolute xl:mt-[30rem] 2xl:mt-[45rem] lg:mt-[30rem] 3xl:mt-[40rem]">
              <div className="w-full">
                <img
                  src={L}
                  alt=""
                  className=" md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[14rem] xl:max-w-[14rem] 2xl:w-[20rem] 2xl:max-w-[20rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={L}
                  alt=""
                  className=" md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[14rem] xl:max-w-[14rem] 2xl:w-[20rem] 2xl:max-w-[20rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={L}
                  alt=""
                  className=" md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[14rem] xl:max-w-[14rem] 2xl:w-[20rem] 2xl:max-w-[20rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={L}
                  alt=""
                  className=" md:w-[8rem] md:max-w-[8rem] lg:w-[14rem] lg:max-w-[11rem]  xl:w-[14rem] xl:max-w-[14rem] 2xl:w-[20rem] 2xl:max-w-[20rem]"
                />
              </div>
              <div className="w-full ">
                <img
                  src={I}
                  alt=""
                  className=" md:w-[8rem] md:max-w-[8rem] lg:w-[14rem]  lg:max-w-[11rem] xl:w-[14rem] xl:max-w-[14rem] 2xl:w-[20rem] 2xl:max-w-[20rem]"
                />
              </div>
            </div>
            <div className="vertical flex md:hidden lg:hidden">
              <h1 className="capitalize bgblur p-3 ml-[-3.5rem] text-[30px] md:text-[40px] ">
                our Capabilites
              </h1>
            </div>
            <div className="hidden md:flex lg:flex ">
              <h1 className="capitalize bgblur border-0 p-3 ml-[-8rem] md:mt-[5.5rem] lg:mt-[12rem] xl:mt-[12.5rem] 2xl:mt-[18.5rem]  absolute  text-[30px] md:text-[40px] lg:text-[46px] ">
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
