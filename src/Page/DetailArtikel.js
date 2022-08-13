import React from "react";
import Navigasi from '../Component/Navbar';
import ShowArtikel from '../Component/ShowArtikel';
import Footer from '../Component/Footer';
import SidebarArtikel from '../Side/SidebarArtikel';

import "bootstrap/dist/css/bootstrap.min.css";

const DetailArtikel = () => {
  
  return (
    <>
        <div className="container-fluid py-5">
          <div className="container">
            <div>
              <Navigasi />
            </div>
            <div className="row">
              <div className="col-lg-8 py-5">
                <ShowArtikel />
              </div>
              <div className="col-lg-4 py-5">
                <SidebarArtikel />
              </div>
            </div>
          </div>
        </div>
              <Footer />
    </>
  );
};
export default DetailArtikel;