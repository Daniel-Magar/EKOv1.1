import React from "react";
import AI from "../img/AI.png";

const Application = () => {
  return (
    <section>
      <div className="bg-black  h-auto">
        <div className="w-full  min-h-[14rem] md:min-h-[14rem] lg:min-h-[14rem] xl:min-h-[22rem] 2xl:min-h-[27rem] py-10 lg:py-2 xl:py-10 2xl:py-14 z-10  flex flex-col  md:flex-col-reverse lg:flex-row-reverse">
          <div className="lg:w-[60%] bg-[#F5FEFF] border-none lg:relative ">
            <div className="flex justify-end lg:absolute lg:top-[-2rem] xl:top-[-2rem] 2xl:top-[-2rem] right-0">
              <img
                src={AI}
                alt="ArtificialIntelligence"
                className="hidden md:hidden lg:flex  z-[1] flex-grow  "
              />
              <img
                src={AI}
                alt="ArtificialIntelligence"
                className="lg:hidden flex"
              />
            </div>
          </div>

          <div className=" bg-[#F5FEFF] lg:w-[40%] lg:min-h-[19rem] xl:min-h-[20rem] 2xl:min-h-[29rem]">
            <div className=" lg:absolute left-0 w-[50%] lg:pt-4 xl:pt-8">
              <div className="lg:flex flex-col justify-between lg:gap-8 xl:gap-10 2xl:gap-28">
                <div className="ml-[3rem] lg:mr-[6rem] xl:ml-[6rem] xl:mr-[10rem] text-[14px] 2xl:text-xl lg:text-sm ">
                  <h1 className=" text-black flex justify-center items-center pt-5 pb-7 text-2xl font-semibold lg:justify-start lg:pt-1">
                    Application of AI
                  </h1>
                  <p className="w-full ">
                    Artificial Intelligence has various applications in today's
                    society. It is becoming essential for today's time because
                    it can solve complex problems with an efficient way in
                    multiple industries, such as Healthcare, entertainment,
                    finance, education, etc. AI is making our daily life more
                    comfortable and fast.
                  </p>
                </div>
                <div className="flex justify-start items-center xl:ml-[6rem] ml-[3rem] xl:mr-[10rem]  ">
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
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-10 lg:hidden">
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
