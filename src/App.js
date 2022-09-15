import "./App.css";
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <Navbar className="relative" />
      <Hero className="absolute" />
    </div>
  );
}

export default App;
