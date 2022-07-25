import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import ProjectDetail from "./ProjectDetail";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/my_resume" element={<Main />}></Route>
          <Route path="/project" element={<ProjectDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
