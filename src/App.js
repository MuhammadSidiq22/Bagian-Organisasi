import React from "react";
import Home from "./Home.js";
import Artikel from "./Artikel.js";
import Dokumen from "./Dokumen.js";
import Foto from "./Foto.js";
import Vidio from "./Vidio.js";
import HalamanStatis from "./HalamanStatis.js";
import { Routes, Route } from "react-router-dom";
import Berita from "./Berita.js";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Berita" element={<Berita />} />
        <Route path="/Artikel" element={<Artikel />} />
        <Route path="/Dokumen" element={<Dokumen />} />
        <Route path="/Foto" element={<Foto />} />
        <Route path="/Vidio" element={<Vidio />} />
        <Route path="/HalamanStatis" element={<HalamanStatis />} />
      </Routes>
      
    </>
  );
};

export default App;