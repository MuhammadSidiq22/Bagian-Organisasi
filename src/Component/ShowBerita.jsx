import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";

function ShowBerita() {
    const [DataShowBerita, setDataShowBerita] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowBerita();
      }, [])

      function getShowBerita(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/news/" + id).then(function (response) {
        setDataShowBerita(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowBerita)
    return (
        <>
        <div className="container py-5 mt-5">
        <div className='text-center'>
        <h4>
            {DataShowBerita.title}
        </h4>
        <img className='mt-5' src=
            {DataShowBerita.image_file_data}>
        </img>
        <p className='mt-5'>
            {DataShowBerita.content}
        </p>
      </div>
      </div>        
        </>
      );
    }

export default ShowBerita;