import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";

function ShowArtikel() {
    const [DataShowArtikel, setDataShowArtikel] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowArtikel();
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
        <div className="container py-5 mt-5">
        <div>
        <h1>
            {DataShowArtikel.title}
        </h1>
        <div className='text-center'>
        <img className='mt-5'
        src={DataShowArtikel.image_file_data}>
        </img>
        </div>
        <p className='mt-5'>
            {DataShowArtikel.content}
        </p>
      </div>
      </div>        
        </>
      );
    }

export default ShowArtikel;