import React from "react";
import bridgegap from "../img/bridge-bg.png";
import aipic from "../img/aipic.png";

const Bridge = () => {
  return (
    // <section>
    //   <div className="border ">
    //     <div className="bg-hero overflow-hidden">
    //       <img
    //         src={bridgegap}
    //         alt=""
    //         className="object-contain ml-[-11rem] mr-[15rem] max-w-3xl border overflow-hidden"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="h-screen">
      <div id="parent_div">
        <div id="background"></div>
        <div id="textarea">
          <div className="bg-hero overflow-hidden relative">
            <img
              src={bridgegap}
              alt=""
              className="object-contain ml-[-11rem] mr-[15rem] max-w-3xl  overflow-hidden"
            />
          </div>
          <div className="border absolute left-0 right-0 bottom-0 top-0">
            <div className="grid grid-cols-2 md:grid-cols-3 w-full ">
              <div className="border flex flex-col ">
                <div className="border border-b-yellow-500">
                  <img src={aipic} alt="" />
                </div>
                <div>1</div>
              </div>
              <div className="w-full border">2</div>
              <div className="w-full border">3</div>
              <div className="w-full border">4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
