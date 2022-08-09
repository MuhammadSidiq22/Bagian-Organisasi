import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";

function ShowDokumen() {
    const [DataShowDokumen, setDataShowDokumen] = useState([]);
    const { slug } = useParams();


    useEffect(() => {
        getShowDokumen();
      }, [])

      function getShowDokumen(){
        const axios = require('axios');
    axios.get("http://adminmesuji.embuncode.com/api/dokumen/2" + slug).then(function (response) {
        setDataShowDokumen(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowDokumen)
    return (
        <>
        <div className="container py-5 mt-5">
            <div>
                <article>
                    {DataShowDokumen.description_dokumen}
                </article>
            </div>
            <div>
                <iframe
                    src={"data:application/pdf;base64," + DataShowDokumen.dokumen_file_data}
                    frameBorder="0"
                    scrolling="auto"
                    height="100%"
                    width="100%"
                ></iframe>
            </div>
         </div>        
        </>
      );
    }

export default ShowDokumen;