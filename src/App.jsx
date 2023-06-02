import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./compontents/NavBar";
import Home from "./compontents/Home";
import About from "./compontents/About";
import Projects from "./compontents/Projects";
import Blogs from "./compontents/Blogs";
import Contact from "./compontents/Contact";
import ProjectDetail from "./compontents/micro-components/ProjectDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectName" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
