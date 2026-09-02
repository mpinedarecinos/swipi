import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:code" element={<Room />} />
    </Routes>
  );
}

export default App;
