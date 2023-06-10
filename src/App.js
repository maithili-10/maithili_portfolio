import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { Router, Switch, Route, Link, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Projects from "./routes/Projects";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
