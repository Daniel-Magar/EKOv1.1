import React from "react";
import world2 from "../img/world2.gif";
import DottedLines from "../img/DottedLines.png";
import DottedLineSm from "../img/DottedLineSm.png";
import retail from "../img/retail.png";
import military from "../img/military.png";
import manufacture from "../img/manufacture.png";
import banking from "../img/banking.png";
import dottedLinexsm from "../img/dottedLinexsm.png";
import healthcare from "../img/healthcare.png";
import vline from "../img/vline.png";

const OurSolution = () => {
  return (
    <section className="py-[2rem] lg:py-10 ">
      <div className="bg-main-black">
        <div className=" flex justify-between items-end text-white">
          <div className="text-white "></div>
          <div className="text-white ">
            <h1 className="font-semibold text-lg uppercase">Our Solutions</h1>
          </div>
        </div>
        <div className="  flex justify-center items-start text-left lg:gap-1 xl:gap-2">
          <div className=" flex-1  text-white relative">
            <div className="inline-block my-[2rem]  z-[-1] ml-[-7rem] lg:ml-0">
              <img
                src={world2}
                alt=""
                className="max-w-sm lg:max-w-2xl xl:max-w-3xl"
              />
            </div>
          </div>

          <div className="  ml-[-8rem] grow-0  min-h-[20rem] min-w-[11rem] w-[6rem] md:w-[25rem] lg:w-[50rem] md:min-h-fit lg:min-h-fit flex-[0.5] lg:ml-[23rem] xl:ml-[23rem] text-white absolute z-1">
            <div className=" flex flex-col justify-start items-start relative">
              {/* 1 */}
              <div className=" flex justify-center items-center  ml-[0.5rem] top-[0.9rem] absolute">
                <div className="">
                  <img src={DottedLineSm} alt="" className="lg:min-w-lg" />
                </div>
                <div className="">
                  <img src={retail} alt="" className="max-w-[4rem]" />
                </div>
              </div>
              {/*  */}
              {/* 2 */}
              <div className="w-full  flex justify-center items-center ml-[2rem] xl:ml-[2rem] absolute top-[4.4rem] left-[4rem] lg:top-[10rem] ">
                <div className="">
                  <img src={DottedLines} alt="" className="lg:min-w-lg" />
                </div>
                <div></div>
                <img src={manufacture} alt="" className="max-w-[4rem]" />
              </div>
              {/*  */}
              {/* 3 */}
              <div className="w-full  flex justify-center items-center ml-[4rem] xl:ml-[2rem] absolute top-[11.5rem] left-[1rem] lg:top-[10rem]">
                <div className="">
                  <img src={dottedLinexsm} alt="" className=" lg:min-w-lg" />
                </div>
                <div>
                  <img src={healthcare} alt="" className="max-w-[4rem]" />
                </div>
              </div>
              {/*  */}
              {/* 4 */}
              <div className="w-full  flex justify-center items-center ml-[2rem] xl:ml-[2rem] absolute top-[18.5rem] left-[4rem] lg:top-[10rem]">
                <div className="">
                  <img src={DottedLines} alt="" className="lg:min-w-lg" />
                </div>
                <div className="">
                  <img src={military} alt="" className="max-w-[4rem]" />
                </div>
              </div>
              {/*  */}
              {/* 5 */}

              <div className=" w-full flex justify-center items-center  ml-[0.1rem] xl:ml-[2rem] absolute top-[22.2rem] left-[1rem] lg:top-[10rem]">
                <div className="">
                  <img src={DottedLineSm} alt="" className="lg:min-w-lg" />
                </div>
                <div className="">
                  <img src={banking} alt="" className="max-w-[4rem]" />
                </div>
              </div>

              {/*  */}
            </div>
          </div>
          <div className=" w-full    flex-[0.1] text-white ">
            <div className="  flex justify-between items-center ">
              <div className="vertical flex items-center">
                <h1 className="  uppercase tracking-[1rem]">powers</h1>
                <div>
                  <img src={vline} alt="" />
                </div>
              </div>
            </div>
            <div>sdfds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
