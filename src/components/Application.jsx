import React from "react";
import AI from "../img/AI.png";

const Application = () => {
  return (
    <section>
      <div className="bg-black ">
        <div className="w-full z-10 h-full flex flex-col  md:flex-col-reverse lg:flex-row-reverse ">
          <div className="flex-[1.5] bg-[#F5FEFF] border-none  top-0 left-0 right-0 bottom-0 lg:relative lg:mt-4">
            <img
              src={AI}
              alt="ArtificialIntelligence"
              className="lg:absolute object-fill w-full h-[33rem] "
            />
          </div>
          <div className="flex-1 bg-[#F5FEFF] lg:mt-4">
            <div className="lg:pb-[22rem] lg:px-[6rem] ">
              <h1 className="bg-[#F5FEFF] text-black flex justify-center items-center pt-5 pb-7 text-2xl font-semibold lg:justify-start lg:pt-1">
                Application of AI
              </h1>
              <p className="">
                Artificial Intelligence has various applications in today's
                society. It is becoming essential for today's time because it
                can solve complex problems with an efficient way in multiple
                industries, such as Healthcare, entertainment, finance,
                education, etc. AI is making our daily life more comfortable and
                fast.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-10">
          <div>
            <button className="text-xl">View More</button>
            <div className="w-full   flex gap-1 ">
              <div className="border border-bright-blue w-[80%]"></div>
              <div className=" "></div>
              <div className="border border-bright-blue w-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
