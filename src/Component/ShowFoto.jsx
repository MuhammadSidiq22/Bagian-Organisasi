import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";
import '../css/DetailFoto.css';

function ShowFoto() {
    const [DataShowFoto, setDataShowFoto] = useState(null);
    const { slug } = useParams();
    console.log('slug :>> ', slug);

    useEffect(() => {
        getShowFoto();
      }, [])

      function getShowFoto(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/image-gallery/" + slug).then(function (response) {
        setDataShowFoto(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowFoto)
    return (
        <>
        { console.log('DataShowFoto', DataShowFoto) }
        {
            (DataShowFoto != null) ? 
            <>
            <div className='img text-center mt-5 mb-5'>
            <img
                width="860"
                height="615"
                src={DataShowFoto[0].image_file_data}>
            </img>
            </div>
            <div className='text-center mt-5'>
                <p>
                    {DataShowFoto[0].description_gallery}
                </p>
            </div></>  : ''
        }
               
        </>
      );
    }

export default ShowFoto;