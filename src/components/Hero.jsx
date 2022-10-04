import React, { useState, useEffect } from "react";
import heroblur from "../img/herroblur.png";
import eko1 from "../img/eko1.gif";
import h1 from "../img/h1.png";
import rightUpArrow from "../img/rightUpArrow.png";
import linkLine from "../img/linkLine.png";
import whoArrow1 from "../img/whoArrow1.png";
import { Button1, Button2, Button3 } from "./common/HeroHlink";

// const myStyle = {
//   backgroundImage: `url(${rightUpArrow})`,
//   height: "auto",
//   zIndex: "1",
//   // marginTop: "-70px",
//   fontSize: "50px",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// };

const Hero = () => {
  const [linkText, setLinkText] = useState([
    "We are a firm specialized in ",
    "Machine Learning, AI",
    "and",
    "Big Data Analytics",
    " based solutions.",
  ]);

  const [arr, setArr] = useState([
    [
      "We are a firm specialized in ",
      "Machine Learning, AI",
      "and",
      "Big Data Analytics",
      " based solutions.",
    ],
    [
      "We deliver values ",
      "and ethics",
      "we",
      "understand ",
      " your requirement.",
    ],
    ["Our Capabilites ", "in AI ML ", "and", "Dashboard", "Analytics."],
  ]);

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const changeText = (id) => {
    if (id == 1) {
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
    } else if (id == 2) {
      setBtn2(true);
      setBtn1(false);
      setBtn3(false);
    } else if (id == 3) {
      setBtn3(true);
      setBtn2(false);
      setBtn1(false);
    } else {
      setBtn1(true);
    }
  };

  return (
    <section
      className="bg-black w-full min-h-[45rem]   md:min-h-[28rem] py-5   md:mb-[2rem] lg:mb-0"
      id="home"
    >
      <div className="relative">
        {/* Mobile Screen */}
        <div className="flex flex-col gap-5 lg:hidden md:hidden">
          <div className="mx-[2rem]">
            <div className="flex items-center justify-center text-center md:justify-start md:text-left lg:justify-start lg:text-left">
              <h1 className="uppercase text-white lg:text-[1rem] xl:text-[1rem] tracking-widest">
                eko solutions powers
              </h1>
            </div>
            <div className="flex items-center justify-center md:justify-start lg:justify-start">
              <h1 className="text-bright-blue flex text-center md:text-left lg:text-left items-center justify-center text-[2rem] lg:text-5xl xl:text-6xl font-extrabold tracking-widest">
                your marketing <span className="text-white ">.</span>
              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-1">
              <img
                src={eko1}
                alt="hero"
                className="object-contain w-full"
              />
            </div>
          </div>
          <div>
            <div className="mx-[2rem] mt-[4rem] mx-1rem  min-h-[7rem] max-h-full border border-l-bright-blue border-b-bright-blue border-t-0 border-r-0 relative">
              <div className="  lg:w-[53rem] min-h-[7rem]">
                <div>
                  {btn1 == true ? <Button1 /> : ""}
                  {btn2 == true ? <Button2 /> : ""}
                  {btn3 == true ? <Button3 /> : ""}

                  <div className="flex  min-h-[1.5rem] max-h-[3rem] text-white absolute left-0 bottom-0 right-0 top-[6.5rem]">
                    <div className="  w-[4rem] max-w-[12rem]"></div>
                    <div className="  w-[5rem] bg-main-black"></div>
                    <div className="  w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* New Menu */}
            <div className=" text-[1rem] lg:text-[1.5rem] xl:text-[2rem] relative">
              <div className="flex justify-start">
                <div className="flex flex-col gap-4 flex-2">
                  <div>
                    <div className=" mt-12">
                      <div>
                        <button
                          onClick={() => changeText(1)}
                          className="text-left ml-[2rem] text-white"
                        >
                          Who are we ?
                        </button>
                        <div
                          className={
                            btn1 == !true
                              ? `list-none font-semibold text-left transition-all ease-linear duration-[0.5s] text-white border border-b-bright-blue border-l-0 border-r-0 border-t-0 w-[6rem]`
                              : `list-none text-left text-fade-gray ml-[-2rem]`
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => changeText(2)}
                      className="text-left ml-[2rem] text-white"
                    >
                      What we do ?
                    </button>
                    <div
                      className={
                        btn2 == false
                          ? `list-none font-semibold text-left transition-all ease-linear duration-[0.5s] text-white border border-b-bright-blue border-l-0 border-r-0 border-t-0 w-[6rem]`
                          : `list-none text-left text-fade-gray ml-[-2rem]`
                      }
                    ></div>
                  </div>
                  <div>
                    <div>
                      <button
                        onClick={() => changeText(3)}
                        className="text-left ml-[2rem] text-white"
                      >
                        What have delivered
                      </button>
                      <div
                        className={
                          btn3 == false
                            ? `list-none font-semibold text-left transition-all ease-linear duration-[0.5s] text-white border border-b-bright-blue border-l-0 border-r-0 border-t-0 w-[6rem]`
                            : `list-none text-left text-fade-gray ml-[-2rem]`
                        }
                      ></div>
                    </div>
                  </div>
                </div>
                <div className=" ml-5 flex-1 ">
                  <div className="flex">
                    {btn1 == true ? (
                      <div className="ml-[-2.5rem] md:ml-0">
                        <div className="flex justify-end items-end transition-all ease-in-out duration-[0.5s]">
                          {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[37rem] "></div> */}
                          <div className="w-1 h-1 rounded bg-bright-blue p-[3px] mb-[-3px] "></div>
                          <div className="flex transition-all ease-linear  duration-[0.5s]  border min-w-full border-l-0 border-t-0 px-5 border-b-bright-blue border-r-bright-blue min-h-[3.8rem] relative left-0 right-0 bottom-0"></div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {btn2 == true ? (
                      <div className="ml-[-2.5rem] md:ml-0">
                        <div className="flex justify-end items-end">
                          {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[39.2rem]"></div> */}
                          <div className="w-1 h-1 rounded bg-bright-blue p-[3px] mb-[-3px] "></div>
                          <div className="flex transition-all ease-linear duration-[0.5s]  border min-w-full border-l-0 border-t-0 px-5 border-b-bright-blue border-r-bright-blue min-h-[6rem] relative"></div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {btn3 == true ? (
                      <div className="ml-[-2.5rem] md:ml-0">
                        <div className="flex justify-end items-end transition-all ease-linear duration-[0.5s]  ">
                          {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[42.2rem]"></div> */}
                          <div className="w-1 h-1 rounded bg-bright-blue p-[3px] mb-[-3px] "></div>
                          <div className="flex border min-w-full border-l-0 border-t-0 px-5 border-b-bright-blue border-r-bright-blue min-h-[9rem] relative"></div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex justify-end items-end  flex-1 mx-[2rem]">
                  <button>
                    <img src={rightUpArrow} alt="arrow" className="w-[2rem]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Large screen */}
        {/* <div className="  hidden lg:gap-5 xl:gap-8 md:flex md:justify-between md:mx-[3rem] lg:flex lg:justify-between mx-[3rem] lg:mx-[3rem] xl:mx-[6rem]"> */}
        <div className="  hidden lg:gap-5 xl:gap-8 md:flex md:justify-between  lg:flex lg:justify-between">
          <div className="flex flex-col gap-5   flex-1">
            <div className="lg:py-[1rem] xl:py-[0rem] 2xl:py-[4rem]">
              <div className=" mx-[3rem] md:mx-[3rem] lg:mx-[3rem] xl:mx-[6rem]">
                <div className="flex items-center justify-center text-center md:justify-start md:text-left lg:justify-start lg:text-left">
                  <h1 className="uppercase text-white lg:text-[1rem] xl:text-[2rem]">
                    eko solutions powers
                  </h1>
                </div>
                <div className="flex items-end  justify-center md:justify-start lg:justify-start gap-3">
                  <h1 className=" text-bright-blue 2xl:tracking-[0.1em] flex text-center md:text-left lg:text-left items-center justify-center text-[2rem] lg:text-[3rem] xl:text-[4.2rem] 2xl:text-[6rem] font-bold">
                    your marketing
                  </h1>
                  <div className="">
                    <p className="w-2 h-2 bg-white rounded md:mt-[-1rem] lg:mt-[-1.5rem] xl:mt-[-2rem] 2xl:mt-[-3rem]"></p>
                  </div>
                </div>
              </div>

              <div className="mx-[3rem] md:mx-[3rem] lg:mx-[3rem] xl:mx-[6rem] h-auto md:mt-[7rem] lg:mt-[2.5rem] xl:mt-[4rem] mx-1rem  min-h-[5rem] lg:min-h-[5rem] max-h-full border border-l-bright-blue border-b-0 border-t-0 border-r-0 ">
                <div className="  md:min-w-[100%] lg:min-w-[100%] xl:min-w-[100%] min-h-[5rem] lg:min-h-[5rem] ">
                  <div className="transition-all duration-[.5s] ease-in-out mytrans">
                    {btn1 == true ? <Button1 /> : ""}
                    {btn2 == true ? <Button2 /> : ""}
                    {btn3 == true ? <Button3 /> : ""}

                    <div className="flex  border-l-0 border-t-0 border-r-0 text-white  left-0 bottom-0 right-0">
                      <div className="w-[4rem] max-w-[12rem] border border-b-bright-blue border-l-0 border-t-0 border-r-0 "></div>
                      <div className="w-[5rem]"></div>
                      <div className="w-full border border-b-bright-blue border-l-0 border-t-0 border-r-0 "></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-white text-[1rem] lg:text-[1rem] xl:text-[1.5rem] ">
                <div className="flex justify-start items-start">
                  <div className="flex flex-col gap-4 xl:min-w-[18rem]">
                    <div>
                      <div className=" mt-12">
                        <div className="">
                          <button
                            onClick={() => changeText(1)}
                            className="text-left md:ml-[3rem] lg:ml-[3rem] xl:ml-[6rem] text-white"
                          >
                            Who are we ?
                          </button>
                          <div
                            className={
                              btn1 == !true
                                ? `transition-all ease-linear duration-[0.5s] font-semibold text-left text-white border border-b-bright-blue border-l-0 border-r-0 border-t-0 w-[12rem]`
                                : `list-none text-left text-fade-gray ml-[-2rem]`
                            }
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <button
                          onClick={() => changeText(2)}
                          className="text-left md:ml-[3rem]  lg:ml-[3rem] xl:ml-[6rem] text-white"
                        >
                          What we do ?
                        </button>

                        <div
                          className={
                            btn2 == !true
                              ? `transition-all ease-linear duration-[0.5s]  font-semibold text-left text-white border border-b-bright-blue border-l-0 border-r-0 border-t-0 w-[12rem]`
                              : `list-none text-left text-fade-gray ml-[-2rem]`
                          }
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <button
                          onClick={() => changeText(3)}
                          className="text-left md:ml-[3rem] lg:ml-[3rem] xl:ml-[6rem] text-white"
                        >
                          We have delivered
                        </button>
                        <div
                          className={
                            btn3 == !true
                              ? `transition-all ease-linear duration-[0.9s]  font-semibold text-left text-white border border-b-bright-blue border-l-0 border-r-0 border-t-0 w-[12rem]`
                              : `list-none text-left text-fade-gray ml-[-2rem]`
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className=" ml-5 lg:ml-5 xl:ml-3  ">
                    <div
                      className={
                        btn1 == true || btn2 == true
                          ? "flex w-full lg:ml-[-2px] transition-all ease-linear duration-[0.5s] "
                          : ""
                      }
                    >
                      {btn1 == true ? (
                        <div className="lg:ml-[-3rem]  transition-all ease-out duration-[0.5s]">
                          {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[37rem] "></div> */}
                          <div className="flex justify-end items-end   transition-all ease-out duration-[0.5s] text-fade-gray ml-[-1rem]">
                            {/* <div className="w-2 h-2 rounded bg-bright-blue p-1 mt-6 absolute left-[15rem] right-0"></div> */}
                            <div className="w-2 h-2 rounded bg-bright-blue p-1 mb-[-4px] "></div>
                            <div className=" flex border min-w-full border-l-0 border-t-0 px-5 md:px-[4rem] lg:px-[2rem] xl:px-[6rem] border-b-bright-blue border-r-bright-blue md:min-h-[3.8rem] lg:min-h-[3.8rem] xl:min-h-[4rem] relative left-0 right-0 bottom-0"></div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {btn2 == true ? (
                        <div className="lg:ml-[-3rem] transition-all ease-out duration-[0.5s] text-fade-gray ml-[-1rem]">
                          <div className="flex justify-end items-end">
                            {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[39.2rem]"></div> */}
                            <div className="w-2 h-2 rounded bg-bright-blue p-1 mb-[-4px] "></div>
                            <div className="transition-all ease-out duration-[0.5s] flex border min-w-full border-l-0 border-t-0 px-5 md:px-[4rem] lg:px-[2rem] xl:px-[6rem] border-b-bright-blue border-r-bright-blue md:min-h-[6.5rem] lg:min-h-[6.2rem] xl:min-h-[7.5rem] relative"></div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {btn3 == true ? (
                        <div className="transition-all ease-out duration-[0.5s] text-fade-gray ml-[-1rem]">
                          <div className="flex justify-end items-end">
                            {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[42.2rem]"></div> */}
                            <div className="w-2 h-2 rounded bg-bright-blue p-1 mb-[-4px] "></div>
                            <div className="transition-all ease-out duration-[0.5s]  flex border min-w-full border-l-0 border-t-0 px-5 md:px-[4rem] lg:px-[2rem] xl:px-[6rem] border-b-bright-blue border-r-bright-blue md:min-h-[8.8rem] lg:min-h-[8.7rem] xl:min-h-[11rem] relative"></div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center gap-10 flex-[0.9] ">
            {/* <div className="w-full aspect-w-16 aspect-h-9"> */}

            <div className=" w-full flex justify-start items-center mt-[3rem] py-3 xl:mt-[-1rem]">
              <div className="overflow-hidden">
                <img
                  src={eko1}
                  alt="hero"
                  className=" object-contain w-full aspect-video "
                />
              </div>
            </div>
            <div className="flex md:gap-[4rem] lg:gap-[8rem] justify-end items-center text-center text-white mt-[2rem] ml-[3.5rem]  w-[90%] lg:mt-[-2rem]   mx-[8rem]">
              <div className="flex flex-col cursor-pointer ">
                {/* <a className="hovera"> */}
                <div className="group">
                  <div className="uppercase text-4xl 2xl:text-4xl tracking-wider ">
                    Get <b> Started </b>
                  </div>
                  <div className="w-full cursor-pointer  flex gap-3 group-hover:bg-gradient-to-r from-[#0085FE] to-[#29E5FF] hover:transition-all ease-linear duration-[1s]">
                    <div className="py-[2px] bg-bright-blue border-bright-blue w-[80%] group-hover:w-0"></div>
                    <div className="py-[2px] w-30% group-hover:w-0"></div>
                    <div className="py-[2px] bg-bright-blue border-bright-blue w-[10%] group-hover:w-0"></div>
                  </div>
                </div>

                {/* </a> */}
              </div>

              <div className=" flex flex-col  justify-end items-end  ">
                <div className="">
                  <img
                    src={rightUpArrow}
                    alt=""
                    className="md:w-[2.5rem] lg:w-[3rem] xl:w-[2.3rem] 2xl:w-[3rem]"
                  />
                </div>
                <div className="py-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
