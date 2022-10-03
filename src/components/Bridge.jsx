import React from "react";
import bridgegap from "../img/bridge-bg.png";
import bgblur from "../img/bgblur.png";
import ai from "../img/ai.png";
import ai2 from "../img/ai2.png";
import bigdata from "../img/bigdata.png";
import bigdata2 from "../img/bigdata2.png";

const Bridge = () => {
  return (
    <section className="xl:mt-[3rem]   md:h-[90%] " id="expertise">
      <div className="">
        <div id="parent_div" className=" max-h-[50rem]">
          <div id="background"></div>
          <div id="textarea mt-[4rem] ">
            <div className="overflow-hidden relative pb-[9rem] md:pb-[6rem] lg:pb-[1rem]">
              <img
                src={bgblur}
                alt=""
                className=" object-contain ml-[-11rem] lg:ml-0 lg:mr-0 mr-[15rem] max-w-[55rem] md:max-w-[70rem] lg:max-w-[66rem] xl:max-w-full 2xl:max-w-full overflow-hidden"
              />
            </div>
            <div className=" mx-6 md:mx-16 absolute left-0 right-0 bottom-0 top-0 text-white">
              <div className="flex flex-col items-center justify-center text-center md:mx-6 mt-[2rem] lg:mt-1 2xl:mt-[4rem]">
                <h1 className=" text-3xl xl:text-[3rem] lg:tracking-[0.5rem]">
                  We help you
                  <span className="text-[#2AF6FF] mx-2 lg:mx-4 font-semibold">
                    Bridge
                  </span>
                  the gap through
                </h1>
                <p className="text-[13px] mt-4 xl:mt-[5rem] lg:text-[1.1rem] xl:text-[1.3rem] xl:w-[45%] ">
                  We’re bringing together the right data, services, and
                  technology to help you grow towards your business goals.
                </p>
              </div>
              <div className=" py-6 min-h-fit grid grid-cols-2 place-items-center justify-center items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full gap-2 mt-[3rem] lg:mt-[6rem] xl:mt-[8rem]">
                <div className="">
                  <div className="w-auto relative h-auto">
                    <img
                      src={ai2}
                      alt=""
                      className="object-fill  w-[11rem] md:w-[10rem] lg:w-[13rem] xl:w-[15rem] 2xl:w-[20rem]"
                    />
                    <div className="text-black  ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-[2.8rem] md:left-[30%] lg:left-[31%] xl:left-[32%] 2xl:left-[36%]  pt-2">
                          <h1 className="text-center  font-semibold text-black  text-[12px] lg:text-[1rem] xl:text-[1.5rem] ">
                            AI & ML
                          </h1>
                          <div className="text-[12px] md:text-md">
                            <h1 className="text-center   ">ETL/EDW/MDM</h1>
                            <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          </div>
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
                      className="object-fill bg-center w-[11rem] max-w-full md:w-[10rem] lg:w-[13rem] xl:w-[15rem] 2xl:w-[20rem]"
                    />
                    <div className="text-black  ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-[2.8rem] md:left-[30%] lg:left-[31%] xl:left-[32%] 2xl:left-[36%]   pt-2">
                          <h1 className="text-center font-semibold text-[12px] lg:text-[1rem] xl:text-[1.5rem]">
                            Big Data
                          </h1>
                          <div className="text-[12px]  md:text-md">
                            <h1 className="text-center ">ETL/EDW/MDM</h1>
                            <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          </div>

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
                    <img
                      src={ai2}
                      alt=""
                      className="object-fill w-[11rem] max-w-full md:w-[10rem] lg:w-[13rem] xl:w-[15rem] 2xl:w-[20rem]"
                    />
                    <div className="text-black  ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-[2.8rem] md:left-[30%] lg:left-[31%] xl:left-[32%] 2xl:left-[36%]    pt-2">
                          <h1 className="text-center  font-semibold text-black  text-[12px] lg:text-[1rem] xl:text-[1.5rem]">
                            AI & ML
                          </h1>
                          <div className="text-[12px]  md:text-md">
                            <h1 className="text-center   ">ETL/EDW/MDM</h1>
                            <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          </div>
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
                      className="object-fill bg-center w-[11rem] max-w-full md:w-[10rem] lg:w-[13rem] xl:w-[15rem] 2xl:w-[20rem]"
                    />
                    <div className="text-black ">
                      <div className="flex flex-col justify-center items-center text-center">
                        <div className="absolute top-[50%] left-[2.8rem] md:left-[30%] lg:left-[31%] xl:left-[32%] 2xl:left-[36%]    pt-2">
                          <h1 className="text-center font-semibold text-[12px] lg:text-[1rem] xl:text-[1.5rem] ">
                            Big Data
                          </h1>
                          <div className="text-[12px] md:text-md">
                            <h1 className="text-center ">ETL/EDW/MDM</h1>
                            <h1 className="text-center ">AI/ML/BI/Reporting</h1>
                          </div>
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
