import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/Style.css";
import react, { useState, useEffect, Fragment } from "react";

function Vidio() {
  const [DataVidio, setDataVidio] = useState(null);

  useEffect(() => {
    getVidio();
    return () => {
      setDataVidio(null);
    };
  }, []);

  function getVidio() {
    const axios = require("axios");
    axios
      .get(process.env.REACT_APP_VIDIO)
      .then(function (response) {
        setDataVidio(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      {DataVidio != null ? (
        <div className="container-main">
          <div className="container">
            <div className="font-title row">
              <div>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/Vidio"
                >
                  Galeri Vidio
                </a>
              </div>
              <hr />

              {DataVidio &&
                DataVidio.map((item, index) => {
                  return (
                    <div className="font-content col-lg-6 col-md-12">
                      <Card className="mt-4">
                        <Card.Img
                          variant="top"
                          width="400"
                          height="200"
                          src={item.image_gallery_item[0].thumbnail_url}
                        />
                        <Button
                          className='Button'
                          variant="outline-success"
                          href={`/vidio/DetailVidio/${item.slug}`}
                        >
                          Buka
                        </Button>{" "}
                      </Card>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Vidio;
