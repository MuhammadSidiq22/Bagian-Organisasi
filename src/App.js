import React from "react";
import Home from "./Page/Home.js";
import Berita from "./Page/Berita.js";
import Artikel from "./Page/Artikel.js";
import Dokumen from "./Page/Dokumen.js";
import Foto from "./Page/Foto.js";
import Vidio from "./Page/Vidio.js";
import DetailArtikel from "./Page/DetailArtikel.js";
import DetailBerita from "./Page/DetailBerita.js";
import DetailDokumen from "./Page/DetailDokumen.js";
import DetailFoto from "./Page/DetailFoto.js";
import DetailVidio from "./Page/DetailVidio.js";
import HalamanStatis from "./Page/HalamanStatis.js";
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
        <Route path='/vidio/DetailVidio/:slug' element={<DetailVidio />} />
      </Routes>
      
    </>
  );
};

export default App;