import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import ProjectDetail from "./ProjectDetail";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/my_resume" element={<Main />}></Route>
          <Route path="/project" element={<ProjectDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
