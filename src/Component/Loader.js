import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import "../css/Style.css"

function Loader() {
  return (
    <div className="App">
    <HashLoader size={60} color={"#36d7b7"} />
  </div>
  )
}

export default Loader
