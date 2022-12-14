import React, { useState } from "react";
import Carousel1 from "./common/Carousel1";
import LeftArr from "../img/larrow.png";
import RightArr from "../img/rarrow.png";
import Mindful from "../img/clients/Mindful.png";
import Mercedes from "../img/clients/Mercedes.png";
import PAPL from "../img/clients/PAPL.png";
import Ooredoo from "../img/clients/Ooredoo.png";
import Gaurdian from "../img/clients/gaurdian.png";
import STC from "../img/clients/STC.png";
import CBA from "../img/clients/CBA.png";
import Everside from "../img/clients/Everside.png";
import TTK from "../img/clients/TTK.png";
import credit_risk from "../img/solvedcases/credit-risk.png";
import customer_churn from "../img/solvedcases/customer-churn.png";
import fraud_detection from "../img/solvedcases/fraud-detection.png";
import Carousel2 from "./common/Carousel2";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    arrow: true,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    arrow: true,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const arrowStyle = {
  background: "transparent",
  border: 0,
  color: "#fff",
  fontSize: "80px",
  position: "absolute",
};

const Clients = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <img
        src={RightArr}
        alt=""
        className="w-full h-[25px] lg:w-full lg:h-full"
      />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <img
        src={LeftArr}
        alt=""
        className="w-full h-[25px] lg:w-full lg:h-full"
      />
    </button>
  );
  const CustCarouselList = {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    // position: relative;
  };
  return (
    <section className=" text-black md:mt-10 lg:mt-13 xl:mt-16 2xl:mt-0 ">
      <div className="border mt-[2rem] md:mt-[6rem] bg-[#F5FEFF] border-r-0 border-l-0 border-b-0 rounded-t-[3rem]  relative">
        <div className=" flex flex-col justify-center items-center mt-10 lg:mt-[5rem] xl:mt-[5rem] mx-2">
          <h1 className=" text-[1.8rem] md:text-[2.3rem] lg:text-[3rem] xl:text-[3rem]  2xl:text-[4rem] font-medium lg:font-semibold lg:tracking-wider">
            Always by our client???s side{" "}
          </h1>
          <p className="w-[80%] text-[1rem] lg:text-[1.1rem]  xl:text-[1.4rem]  2xl:text-[1.8rem] text-center">
            from manufacturing to defense our partners span all across the Globe
          </p>
        </div>
        <div className=" flex flex-col mt-5 lg:mt-14">
          <Carousel1
            responsive={responsive}
            Mindful={Mindful}
            Mercedes={Mercedes}
            PAPL={PAPL}
            Ooredoo={Ooredoo}
            Gaurdian={Gaurdian}
            STC={STC}
            CBA={CBA}
            Everside={Everside}
            TTK={TTK}
          />
        </div>
        <div className="mt-12">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[1.8rem] md:text-[2.3rem] font-medium lg:text-[3rem]  xl:text-[3rem]  2xl:text-[4rem] lg:font-semibold">
              Our Solved Cases
            </h1>
            <p className="w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] text-[1rem]  lg:text-[1.1rem]  xl:text-[1.4rem]  2xl:text-[1.8rem] text-center mt-3">
              AI is transforming every industry and department by delivering
              better insights, personalized experiences, streamlined operations,
              and reduced risk.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col">
          <Carousel2
            responsive2={responsive2}
            credit_risk={credit_risk}
            customer_churn={customer_churn}
            fraud_detection={fraud_detection}
          />
        </div>
        <div className="text-black bg-white flex justify-center items-center pb-[3rem] md:pb-[3rem] lg:pb-[4rem] xl:pb-[5rem] 2xl:pb-[7rem] md:pt-[2rem] lg:pt-[2rem] xl:pt-[3rem] 2xl:pt-[5rem]">
          <div className="group mygroup">
            <div className="flex flex-col">
              <div className="uppercase text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider cursor-pointer hover:ease-linear duration-300">
                Get <b>Started</b>
              </div>
              <div className="w-full cursor-pointer   flex gap-3 group-hover:transition-all ease-linear duration-[0.5s] group-hover:bg-gradient-to-r from-[#0085FE] to-[#29E5FF] ">
                <div className=" py-[2px] bg-bright-blue border-bright-blue w-[80%] group-hover:bg-transparent group-hover:transition-all ease-linear duration-[0.5s]"></div>
                <div className="py-[2px] w-30% group-hover:bg-transparent group-hover:transition-all ease-linear duration-[0.5s]"></div>
                <div className="py-[2px]  bg-bright-blue border-bright-blue w-[10%] group-hover:bg-transparent  group-hover:transition-all  ease-linear duration-[0.5s]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
