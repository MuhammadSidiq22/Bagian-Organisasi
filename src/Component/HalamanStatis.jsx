import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Style.css";
import React, { useState, useEffect } from "react";

function Halamanstatis() {
  const [DataHalamanstatis, setDataHalamanstatis] = useState([]);

  useEffect(() => {
    getDataHalamanstatis();
  }, []);

  function getDataHalamanstatis() {
    const axios = require("axios");
    axios
      .get(process.env.REACT_APP_STATIS_PAGE)
      .then(function (response) {
        setDataHalamanstatis(response.data.data.items);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  console.log(DataHalamanstatis);
  return (
    <>
      <div>
        <h1>{DataHalamanstatis.title}</h1>
        <p>{DataHalamanstatis.content}</p>
      </div>
    </>
  );
}

export default Halamanstatis;
