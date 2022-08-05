import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router";

function ShowArtikel() {
    const [DataShowArtikel, setDataShowArtikel] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getShowArtikel();
        return () => {
            setDataShowArtikel(null);
        }
      }, [])

      function getShowArtikel(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/article/" + id).then(function (response) {
        setDataShowArtikel(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

    return (
        <>
          {
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
          }
        
        </>
      );
    }

export default ShowArtikel;