import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-main-black">
      <div className="flex text-white justify-between items-center p-5 lg:mx-4 ">
        <div className="lg:ml-4">
          <img src="logo1.png" alt="" className="w-[4rem] lg:w-[6rem]" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center gap-10">
            <div className="hidden lg:flex gap-10">
              <a href="#">Inductries</a>
              <a href="#">Capabilities</a>
              <a href="#">Expertise</a>
              <a href="#">About Us</a>
            </div>
            <div class="cursor-pointer transition-all ease-out ">
              <div class="w-[28px] h-[2px] bg-white my-2 border rounded"></div>
              <div class="w-[28px] h-[2px] bg-white my-2 border rounded"></div>
              <div class="w-[28px] h-[2px] bg-white my-2 border rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
