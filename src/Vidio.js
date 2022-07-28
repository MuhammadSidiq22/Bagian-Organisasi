import React from "react";
import Navigasi from './Component/Navbar';
import Footer from './Component/Footer';
import Vidio from "./Component/Detailvidio";
import "bootstrap/dist/css/bootstrap.min.css";

const Berita = () => {
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
            <Vidio />
            <div>
                
            </div>
        </div>
        <Footer />
    </>
  );
};
export default Berita;