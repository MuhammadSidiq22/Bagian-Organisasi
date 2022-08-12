import React from "react";
import Navigasi from '../Component/Navbar';
import ShowBerita from '../Component/ShowBerita';
import Footer from '../Component/Footer';
import SidebarBerita from '../Side/SidebarBerita';

import "bootstrap/dist/css/bootstrap.min.css";

const DetailBerita = () => {
  
  return (
    <>
        <div className="container-fluid py-5">
          <div className="container">
            <div>
              <Navigasi />
            </div>
            <div className="row">
              <div className="col-lg-8 py-5">
                <ShowBerita />
              </div>
              <div className="col-lg-4 py-5">
                <SidebarBerita />
              </div>
            </div>
          </div>
        </div>
              <Footer />
    </>
  );
};
export default DetailBerita;