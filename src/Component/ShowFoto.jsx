import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";

function ShowFoto() {
    const [DataShowFoto, setDataShowFoto] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowFoto();
      }, [])

      function getShowFoto(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/article/" + id).then(function (response) {
        setDataShowFoto(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowFoto)
    return (
        <>
        <div className='text-center'>
            <img className='mt-5'
                src={DataShowFoto.image_gallery_item[0].image_file_data}>
            </img>
        </div>
        <div>
            <p className='mt-5'>
                {DataShowFoto.description}
            </p>
        </div>        
        </>
      );
    }

export default ShowFoto;