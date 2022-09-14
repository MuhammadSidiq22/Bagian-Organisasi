import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import ShowFoto from "../Component/ShowFoto";
import "bootstrap/dist/css/bootstrap.min.css";
import HashLoader from "react-spinners/HashLoader";

function DetailFoto() {
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
            <ShowFoto />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default DetailFoto;
