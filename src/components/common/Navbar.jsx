import React from "react";
import { useState, useEffect } from "react";
import navlines from "../../img/navlines.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <nav className="bg-main-black">
      <div className="mx-[2rem]  flex text-white justify-between items-center xl:pt-18  lg:pt-[8rem] lg:mx-[3rem] xl:mx-[6rem] ">
        <div className=" lg:h-[5rem] ">
          <img
            src="logo1.png"
            alt=""
            className="w-[4rem] lg:w-[6rem] xl:w-[7.5rem] flex flex-grow"
          />
        </div>
        {/* <div className="p-4 ">
          <div className="flex justify-between items-center gap-10">
            <div className="hidden lg:flex gap-10">
              <a href="#">Inductries</a>
              <a href="#">Capabilities</a>
              <a href="#">Expertise</a>
              <a href="#">About Us</a>
            </div>

            <div
              className="cursor-pointer transition-all ease-out "
              onClick={() => setIsOpen(!isOpen)}
            >

              <div className="hamburger-lines">
                <div
                  className={
                    !isOpen
                      ? "w-[28px] h-[2px] bg-white my-2 border rounded"
                      : "w-[28px] h-[2px]  my-2 border rounded line line1"
                  }
                ></div>
                <div
                  className={
                    !isOpen
                      ? "w-[28px] h-[2px] bg-white my-2 border rounded"
                      : "w-[28px] h-[2px]  my-2 border rounded line line2"
                  }
                ></div>
                <div
                  className={
                    !isOpen
                      ? "w-[28px] h-[2px] bg-white my-2 border rounded"
                      : "w-[28px] h-[2px]  my-2 border rounded line line3"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex justify-center items-center gap-[6rem] lg:gap-[5rem] lg:h-[5rem]">
          <div>
            <div className="hidden  lg:flex lg:gap-[3rem]  xl:gap-[5rem] lg:text-[1.5rem]">
              <a href="#" className=" ">
                Industries
              </a>
              <a href="#" className=" ">
                Capabilities
              </a>
              <a href="#" className="">
                Expertise
              </a>
              <a href="#" className="">
                About Us
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-[5rem] items-center justify-center ">
              <div className="text-white">.</div>
              <div className="text-white">.</div>
              <div className="text-white">.</div>
              <div className="text-white">.</div>
            </div>
          </div>

          <nav className="z-50">
            <div className="navbar lg:h-[5rem]">
              <div className="container nav-container">
                <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>

                <div className="menu-items">
                  <ul className="bg-white z-10 w-full">
                    <li>
                      <a href="#">Industries</a>
                    </li>
                    <li>
                      <a href="#">Capabilities</a>
                    </li>
                    <li>
                      <a href="#">Expertise</a>
                    </li>
                    <li>
                      <a href="#">AboutUs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
