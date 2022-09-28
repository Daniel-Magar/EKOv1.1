import React from "react";
import artificial from "../img/ArtificialInt.png";
import dataeng from "../img/dataeng.png";
import ml from "../img/ML.png"
import webdev from "../img/webdev.png"
import bi from "../img/BI.png"

const Capabilities = () => {
  return (
    <section className=" md:my-[30rem]">
      <div className="flex lg:flex-col  justify-center items-center text-white mx-6 gap-5">
        <div className="flex flex-col lg:flex-row gap-3 flex-[0.5]">
          <div>
            <img src={dataeng} alt="" />
          </div>
          <div>
            <img src={artificial} alt="" />
          </div>
          <div>
          <img src={ml} alt="" />
          </div>
          <div>
          <img src={webdev} alt="" />
          </div>
          <div>
          <img src={bi} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center item-center  lg:flex-row flex-1  ">
          <div className="flex flex-row  justify-center item-center">
            
           <div className=" w-[240px] ml-[14rem]  h-[10rem] border-[2px] border-bright-blue border-dashed border-t-0 border-r-0"></div>
           <div className="bg-bright-blue w-2 h-2 rounded  "></div>
          </div>
         
          <div className="w-[240px]  h-[10rem] border-[2px] border-bright-blue border-dashed border-t-0 border-r-0">2</div>
          <div className="w-[240px]  h-[10rem] border-[2px] border-bright-blue border-dashed border-t-0 border-r-0">3</div>
          <div className="w-[240px]  h-[10rem] border-[2px] border-bright-blue border-dashed border-t-0 border-r-0">4</div>
          <div className="w-[240px]  h-[10rem] border-[2px] border-bright-blue border-dashed border-t-0 border-r-0 border-b-0">5</div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
