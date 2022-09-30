import "./App.css";
import Application from "./components/Application";
import Bridge from "./components/Bridge";
import Capabilities from "./components/Capabilities";
import Clients from "./components/Clients";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import OneSource from "./components/OneSource";
import OurSolution from "./components/OurSolution";

function App() {
  return (
    <div className="">
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
}

export default App;
