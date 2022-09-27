import "./App.css";
import Application from "./components/Application";
import Bridge from "./components/Bridge";
import Capabilities from "./components/Capabilities";
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
      <Bridge />
      <Capabilities />
    </div>
  );
}

export default App;
