import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Developer from "./components/Developers/Developer";
import Project from "./components/Projects/Project";
import Tower from "./components/Tower/Tower";
import Series from "./components/Series/Series";
import DeveloperEdit from "./components/Developers/DeveloperEdit";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/developers" element={<Developer />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/towers" element={<Tower />} />
        <Route path="/series" element={<Series />} />
        <Route path="/developers/edit/:id" component={DeveloperEdit} />
      </Routes>
    </>
  );
};

export default App;
