import React from "react";
import AI from "../img/AI.png";

const Application = () => {
  return (
    <section>
      <div className="bg-white ">
        <h1 className="flex justify-center items-center pt-5 pb-7 text-2xl font-semibold">
          Application of AI
        </h1>
        <div className="w-full z-10 h-full">
          <img src={AI} alt="ArtificialIntelligence" />
        </div>
        <div className="p-[3rem]">
          <p>
            Artificial Intelligence has various applications in today's society.
            It is becoming essential for today's time because it can solve
            complex problems with an efficient way in multiple industries, such
            as Healthcare, entertainment, finance, education, etc. AI is making
            our daily life more comfortable and fast.
          </p>
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
