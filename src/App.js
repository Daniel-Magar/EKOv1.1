import "./App.css";
import Application from "./components/Application";
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import OurSolution from "./components/OurSolution";

function App() {
  return (
    <div className="">
      <Navbar className="relative" />
      <Hero className="absolute" />
      <Application />
      <OurSolution />
    </div>
  );
}

export default App;
