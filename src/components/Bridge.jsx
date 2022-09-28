import React from "react";
import bridgegap from "../img/bridge-bg.png";
import bgblur from "../img/bgblur.png";
import ai from "../img/ai.png";
import ai2 from "../img/ai2.png";
import bigdata from "../img/bigdata.png";
import bigdata2 from "../img/bigdata2.png";

const Bridge = () => {
  return (
    <section className="xl:mt-[3rem] md:h-auto">
      <div className="">
        <div id="parent_div">
          <div id="background"></div>
          <div id="textarea">
            <div className="overflow-hidden relative ">
              <img
                src={bgblur}
                alt=""
                className=" object-contain ml-[-11rem] lg:ml-0 lg:mr-0 mr-[15rem] max-w-[55rem] md:max-w-[70rem] lg:max-w-[80rem] xl:max-w-full overflow-hidden"
              />
            </div>
            <div className=" mx-6 md:mx-16 absolute left-0 right-0 bottom-0 top-0">
              <div className="flex flex-col items-center justify-center text-center md:mx-6 mt-[2rem]">
                <h1 className="capitalize text-3xl xl:text-[3rem]">
                  We help you{" "}
                  <span className="text-[#2AF6FF] mr-2">Bridge</span>
                  the gap through
                </h1>
                <p className="text-[13px] mt-4 xl:mt-[5rem] xl:text-[15px]">
                  We’re bringing together the right data, services, and
                  technology to help you grow towards your business goals.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full gap-2 mt-[3rem] lg:mt-[6rem] xl:mt-[10rem]">
                <div className="">
                  <div className="w-full relative h-auto">
                    <img src={ai2} alt="" className="object-fill " />
                    <div className="text-black  ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-30%]  text-[12px] lg:text-[1rem] xl:text-[1.5rem] pt-2">
                          <h1 className="text-center  font-semibold text-black">
                            AI & ML
                          </h1>
                          <h1 className="text-center   ">ETL/EDW/MDM</h1>
                          <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          <div className="  text-black flex justify-center items-center pt-2">
                            <div>
                              <button className="text-[12px] mt-2 lg:text-[1rem] xl:text-[1.5rem]">
                                View More
                              </button>
                              <div className="w-full   flex gap-1 ">
                                <div className="border border-bright-blue w-[80%]  bg-bright-blue"></div>
                                <div className=" "></div>
                                <div className="border border-bright-blue w-[10%]  bg-bright-blue"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="w-full h-auto  relative ">
                    <img
                      src={bigdata2}
                      alt=""
                      className="object-fill bg-center"
                    />
                    <div className="text-black  ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-30%]  text-[12px] lg:text-[1rem] xl:text-[1.5rem] pt-2">
                          <h1 className="text-center font-semibold">
                            Big Data
                          </h1>
                          <h1 className="text-center ">ETL/EDW/MDM</h1>
                          <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          <div className="  text-black flex justify-center items-center pt-2">
                            <div>
                              <button className="text-[12px] mt-2 lg:text-[1rem] xl:text-[1.5rem]">
                                View More
                              </button>
                              <div className="w-full   flex gap-1 ">
                                <div className="border border-bright-blue w-[80%]  bg-bright-blue"></div>
                                <div className=" "></div>
                                <div className="border border-bright-blue w-[10%]  bg-bright-blue"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="w-full relative">
                    <img src={ai2} alt="" className="object-fill " />
                    <div className="text-black  ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-30%] text-[12px] lg:text-[1rem] xl:text-[1.5rem] pt-2">
                          <h1 className="text-center  font-semibold text-black">
                            AI & ML
                          </h1>
                          <h1 className="text-center   ">ETL/EDW/MDM</h1>
                          <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          <div className="  text-black flex justify-center items-center pt-2">
                            <div>
                              <button className="text-[12px] mt-2 lg:text-[1rem] xl:text-[1.5rem]">
                                View More
                              </button>
                              <div className="w-full   flex gap-1 ">
                                <div className="border border-bright-blue w-[80%]  bg-bright-blue"></div>
                                <div className=" "></div>
                                <div className="border border-bright-blue w-[10%]  bg-bright-blue"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="w-full h-auto  relative ">
                    <img
                      src={bigdata2}
                      alt=""
                      className="object-fill bg-center"
                    />
                    <div className="text-black  ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-30%] text-[12px] lg:text-[1rem] xl:text-[1.5rem] pt-2">
                          <h1 className="text-center font-semibold">
                            Big Data
                          </h1>
                          <h1 className="text-center ">ETL/EDW/MDM</h1>
                          <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          <div className="  text-black flex justify-center items-center pt-2">
                            <div>
                              <button className="text-[12px] lg:text-[1rem] xl:text-[1.5rem] mt-2">
                                View More
                              </button>
                              <div className="w-full   flex gap-1 ">
                                <div className="border border-bright-blue w-[80%] bg-bright-blue"></div>
                                <div className=" "></div>
                                <div className="border border-bright-blue w-[10%]  bg-bright-blue"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
