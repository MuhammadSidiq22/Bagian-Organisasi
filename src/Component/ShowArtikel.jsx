import react, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../css/Style.css";

function ShowArtikel() {
  const [DataShowArtikel, setDataShowArtikel] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getShowArtikel();
  }, []);

  function getShowArtikel() {
    const axios = require("axios");
    axios
      .get(process.env.REACT_APP_SHOW_ARTIKEL + id)
      .then(function (response) {
        setDataShowArtikel(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  console.log(DataShowArtikel);
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="font-title-show">
                <h1>{DataShowArtikel.title}</h1>
              </div>
              <div className="text-center">
                <img
                  className="mt-5"
                  src={DataShowArtikel.image_file_data}
                ></img>
              </div>
              <p className="font-content-show mt-5 mb-5">
                {DataShowArtikel.content}
              </p>
            </div>
          </div>
          <div>
            <Button variant="outline-success" size="sm" href="/Artikel">
              Lihat Artikel Lainnya
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowArtikel;
