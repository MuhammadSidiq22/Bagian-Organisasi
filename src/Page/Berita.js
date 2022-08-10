import React from "react";
import Navigasi from '../Component/Navbar';
import Footer from '../Component/Footer';
import Detberita from '../Component/Detailberita';
import "bootstrap/dist/css/bootstrap.min.css";

const Berita = () => {
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
            <Detberita />
        </div>
        <Footer />
    </>
  );
};
export default Berita;