import React from "react";
import Navigasi from '../Component/Navbar';
import Footer from '../Component/Footer';
import ShowArtikel from '../Component/ShowArtikel';
import "bootstrap/dist/css/bootstrap.min.css";

const DetailArtikel = () => {
  
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
          <ShowArtikel />
        </div>
        <Footer />
    </>
  );
};
export default DetailArtikel;