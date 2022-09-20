import React, { useState, useEffect } from "react";
import heroblur from "../img/herroblur.png";
import eko1 from "../img/eko1.gif";
import h1 from "../img/h1.png";
import rightUpArrow from "../img/rightUpArrow.png";
import linkLine from "../img/linkLine.png";
import whoArrow1 from "../img/whoArrow1.png";
import { Button1, Button2, Button3 } from "./common/HeroHlink";

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
  // useEffect(() => {
  //   setLinkText(arr);
  // }, [arr]);
  return (
    <div className="bg-black h-[80vh] w-full">
      <div className="">
        {/* Mobile Screen */}
        <div className="flex flex-col gap-5 lg:hidden md:hidden mx-[2rem] ">
          <div>
            <div className="flex items-center justify-center text-center md:justify-start md:text-left lg:justify-start lg:text-left">
              <h1 className="uppercase text-white lg:text-[1rem] xl:text-[2rem]">
                eko solutions powers
              </h1>
            </div>
            <div className="flex items-center justify-center md:justify-start lg:justify-start">
              <h1 className="text-bright-blue flex text-center md:text-left lg:text-left items-center justify-center text-[2rem] lg:text-[4rem] xl:text-[6rem] font-bold">
                your marketing <span className="text-white ">.</span>
              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-1">
              <img
                src={h1}
                alt="hero"
                className="object-contain w-[100%] lg:w-full"
              />
            </div>
          </div>
          <div>
            <div className=" mt-[4rem] mx-1rem  min-h-[7rem] max-h-full border border-l-bright-blue border-b-bright-blue border-t-0 border-r-0 relative">
              <div className="  lg:w-[53rem] min-h-[7rem]">
                <div>
                  {btn1 == true ? <Button1 /> : ""}
                  {btn2 == true ? <Button2 /> : ""}
                  {btn3 == true ? <Button3 /> : ""}

                  {/* <p className="text-fade-gray text-[1rem] lg:text-[1.5rem] xl:text-[2rem] p-3 ">
                    {linkText[0]}
                    <span className="text-white font-bold">{linkText[1]}</span>
                    &nbsp; {linkText[2]} &nbsp;
                    <span className="text-white font-bold">{linkText[3]}</span>
                    &nbsp; {linkText[4]}
                  </p> */}
                  <div className="flex  min-h-[1.5rem] max-h-[3rem] text-white absolute left-0 bottom-0 right-0 top-[6.5rem]">
                    <div className="  w-[4rem] max-w-[12rem]"></div>
                    <div className="  w-[5rem] bg-main-black"></div>
                    <div className="  w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* New Menu */}
            <div className=" text-white text-[1rem] lg:text-[1.5rem] xl:text-[2rem]">
              <div className="flex justify-start items-start">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className=" mt-12">
                      <div className="list-none font-semibold text-left">
                        <button
                          onClick={() => changeText(1)}
                          className="text-left"
                        >
                          Who are we ?
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="list-none ">
                      <button
                        onClick={() => changeText(2)}
                        className="text-left"
                      >
                        What we do ?
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="list-none text-left ">
                      <button
                        onClick={() => changeText(3)}
                        className="text-left"
                      >
                        We have delivered
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" ml-5 ">
                  <div className="flex w-full  ">
                    {btn1 == true ? (
                      <div className="">
                        <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[37rem] "></div>
                        <div className="flex border min-w-full border-l-0 border-t-0 px-5 border-b-bright-blue border-r-bright-blue min-h-[3.8rem] relative left-0 right-0 bottom-0">
                          {/* &nbsp; */}

                          {/* <img
                          src={linkLine}
                          alt=""
                          className="object-fill w-full h-[4rem]  ease-in-out"
                        /> */}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {btn2 == true ? (
                      <div className="">
                        <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[39.2rem]"></div>
                        <div className="flex border min-w-full border-l-0 border-t-0 px-5 border-b-bright-blue border-r-bright-blue min-h-[6rem] relative">
                          {/* <img
                          src={linkLine}
                          alt=""
                          className="object-fill w-full h-[6.5rem]  ease-in-out"
                        /> */}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {btn3 == true ? (
                      <div className="">
                        <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[42.2rem]"></div>
                        <div className="flex border min-w-full border-l-0 border-t-0 px-5 border-b-bright-blue border-r-bright-blue min-h-[9rem] relative">
                          {/* <img
                          src={linkLine}
                          alt=""
                          className="ml-2 object-fill  w-full h-[9rem]  "
                        /> */}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* old */}

            {/* 
            <div className=" text-white text-[0.8rem]">
              <div className="flex items-end justify-between">
                <div className="">
                  <div className="list-none mb-3  font-semibold">
                    <button onClick={() => setLinkText(arr[0])}>
                      Who are we ?
                    </button>
                  </div>
                  <div className="list-none mb-3">
                    <button onClick={() => setLinkText(arr[1])}>
                      What we do ?
                    </button>
                  </div>
                  <div className="list-none ">
                    <button onClick={() => setLinkText(arr[2])}>
                      We have delivered
                    </button>
                  </div>
                </div>
                <div>
                  <div className="">
                    <img src={rightUpArrow} alt="rightuparrow" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Large screen */}
        <div className="hidden lg:gap-5 xl:gap-8 md:flex md:justify-between md:mx-[3rem] lg:flex lg:justify-between mx-[3rem] lg:mx-[3rem] xl:mx-[6rem]">
          <div className="flex flex-col gap-5   flex-1">
            <div className="lg:py-[3rem] xl:py-[6rem]">
              <div className="flex items-center justify-center text-center md:justify-start md:text-left lg:justify-start lg:text-left">
                <h1 className="uppercase text-white lg:text-[1rem] xl:text-[2rem]">
                  eko solutions powers
                </h1>
              </div>
              <div className="flex items-center justify-center md:justify-start lg:justify-start">
                <h1 className="text-bright-blue flex text-center md:text-left lg:text-left items-center justify-center text-[2rem] lg:text-[4rem] xl:text-[6rem] font-bold">
                  your marketing.
                </h1>
              </div>

              <div className="h-auto mt-[4rem] mx-1rem  min-h-[5rem] lg:min-h-[5rem] max-h-full border border-l-bright-blue border-b-0 border-t-0 border-r-0 ">
                <div className="  md:min-w-[100%] lg:min-w-[100%] xl:min-w-[100%] min-h-[5rem] lg:min-h-[5rem] ">
                  <div>
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
                        <div
                          className={
                            btn1 == true
                              ? `list-none font-semibold text-left`
                              : `list-none text-left`
                          }
                        >
                          <button
                            onClick={() => changeText(1)}
                            className="text-left"
                          >
                            Who are we ?
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className={
                          btn2 == true
                            ? `list-none font-semibold text-left`
                            : `list-none text-left`
                        }
                      >
                        <button
                          onClick={() => changeText(2)}
                          className="text-left"
                        >
                          What we do ?
                        </button>
                      </div>
                    </div>
                    <div>
                      <div
                        className={
                          btn3 == true
                            ? `list-none font-semibold text-left`
                            : `list-none text-left`
                        }
                      >
                        <button
                          onClick={() => changeText(3)}
                          className="text-left"
                        >
                          We have delivered
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" ml-5 lg:ml-5 xl:ml-3  ">
                    <div className="flex w-full  ">
                      {btn1 == true ? (
                        <div className="">
                          {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[37rem] "></div> */}
                          <div className="flex border min-w-full border-l-0 border-t-0 px-5 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] border-b-bright-blue border-r-bright-blue md:min-h-[3.8rem] lg:min-h-[3.8rem] xl:min-h-[4rem] relative left-0 right-0 bottom-0">
                            {/* &nbsp; */}

                            {/* <img
                          src={linkLine}
                          alt=""
                          className="object-fill w-full h-[4rem]  ease-in-out"
                        /> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {btn2 == true ? (
                        <div className="">
                          {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[39.2rem]"></div> */}
                          <div className="flex border min-w-full border-l-0 border-t-0 px-5 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] border-b-bright-blue border-r-bright-blue md:min-h-[6.5rem] lg:min-h-[6.2rem] xl:min-h-[7.5rem] relative">
                            {/* <img
                          src={linkLine}
                          alt=""
                          className="object-fill w-full h-[6.5rem]  ease-in-out"
                        /> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {btn3 == true ? (
                        <div className="">
                          {/* <div className="bg-bright-blue w-[5px] p-[4px] rounded-[50%] absolute top-[42.2rem]"></div> */}
                          <div className="flex border min-w-full border-l-0 border-t-0 px-5 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] border-b-bright-blue border-r-bright-blue md:min-h-[8.8rem] lg:min-h-[8.7rem] xl:min-h-[11rem] relative">
                            {/* <img
                          src={linkLine}
                          alt=""
                          className="ml-2 object-fill  w-full h-[9rem]  "
                        /> */}
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
          <div className="flex w-full items-start justify-center flex-1  z-[1]  grow">
            <div className="w-full aspect-w-16 aspect-h-9">
              <img
                src={eko1}
                alt="hero"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
