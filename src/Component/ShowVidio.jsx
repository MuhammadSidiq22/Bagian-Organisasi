import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";
import '../css/Style.css';

function ShowVidio() {
    const [DataShowVidio, setDataShowVidio] = useState(null);
    const { slug } = useParams();
    console.log('slug :>> ', slug);

    useEffect(() => {
        getShowVidio();
      }, [])

      function getShowVidio(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_SHOW_VIDIO + slug)
        .then(function (response) {
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
            <div className="container">
              <div className='font-judul text-center mt-5'>
                  <h1>
                  {DataShowVidio[0].description_gallery}
                  </h1>
              </div>
              <div className='show-galeri mb-5'>
                <iframe
                        width="100%"
                        height="100%"
                        src={DataShowVidio[0].video_url}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
              </div>
            </div>
            </>  : ''
        }
               
        </>
      );
    }

export default ShowVidio;