import React from "react";
import Home from "./Home.js";
import Berita from "./Berita.js";
import Artikel from "./Artikel.js";
import Dokumen from "./Dokumen.js";
import Foto from "./Foto.js";
import Vidio from "./Vidio.js";
import HalamanStatis from "./HalamanStatis.js";
import DetailArtikel from "./DetailArtikel.js";
import DetailBerita from "./DetailBerita.js";
import DetailDokumen from "./DetailDokumen.js";
import DetailFoto from "./DetailFoto.js";
import { Routes, Route } from "react-router-dom";
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
        <Route path='/artikel/DetailArtikel/:id' element={<DetailArtikel />} />
        <Route path='/berita/DetailBerita/:id' element={<DetailBerita />} />
        <Route path='/dokumen/DetailDokumen/:slug' element={<DetailDokumen />} />
        <Route path='/foto/DetailFoto/:slug' element={<DetailFoto />} />
      </Routes>
      
    </>
  );
};

export default App;