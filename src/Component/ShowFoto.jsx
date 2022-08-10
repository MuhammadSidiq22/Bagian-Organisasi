import '../css/DetailFoto.css';
import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";

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
            <div className='img text-center mt-5'>
                <img
                    src={DataShowFoto[0].image_file_data}>
                </img>
            </div>
            <div>
                <p className='mt-5 mb-5 text-center'>
                    {DataShowFoto[0].description_gallery}
                </p>
            </div>
            </>  : ''
        }
               
        </>
      );
    }

export default ShowFoto;