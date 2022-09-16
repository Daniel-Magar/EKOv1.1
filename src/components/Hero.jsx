import React, { useState, useEffect } from "react";
import heroblur from "../img/herroblur.png";
import eko1 from "../img/eko1.gif";
import h1 from "../img/h1.png";

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
            <div className="mt-[4rem]">
              <div className="  lg:w-[53rem] h-[5.5rem] border-bright-blue  border-l-[1px] border-b-[1px] relative">
                <div className="bg-main-black h-[0.5rem] w-[2.2rem] absolute top-[5.2rem] left-[3rem] flex justify-center items-center"></div>
                <p className="text-fade-gray text-[1rem] lg:text-[1.5rem] xl:text-[2rem] p-3 ">
                  {linkText[0]}
                  <span className="text-white font-bold">{linkText[1]}</span>
                  &nbsp; {linkText[2]} &nbsp;
                  <span className="text-white font-bold">{linkText[3]}</span>
                  &nbsp; {linkText[4]}
                </p>
              </div>
            </div>
            <div className=" mt-[4rem] text-white ">
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
          </div>
        </div>
        {/* Large screen */}
        <div className="hidden lg:gap-5 md:flex md:justify-between md:mx-[3rem] lg:items-start lg:flex lg:justify-between mx-[3rem] lg:mx-[3rem] xl:mx-[6rem]">
          <div className="flex flex-col gap-5 flex-1">
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
              <div className="mt-[4rem] " id="whoarewe">
                <div className="lg:border lg:border-bright-blue lg:w-[full]">
                  <p className="text-fade-gray text-[1rem] lg:text-[1.5rem] xl:text-[2rem] ">
                    {linkText[0]}
                    <span className="text-white font-bold">{linkText[1]}</span>
                    &nbsp; {linkText[2]} &nbsp;
                    <span className="text-white font-bold">{linkText[3]}</span>
                    &nbsp; {linkText[4]}
                  </p>
                </div>
              </div>
              <div className=" mt-[4rem] text-white text-[1.2rem]">
                <div className="list-none mb-7  font-semibold">
                  <button onClick={() => setLinkText(arr[0])}>
                    Who are we ?
                  </button>
                </div>
                <div className="list-none mb-7">
                  <button onClick={() => setLinkText(arr[1])}>
                    Who are we ?
                  </button>
                </div>
                <div className="list-none ">
                  <button onClick={() => setLinkText(arr[2])}>
                    Who are we ?
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:py-[0rem] xl:py-[0rem]  flex-1 z-[1] ">
            <div className="">
              <img
                src={eko1}
                alt="hero"
                className="object-contain  aspect-auto backdrop-filter backdrop-blur-lg  rounded-[20%] lg:w-[100rem] "
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" ">
        <div className="  lg:flex lg:justify-between mx-[3rem] lg:mx-[3rem] xl:mx-[6rem]  ">
          <div className="lg:py-[3rem] xl:py-[6rem] flex-1">
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
            <div className="mt-[4rem]">
              <div className="border border-bright-blue  lg:w-[53rem]">
                <p className="text-fade-gray text-[1.5rem] ">
                  We are a firm specialized in &nbsp;
                  <span className="text-white font-bold">
                    Machine Learning, AI
                  </span>
                  &nbsp; and &nbsp;
                  <span className="text-white font-bold">
                    Big Data Analytics
                  </span>
                  &nbsp; based solutions.
                </p>
              </div>
            </div>
            <div className=" mt-[4rem] text-white text-[1.2rem]">
              <li className="list-none mb-7  font-semibold">Who are we ?</li>
              <li className="list-none mb-7">What we do ?</li>
              <li className="list-none ">We have delivered</li>
            </div>
          </div>

          <div className="flex items-center justify-center flex-1">
            <img
              src={eko1}
              alt="hero"
              className="object-contain w-[100%] lg:w-full"
            />
            <img
              src={h1}
              alt="hero"
              className="object-contain w-[100%] lg:w-full"
            />
            <img
              src="http://i.stack.imgur.com/SBv4T.gif"
              alt="this slowpoke moves"
              width="250"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
