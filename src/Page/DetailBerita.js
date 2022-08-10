import React from "react";
import Navigasi from '../Component/Navbar';
import Footer from '../Component/Footer';
import ShowBerita from '../Component/ShowBerita';
import "bootstrap/dist/css/bootstrap.min.css";

const DetailBerita = () => {
  
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
          <ShowBerita />
        </div>
        <Footer />
    </>
  );
};
export default DetailBerita;