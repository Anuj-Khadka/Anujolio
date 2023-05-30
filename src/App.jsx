import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./compontents/NavBar";
import Home from "./compontents/Home";
import About from "./compontents/About";
import Projects from "./compontents/Projects";
import Contact from "./compontents/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
