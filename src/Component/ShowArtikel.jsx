import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";
import DetailArtikel from '../DetailArtikel';

function ShowArtikel() {
    const [DataShowArtikel, setDataShowArtikel] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowArtikel();
        //return () => {
        //    setDataShowArtikel(null);
        //}
      }, [])

      function getShowArtikel(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/article/" + id).then(function (response) {
        setDataShowArtikel(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowArtikel)
    return (
        <>
        <h1>{id}</h1>
        <p>{DataShowArtikel.title}</p>
        <img src={DataShowArtikel.image_file_data}></img>
          {/* {
            (DataShowArtikel != null) ?
              <div className="container-main mt-5">                    
            {
              DataShowArtikel 
              && DataShowArtikel.map((item, index) => {
                return (
                            <div className=' col-md-6 col-sm-12'>
                                <h4>
                                    {item.title}
                                </h4>
                                <img src=
                                    {item.image_file_data}>
                                </img>
                                <p>
                                    {item.content}
                                </p>
                            </div>
                )
              })
            }
            </div>: ''
          } */}
        
        </>
      );
    }

export default ShowArtikel;