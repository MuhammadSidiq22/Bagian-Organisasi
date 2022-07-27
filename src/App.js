import React from "react";
import Home from "./Home.js";
import Artikel from "./Artikel.js";
import { Routes, Route } from "react-router-dom";
import Berita from "./Berita.js";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Berita" element={<Berita />} />
        <Route path="/Artikel" element={<Artikel />} />
      </Routes>
      
    </>
  );
};

export default App;