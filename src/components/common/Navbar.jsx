import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import navlines from "../../img/navlines.png";
import menuline from "../../img/menuline.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState("");

  const unCheck = () => {
    let ch = (document.getElementById("checkbox").checked = false);
    // document.getElementById('checkbox').click();
    console.log(ch);
  };
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <nav className="bg-main-black navbar" id="">
      <div className="mx-[2rem] flex text-white justify-between items-center py-5 xl:pt-0  lg:pt-0 lg:mx-[3rem] xl:mx-[6rem] ">
        <NavHashLink to="#" className="  ">
          <img
            src="logo1.png"
            alt=""
            className="w-[4rem] lg:w-[6rem] xl:w-[7.5rem] flex flex-grow"
          />
        </NavHashLink>

        <div className="flex justify-center items-center gap-[6rem] lg:gap-[5rem] lg:h-[5rem]">
          <div>
            <div className="hidden md:flex md:gap-[2rem]  lg:flex lg:gap-[3rem]  xl:gap-[5rem] lg:text-[1.5rem] 2xl:text-4xl">
              <NavHashLink
                to="/#industries"
                className="hover:text-bright-blue hover:scale-[1.1] hover:transition-all ease-linear duration-75"
              >
                {" "}
                Industries
              </NavHashLink>
              {/* <a
                href="#"
                className="hover:text-bright-blue hover:scale-[1.1] hover:transition-all ease-linear duration-75"
              >
                Industries
              </a> */}
              <NavHashLink
                to="#capabilities"
                className="hover:text-bright-blue hover:scale-[1.1] hover:transition-all ease-linear duration-75"
              >
                Capabilities
              </NavHashLink>
              <a
                href="#expertise"
                className="hover:text-bright-blue hover:scale-[1.1] hover:transition-all ease-linear duration-75"
              >
                Expertise
              </a>
              <NavHashLink
                to="#aboutus"
                className="hover:text-bright-blue hover:scale-[1.1] hover:transition-all ease-linear duration-75 "
              >
                About Us
              </NavHashLink>
            </div>
            <div className="hidden lg:flex lg:gap-[5rem] items-center justify-center ">
              <div className="text-white flex justify-center items-center"></div>
            </div>
          </div>

          <nav className="z-50  lg:hidden">
            <div className="navbar lg:h-[5rem] ">
              <div className="container nav-container ">
                <input
                  className="checkbox"
                  type="checkbox"
                  name=""
                  id="checkbox"
                />
                <div className="hamburger-lines ">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>

                <div className="menu-items bg-black  text-black">
                  <ul className="bg-black  w-full text-black ">
                    <li className="text-white">
                      <NavHashLink to="#industries" onClick={unCheck}>
                        Industries
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink to="#capabilities" onClick={unCheck}>
                        Capabilities
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink to="#expertise" onClick={unCheck}>
                        Expertise
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink to="#aboutus" onClick={unCheck}>
                        AboutUs
                      </NavHashLink>
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
