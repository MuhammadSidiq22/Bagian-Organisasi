import React from "react";
import Navigasi from './Component/Navbar';
import Footer from './Component/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

const DetailBerita = () => {
  
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <Footer />
    </>
  );
};
export default DetailBerita;