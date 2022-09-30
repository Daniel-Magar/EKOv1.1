import React from "react";

// 👇️ named export
export function Button1() {
  return (
    <div className="mytrans">
      <p className="text-fade-gray text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem]  p-3">
        We are a firm specialized in &nbsp;
        <span className="text-white font-bold">Machine Learning, AI</span>
        &nbsp; and &nbsp;
        <span className="text-white font-bold">Big Data Analytics</span>
        &nbsp; based solutions.
      </p>
    </div>
  );
}

// 👇️ named export
export function Button2() {
  return (
    <div className="w-full">
      <p className="text-fade-gray text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem] p-3 ">
        We deliver &nbsp;
        <span className="text-white font-bold">values and ethics</span>
        &nbsp; we understand &nbsp;
        <span className="text-white font-bold"> your requirement.</span>
        &nbsp;
      </p>
    </div>
  );
}

export function Button3() {
  return (
    <div className="w-full">
      <p className="text-fade-gray text-[1.2rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[2rem]  p-3 ">
        Lorem ipsum dolar &nbsp;
        <span className="text-white font-bold">text text text</span>
        &nbsp; we understand &nbsp;
        <span className="text-white font-bold"> text text text text</span>
        &nbsp;
      </p>
    </div>
  );
}
