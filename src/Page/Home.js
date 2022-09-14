import React, { useState, useEffect } from "react";
import Banner from "../Component/Banner";
import Berita from "../Component/Berita";
import SidebarBerita from "../Side/SidebarBerita";
import SidebarArtikel from "../Side/SidebarArtikel";
import Artikel from "../Component/Artikel";
import Profil from "../Component/Profil";
import Vidio from "../Component/Vidio";
import Foto from "../Component/Foto";
import Footer from "../Component/Footer";
import "../css/Style.css";
import HashLoader from "react-spinners/HashLoader";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="App">
          <HashLoader size={60} color={"#36d7b7"} loading={loading} />
        </div>
      ) : (
        <>
          <div className="py-5">
            <Banner />
          </div>
          <div className="container-fluid">
            <div className="bg row">
              <div className="col-lg-9 col-md-12">
                <Berita />
              </div>
              <div className="col-lg-3 col-md-12">
                <SidebarBerita />
              </div>
            </div>
            <div className="bg1 row mt-3">
              <div className="col-lg-9 col-md-12">
                <Artikel />
              </div>
              <div className="col-lg-3 col-md-12">
                <SidebarArtikel />
              </div>
            </div>
            <div className="bg mt-3">
              <Profil />
            </div>
            <div className="row py-3" 
            style={{ padding: "0px 100px" }}>
              <div className="col-lg-6">
                <Foto />
              </div>
              <div className="col-lg-6">
                <Vidio />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
