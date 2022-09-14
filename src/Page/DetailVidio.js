import React, { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import ShowVidio from "../Component/ShowVidio";
import "bootstrap/dist/css/bootstrap.min.css";
import HashLoader from "react-spinners/HashLoader";

function DetailVidio() {
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
            <ShowVidio />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default DetailVidio;
