import React from "react";
import Navbar from "../common/Navbar";
import Hero from "../Hero";
import Application from "../Application";
import OurSolution from "../OurSolution";
import OneSource from "../OneSource";
import Bridge from "../Bridge";
import Capabilities from "../Capabilities";
import Clients from "../Clients";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div>
      <Navbar className="relative" />
      <Hero className="absolute" />
      <Application />
      <OurSolution />
      <OneSource />

      <div className="">
        <div id="parent_div">
          <div id="background"></div>
          <div id="textarea">
            <Bridge />
            <Capabilities />
          </div>
        </div>
      </div>
      {/* <Bridge />
      <Capabilities /> */}

      <Clients />

      <Footer />
    </div>
  );
};

export default Home;
