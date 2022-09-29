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
          <div id="textarea h-screen }">
            <Bridge />
            <Capabilities />
          </div>
        </div>
      </div>
      <Clients />
      <div className="md:h-[8rem] md:min-h-[20rem] lg:min-h-[25rem]"></div>
      <Footer />
    </div>
  );
}

export default App;
