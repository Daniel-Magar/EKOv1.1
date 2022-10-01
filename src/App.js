import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/common/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
