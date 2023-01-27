import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default AllRoutes;
