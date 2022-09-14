import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";
import '../css/Style.css';

function ShowFoto() {
    const [DataShowFoto, setDataShowFoto] = useState(null);
    const { slug } = useParams();
    console.log('slug :>> ', slug);

    useEffect(() => {
        getShowFoto();
      }, [])

      function getShowFoto(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_SHOW_FOTO + slug)
        .then(function (response) {
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
            <div className="container">
                <div className='show-galeri text-center py-5 mt-5'>
                    <img
                        width="100%"
                        height="100%"
                        src={DataShowFoto[0].image_file_data}>
                    </img>
                </div>
                <div className='font-content-show text-center'>
                    <p>
                        {DataShowFoto[0].description_gallery}
                    </p>
                </div>
            </div>
            </>  : ''
        }
               
        </>
      );
    }

export default ShowFoto;