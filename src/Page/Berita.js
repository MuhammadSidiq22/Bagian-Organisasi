import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import Detberita from "../Component/Detailberita";
import "bootstrap/dist/css/bootstrap.min.css";
import HashLoader from "react-spinners/HashLoader";

function Berita() {
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
          <div>
            <Detberita />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Berita;
