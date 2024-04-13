import React from "react";
import LightModeLandingPage from "./Landingpage";
import DarkLandingPage from "./darkLandingPage";
// import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LightModeLandingPage />}></Route>
        <Route path="/dark" element={<DarkLandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
