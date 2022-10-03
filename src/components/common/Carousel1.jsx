import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel1 = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col justify-center ">
      <Carousel
        responsive={props.responsive}
        showDots={false}
        // className="mx-[2rem] lg:mx-[5rem]"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        containerClass="carousel-container"
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        // customRightArrow={<CustomRight />}
        // customLeftArrow={<CustomLeft />}
        renderButtonGroupOutside={true}
        arrows={false}
        autoPlay={true}
      >
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" h-auto lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.Mindful}
              alt="Mindful"
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className="  h-auto  lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.Mercedes}
              alt=""
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className="  h-auto  lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.PAPL}
              alt=""
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" h-auto lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.Ooredoo}
              alt=""
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" h-auto lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.Gaurdian}
              alt=""
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" h-auto lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.STC}
              alt=""
              className="md:w-[8rem] lg:w-10rem xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" h-auto lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.CBA}
              alt=""
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" h-auto lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.Everside}
              alt=""
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className="  h-auto lg:h-auto flex items-center justify-center text-center bg-cover">
            <img
              src={props.TTK}
              alt=""
              className="md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[14rem]"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel1;
