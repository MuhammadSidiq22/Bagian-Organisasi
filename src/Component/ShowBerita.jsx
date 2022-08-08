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
        <div>
        <h1>
            {DataShowBerita.title}
        </h1>
        <div className='text-center'>
        <img className='mt-5' 
        src={DataShowBerita.image_file_data}>
        </img>
        </div>
        <p className='mt-5'>
            {DataShowBerita.content}
        </p>
      </div>
      </div>        
        </>
      );
    }

export default ShowBerita;