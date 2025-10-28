import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Button as MUIButton} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div style={{height: 60}} />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </>
  );
}

export default App;
