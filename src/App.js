import "./App.css";
import Application from "./components/Application";
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <Navbar className="relative" />
      <Hero className="absolute" />
      <Application />
    </div>
  );
}

export default App;
