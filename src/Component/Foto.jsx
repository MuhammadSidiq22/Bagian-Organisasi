import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/Style.css";
import react, { useState, useEffect, Fragment } from "react";

function Foto() {
  const [DataFoto, setDataFoto] = useState(null);

  useEffect(() => {
    getFoto();
    return () => {
      setDataFoto(null);
    };
  }, []);

  function getFoto() {
    const axios = require("axios");
    axios
      .get(process.env.REACT_APP_FOTO)
      .then(function (response) {
        console.log("response :>> ", response);
        setDataFoto(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      {console.log("DataFoto", DataFoto)}
      {DataFoto != null ? (
        <div className="container-main">
          <div className="container">
            <div className="font-title row">
              <div>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/Foto"
                >
                  Galeri Foto
                </a>
              </div>
              <hr />

              {DataFoto &&
                DataFoto.map((item, index) => {
                  {
                    console.log("item", item);
                  }
                  return (
                    <div className="font-content col-lg-6 col-md-12">
                      <Card className="mt-4">
                        <Card.Img
                          variant="top"
                          width="400"
                          height="200"
                          src={item.image_gallery_item[0].image_file_data}
                        />
                        <Button
                          className='Button'
                          variant="outline-success"
                          href={`/foto/DetailFoto/${item.slug}`}
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

export default Foto;
