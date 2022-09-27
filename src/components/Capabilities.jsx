import React from "react";
import artificial from "../img/ArtificialInt.png";
import dataeng from "../img/dataeng.png";

const Capabilities = () => {
  return (
    <section className="border md:my-[30rem]">
      <div className="flex  justify-center items-center text-white mx-6">
        <div className="flex flex-col gap-3 flex-[0.5]">
          <div>
            <img src={dataeng} alt="" />
          </div>
          <div>
            <img src={artificial} alt="" />
          </div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div className="flex flex-col border flex-1">
          <div className="w-full">1</div>
          <div className="w-full">2</div>
          <div className="w-full">3</div>
          <div className="w-full">4</div>
          <div className="w-full">5</div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
