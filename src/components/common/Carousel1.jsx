import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel1 = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col">
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
          <div className="w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.Mindful} alt="Mindful" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.Mercedes} alt="" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.PAPL} alt="" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.Ooredoo} alt="" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.Gaurdian} alt="" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.STC} alt="" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.CBA} alt="" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.Everside} alt="" />
          </div>
        </div>
        <div className="mr-2 lg:mr-[1.5rem]">
          <div className=" w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
            <img src={props.TTK} alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousel1;
