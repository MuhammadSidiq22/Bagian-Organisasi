import React from "react";
import Navigasi from './Component/Navbar';
import Footer from './Component/Footer';
import Detartikel from './Component/Detailartikel';
import "bootstrap/dist/css/bootstrap.min.css";

const Artikel = () => {
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
            <Detartikel />
        </div>
        <Footer />
    </>
  );
};
export default Artikel;