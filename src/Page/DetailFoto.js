import React from "react";
import Navigasi from '../Component/Navbar';
import Footer from '../Component/Footer';
import ShowFoto from '../Component/ShowFoto';
import "bootstrap/dist/css/bootstrap.min.css";

const DetailFoto = () => {
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
            <ShowFoto />
        </div>
        <Footer />
    </>
  );
};
export default DetailFoto;