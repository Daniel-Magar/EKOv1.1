import React from "react";
import AI from "../img/AI.png";

const Application = () => {
  return (
    <section>
      <div className="  h-auto">
        <div className="bg-black w-full  min-h-[14rem] md:min-h-[14rem] lg:min-h-[14rem] xl:min-h-[22rem] 2xl:min-h-[27rem] py-1 lg:py-2 xl:py-10 2xl:py-14 z-10  flex flex-col  md:flex-col lg:flex-row-reverse">
          <div className="lg:w-[60%] bg-[#F5FEFF] border-none lg:relative ">
            <h1 className=" lg:hidden text-black flex justify-center items-center pt-5 pb-7 text-2xl font-semibold lg:justify-start lg:pt-1">
              Application of AI
            </h1>
            <div className=" flex justify-end lg:absolute lg:top-[-2rem] xl:top-[-2rem] 2xl:top-[-2rem] right-0">
              <img
                src={AI}
                alt="ArtificialIntelligence"
                className="hidden md:hidden lg:flex  z-[1] flex-grow-0 md:max-w-[40rem] lg:max-w-[45rem] xl:w-max-w-[80rem] 2xl:max-w-[100rem] "
              />
              <img
                src={AI}
                alt="ArtificialIntelligence"
                className="lg:hidden flex"
              />
            </div>

            <div className="lg:hidden mx-[2rem]">
              <p className="pt-[2rem] pb-[2rem] w-full flex    text-black md:pt-[4rem] md:pb-[4rem]">
                Artificial Intelligence has various applications in today's
                society. It is becoming essential for today's time because it
                can solve complex problems with an efficient way in multiple
                industries, such as Healthcare, entertainment, finance,
                education, etc. AI is making our daily life more comfortable and
                fast.
              </p>
            </div>
          </div>

          <div className=" bg-[#F5FEFF] lg:w-full lg:min-h-[19rem] xl:min-h-[20rem] 2xl:min-h-[29rem]">
            <div className=" lg:absolute left-0 lg:w-[50%] lg:pt-4 xl:pt-8 lg:mr-[10rem]">
              <div className="lg:flex flex-col  justify-between lg:gap-8 xl:gap-10 2xl:gap-28">
                <div className="lg:max-w-[50rem] ml-[3rem] lg:mr-[9rem] xl:ml-[6rem] xl:mr-[10rem] text-[14px] 2xl:text-xl lg:text-sm ">
                  <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                    <h1 className="hidden md:hidden   text-black lg:flex justify-center items-center pt-5 pb-7 text-2xl font-semibold lg:justify-start lg:pt-1">
                      Application of AI
                    </h1>
                    <p className="w-full hidden md:hidden   text-black lg:flex md:pt-[4rem] md:pb-[4rem] lg:pt-0 lg:pb-0">
                      Artificial Intelligence has various applications in
                      today's society. It is becoming essential for today's time
                      because it can solve complex problems with an efficient
                      way in multiple industries, such as Healthcare,
                      entertainment, finance, education, etc. AI is making our
                      daily life more comfortable and fast.
                    </p>
                  </div>
                </div>
                <div className="bg-[#F5FEFF] pb-5 flex justify-center items-center ml-0 lg:flex lg:justify-start lg:items-start xl:ml-[6rem] lg:ml-[3rem] xl:mr-[10rem]  ">
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
      </div>
    </section>
  );
};

export default Application;
