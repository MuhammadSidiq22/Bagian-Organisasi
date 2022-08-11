import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";
import '../css/Vidio.css';

function ShowVidio() {
    const [DataShowVidio, setDataShowVidio] = useState(null);
    const { slug } = useParams();
    console.log('slug :>> ', slug);

    useEffect(() => {
        getShowVidio();
      }, [])

      function getShowVidio(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/video-gallery/" + slug).then(function (response) {
        setDataShowVidio(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowVidio)
    return (
        <>
        { console.log('DataShowVidio', DataShowVidio) }
        {
            (DataShowVidio != null) ? 
            <>
            <div className='text-center mt-5'>
                <h1>
                {DataShowVidio[0].description_gallery}
                </h1>
            </div>
            <div className='show-vidio text-center mt-5 mb-5'>
            <iframe
                    width="860"
                    height="615"
                    src={DataShowVidio[0].video_url}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
            </div></>  : ''
        }
               
        </>
      );
    }

export default ShowVidio;