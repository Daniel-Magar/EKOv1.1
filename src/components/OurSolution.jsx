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
import DottedLineSm2 from "../img/DottedLineSm2.png";

const OurSolution = () => {
  return (
    <section className="py-[2rem] lg:py-10 ">
      <div className="bg-main-black">
        <div className=" py-8 flex justify-center items-start text-left lg:gap-1 xl:gap-2">
          <div className=" flex-1  text-white relative ">
            <div className="inline-block    ml-[-7rem] md:ml-0 lg:ml-0 xl:ml-0 overflow-hidden">
              <img
                src={world2}
                alt="globe"
                className="object-cover min-w-[5rem] max-w-[26rem]  md:max-w-lg lg:max-w-3xl xl:max-w-3xl overflow-hidden"
              />
            </div>
          </div>

          <div className=" mt-[-4rem]  left-[3rem] md:mt-[-2rem] md:left-[16rem]  h-[100%] w-[75%] md:w-[44%] lg:w-45% xl:w-[45%]  md:min-h-fit lg:min-h-fit  lg:ml-[5rem] xl:ml-[4rem] text-white absolute z-1 right-0 ">
            <div className="top-[2rem] md:top-[1rem] lg:top-[3rem] flex flex-col justify-start items-start relative">
              {/* 1 */}
              {/* <div className=" flex justify-center items-center  ml-[0.5rem] top-[0.9rem] absolute bottom-0 right-0 left-0"> */}
              <div className="h-[7rem]   flex items-center  absolute top-0 bottom-0 right-0 left-0 ml-[0rem] md:ml-[-5rem] lg:ml-[-3rem]">
                <div className="">
                  <img
                    src={DottedLineSm}
                    alt=""
                    className="w-[7rem] md:w-[10rem] lg:w-[15rem]"
                  />
                </div>
                <div className="">
                  <img
                    src={retail}
                    alt=""
                    className="object-cover  w-[5rem] max-w-[5rem] md:w-[6rem] md:max-w-[8rem] lg:w-[12rem]"
                    // className="max-w-full h-auto"
                  />
                </div>
              </div>
              {/*  */}
              {/* 2 */}
              {/* <div className="w-full  flex justify-center items-center ml-[2rem] xl:ml-[2rem] absolute top-[4.4rem] left-[4rem] lg:top-[10rem] "> */}
              <div className="h-[7rem]    flex  items-center  absolute top-0 bottom-0 right-0 left-0 mt-[4rem] md:mt-[5rem] lg:mt-[10rem] ml-[6rem] md:ml-[2rem] lg:ml-[6rem]">
                <div className="">
                  <img
                    src={DottedLineSm}
                    alt=""
                    className="w-[7rem] md:w-[10rem] lg:w-[15rem]"
                  />
                  {/* <span class="dotted-gradient">
                    dotted
                    <br />
                    with gradient
                  </span> */}
                </div>
                <div></div>
                <img
                  src={manufacture}
                  alt=""
                  className="object-cover w-[5rem] max-w-[5rem] md:w-[6rem] md:max-w-[8rem] lg:w-[12rem]"
                  // className="max-w-full h-auto"
                />
              </div>
              {/*  */}
              {/* 3 */}
              {/* <div className="w-full  flex justify-center items-center ml-[4rem] xl:ml-[2rem] absolute top-[11.5rem] left-[1rem] lg:top-[10rem]"> */}
              <div className="h-[7rem]   flex  items-center  absolute top-0 bottom-0 right-0 left-0 mt-[11.5rem] md:mt-[13.5rem] lg:mt-[20.5rem]  ml-[5.5rem] md:ml-[3rem] lg:ml-[7rem]">
                <div className="">
                  <img
                    src={DottedLineSm2}
                    alt=""
                    className="w-[1rem] md:w-[2rem]"
                  />
                </div>
                <div>
                  <img
                    src={healthcare}
                    alt=""
                    className="object-cover   w-[5rem] max-w-[5rem] md:w-[6rem] md:max-w-[8rem] lg:w-[12rem]"
                    // className="max-w-full h-auto"
                  />
                </div>
              </div>
              {/*  */}
              {/* 4 */}
              {/* <div className="w-full  flex justify-center items-center ml-[2rem] xl:ml-[2rem] absolute top-[18.5rem] left-[4rem] lg:top-[10rem]"> */}
              <div className=" h-[7rem]   flex  items-center  absolute top-0 bottom-0 right-0 left-0 mt-[19rem] md:mt-[22rem] lg:mt-[31rem] ml-[6rem] md:ml-[2rem] lg:ml-[6rem]">
                <div className="">
                  <img
                    src={DottedLineSm}
                    alt=""
                    className="w-[7rem] md:w-[10rem] lg:w-[15rem]"
                  />
                </div>
                <div className="">
                  <img
                    src={military}
                    alt=""
                    className="object-cover  w-[5rem] max-w-[5rem] md:w-[6rem] md:max-w-[8rem] lg:w-[12rem]"
                    // className="max-w-full h-auto"
                  />
                </div>
              </div>
              {/*  */}
              {/* 5 */}

              {/* <div className=" w-full flex justify-center items-center  ml-[0.1rem] xl:ml-[2rem] absolute top-[22.2rem] left-[1rem] lg:top-[10rem] inset-y-0 right-0 "> */}
              <div className=" h-[7rem] flex  items-center  absolute top-0 bottom-0 right-0 left-0 mt-[23rem] md:mt-[27rem] lg:mt-[40rem] ml-[0rem] md:ml-[-5rem] lg:ml-[-3.5rem]">
                <div className="">
                  <img
                    src={DottedLineSm}
                    alt=""
                    className="w-[7rem] md:w-[10rem] lg:w-[15rem]"
                  />
                </div>
                <div className="">
                  <img
                    src={banking}
                    alt=""
                    // className="object-cover w-[7rem] max-w-[4rem]"
                    className="object-cover w-[5rem] max-w-[5rem] md:w-[6rem] md:max-w-[8rem] lg:w-[12rem]"
                  />
                </div>
              </div>

              {/*  */}
            </div>
          </div>
          <div className=" w-full    flex-[0.1] text-white ">
            <div className="  flex justify-between items-center ">
              <div className="vertical flex items-center">
                <h1 className="  uppercase tracking-[1rem] ">powers</h1>
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
