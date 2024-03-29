import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../css/Style.css";
import Pagination from "react-bootstrap/Pagination";
import React, { useState, useEffect } from "react";

function Detartikel() {
  const [DataDetartikel, setDataDetartikel] = useState([]);

  useEffect(() => {
    getDetartikel();
  }, []);

  function getDetartikel() {
    const axios = require("axios");
    axios
      .get(process.env.REACT_APP_ARTIKEL_PAGE)
      .then(function (response) {
        setDataDetartikel(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      {DataDetartikel != null ? (
        <div className="container-main">
          <div className="font-title baner">
            <h1>Artikel</h1>
          </div>
          <div className="container-fluid py-3" style={{backgroundColor: "#e6fff2"}}>
            <div className="row">
              {DataDetartikel &&
                DataDetartikel.map((item, index) => {
                  return (
                    <div className="font-content col-md-6 col-sm-12">
                      <Card className="Card-univ mb-5">
                        <Card.Img
                          variant="top"
                          width="400"
                          height="350"
                          src={item.image_file_data}
                        />
                        <Card.Body>
                          <Card.Title>
                            {item.title}
                            {item.id}
                          </Card.Title>
                          <Button
                            variant="outline-success"
                            href={`/artikel/DetailArtikel/${item.id}`}
                          >
                            Baca Selengkapnya..
                          </Button>{" "}
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              <div className="container mt-5">
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Detartikel;
