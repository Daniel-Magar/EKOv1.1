import React from "react";
import chakra from "../img/chakra.png";

const OneSource = () => {
  return (
    <section className=" ml-6 md:ml-8 py-[5.5rem] md:py-[12rem] lg:py-[1rem]">
      <div className="flex items-end justify-end lg:justify-center lg:items-center text-white lg:gap-5 ">
        <div className=" flex-1  relative lg:ml-[6rem]">
          <div className="flex justify-start items-end  uppercase gap-5">
            <div className=" ">
              <h1 className="">
                <span className="text-4xl md:text-5xl lg:text-8xl text-bright-blue font-semibold mr-2">
                  one
                </span>{" "}
                <span className="md:text-2xl lg:text-5xl">source</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-start items-end  uppercase gap-5">
            <div className=" ">
              <h1 className="">
                <span className="text-4xl md:text-5xl lg:text-8xl text-bright-blue font-semibold mr-2">
                  endless
                </span>
                <span className="md:text-2xl lg:text-5xl">solutions</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-[0.6] absolute lg:flex-1 lg:justify-center lg:items-center lg:static mb-[1rem] md:mb-0  lg:mb-0 xl:mb-0">
          <img
            src={chakra}
            alt="endless_solution"
            className="object-contain w-[11rem] md:w-[17rem] lg:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OneSource;
