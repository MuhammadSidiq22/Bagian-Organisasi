import React from "react";
import Navigasi from '../Component/Navbar';
import Footer from '../Component/Footer';
import ShowDokumen from '../Component/ShowDokumen';
import "bootstrap/dist/css/bootstrap.min.css";

const DetailDokumen = () => {
  
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
          <ShowDokumen />
        </div>
        <Footer />
    </>
  );
};
export default DetailDokumen;