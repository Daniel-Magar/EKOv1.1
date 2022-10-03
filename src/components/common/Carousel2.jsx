import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import larrow from "../../img/clients/larrow.png";
import rarrow from "../../img/clients/rarrow.png";

const Carousel2 = (props) => {
  const arrowStyle = {
    background: "transparent",
    // border: "1px solid black",

    color: "#fff",
    fontSize: "80px",
    position: "absolute",
  };
  const arrowStyle2 = {
    display: "flex",
    flexContent: "flex-end",
    alignItems: "center",
    background: "transparent",
    // border: "1px solid black",

    color: "#fff",
    fontSize: "80px",
    position: "absolute",
  };
  const CustomRight = ({ onClick }) => (
    <button className="arrow right " onClick={onClick} style={arrowStyle2}>
      <img src={rarrow} alt="" className=" max-w-[2rem] " />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <img src={larrow} alt="" className="max-w-[2rem] " />
    </button>
  );
  return (
    <div className="relative bg-white py-10">
      <Carousel
        responsive={props.responsive2}
        showDots={false}
        // className="mx-[2rem] lg:mx-[5rem]"
        removeArrowOnDeviceType={["tablet", "desktop", "superLargeDesktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        containerClass="carousel-container"
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        customRightArrow={<CustomRight />}
        customLeftArrow={<CustomLeft />}
        renderButtonGroupOutside={true}
        arrows={true}
        // autoPlay={true}
      >
        <div className="md:mx-5">
          <div className=" w-full h-[28rem] md:h-[26rem] lg:w-[full] lg:h-[26rem] flex flex-col items-center justify-start text-center bg-cover bg-[#EAFAFF] md:pb-3 lg:pb-8 xl:pb-10 2xl:pb-14">
            {" "}
            <div>
              <img src={props.fraud_detection} alt="Fraud Detection" />
            </div>
            <div className=" mt-5 mx-8 w-[80%]">
              <h1 className="flex justify-start items-start text-left uppercase text-[24px]  font-semibold lg:text-[26px] lg:font-semibold">
                Fraud Detection
              </h1>
              <p className="flex justify-center items-center text-justify  mt-12">
                Leverage AI to analyze massive data sets, better identify fraud
                patterns, and flag fraudulent transactions as they happen in
                real-time.
              </p>
              <div className="flex flex-row justify-center items-center md:justify-start md:items-start  mt-10 md:mt-6 ">
                <div>
                  <a href="">
                    <div className="flex flex-col">
                      <div className="uppercase text-md">View more</div>
                      <div className="w-full cursor-pointer  flex gap-1 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div className="border bg-bright-blue border-bright-blue w-[80%]"></div>
                        <div className=" w-10%"></div>
                        <div className="border bg-bright-blue border-bright-blue w-[10%]"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-5">
          <div className=" w-full h-[28rem] md:h-[26rem] lg:w-[full] lg:h-[26rem]  flex flex-col items-center justify-start text-center bg-cover bg-[#EAFAFF]  md:pb-3 lg:pb-8 xl:pb-10 2xl:pb-14">
            <div>
              <img src={props.customer_churn} alt="" />
            </div>
            <div className=" mt-5 mx-8 w-[80%]  ">
              <h1 className="flex justify-start items-start text-left uppercase text-[24px] font-semibold lg:text-[26px] lg:font-semibold">
                CUSTOMER CHURN <br /> PREDICTION
              </h1>
              <p className="flex justify-center items-center text-justify  mt-3">
                Leverage AI to analyze massive data sets, better identify fraud
                patterns, and flag fraudulent transactions as they happen in
                real-time.
              </p>
              <div className="flex flex-row justify-center items-center md:justify-start md:items-start  mt-10 md:mt-6 ">
                <div>
                  <a href="">
                    <div className="flex flex-col">
                      <div className="uppercase text-md">View more</div>
                      <div className="w-full cursor-pointer  flex gap-1 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div className="border bg-bright-blue border-bright-blue w-[80%]"></div>
                        <div className=" w-10%"></div>
                        <div className="border bg-bright-blue border-bright-blue w-[10%]"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-5">
          <div className=" w-full h-[28rem] md:h-[26rem] lg:w-[full] lg:h-[26rem]  flex flex-col items-center justify-start text-center bg-cover bg-[#EAFAFF] md:pb-3 lg:pb-8 xl:pb-10 2xl:pb-14">
            <div>
              <img src={props.credit_risk} alt="" />
            </div>
            <div className=" mt-5 mx-8 w-[80%]  ">
              <h1 className="flex justify-start items-start text-left uppercase text-[24px] font-semibold lg:text-[26px] lg:font-semibold">
                CREDIT RISK SCORING
              </h1>
              <p className="flex justify-center items-center text-justify mt-12 md:mt-[2.75rem] lg:mt-12">
                Leverage AI to analyze massive data sets, better identify fraud
                patterns, and flag fraudulent transactions as they happen in
                real-time.
              </p>
              <div className="flex flex-row justify-center items-center md:justify-start md:items-start mt-10 md:mt-6 ">
                <div className="mb-4 md:mb-0">
                  <a href="">
                    <div className="flex flex-col">
                      <div className="uppercase text-md">View more</div>
                      <div className="w-full cursor-pointer  flex gap-1 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div className="border bg-bright-blue border-bright-blue w-[80%]"></div>
                        <div className=" w-10%"></div>
                        <div className="border bg-bright-blue border-bright-blue w-[10%]"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel2;
