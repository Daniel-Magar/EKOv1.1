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
    <section className="h-screen text-black md:mt-10 lg:mt-13 xl:mt-16 2xl:mt-0 ">
      <div className="border bg-[#F5FEFF] h-screen border-r-0 border-l-0 border-b-0 rounded-t-[3rem]  ">
        <div className=" flex flex-col justify-center items-center mt-10">
          <h1 className=" text-[2.3rem] md:text-[2.3rem] font-medium">
            Always by our client’s side{" "}
          </h1>
          <p className="w-[80%] text-[1rem] text-center">
            from manufacturing to defense our partners span all across the Globe
          </p>
        </div>
        <div className="mt-10 md:mt-[3rem] lg:mt-[6rem]">
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
            <h1 className="text-[1.8rem] md:text-[2.3rem] font-medium">
              Our Solved Cases
            </h1>
            <p className="w-[80%] text-[1rem] text-center mt-3">
              AI is transforming every industry and department by delivering
              better insights, personalized experiences, streamlined operations,
              and reduced risk.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel2
            responsive2={responsive2}
            credit_risk={credit_risk}
            customer_churn={customer_churn}
            fraud_detection={fraud_detection}
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
