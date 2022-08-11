import React from "react";
import Navigasi from '../Component/Navbar';
import Footer from '../Component/Footer';
import ShowVidio from '../Component/ShowVidio';
import "bootstrap/dist/css/bootstrap.min.css";

const DetailVidio = () => {
  return (
    <>
        <div className="container-fluid py-5">
          <Navigasi />
        </div>
        <div>
            <ShowVidio />
        </div>
        <Footer />
    </>
  );
};
export default DetailVidio;