import Footer from "../Component/Footer";
import Halamanstatis from "../Component/HalamanStatis";
import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function HalamanStatis() {
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
            <div className="py-5">
              <Halamanstatis />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default HalamanStatis;
