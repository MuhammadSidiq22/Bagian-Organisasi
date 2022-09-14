import React, { useState, useEffect } from "react";
import ShowBerita from "../Component/ShowBerita";
import Footer from "../Component/Footer";
import SidebarBerita from "../Side/SidebarBerita";
import HashLoader from "react-spinners/HashLoader";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailBerita() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="App">
          <HashLoader size={60} color={"#36d7b7"} loading={loading} />
        </div>
      ) : (
        <>
          <div className="container-fluid py-5">
            <div className="container">
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
      )}
    </div>
  );
}

export default DetailBerita;
