import react, { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import '../css/Dokumen.css';
import '../css/Style.css';

function ShowDokumen() {
    const [DataShowDokumen, setDataShowDokumen] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getShowDokumen();
    }, [])

    function getShowDokumen() {
        const axios = require('axios');
        axios.get(process.env.REACT_APP_SHOW_DOKUMEN  + slug)
        .then(function (response) {
            setDataShowDokumen(response.data.data);
            console.log(response.data)
        }).catch(function (error) {

        }).then(function () {

        });
    }

    console.log(DataShowDokumen)
    return (
        <>
            {
                (DataShowDokumen != null) ?
                <div className="container py-5 mt-5">
                    <div className='font-title-show'>
                        <h4>
                            {DataShowDokumen.description_dokumen}
                        </h4>
                    </div>
                    <div className='show-dokumen'>
                        <iframe
                            src={"data:application/pdf;base64," + DataShowDokumen[0].dokumen_file_data}
                            frameBorder="0"
                            title={DataShowDokumen[0].dokumen_file_data}
                            scrolling="auto"
                            height="100%"
                            width="100%"
                        ></iframe>
                    </div>
                </div> : ''
            }
        </>
    );
}

export default ShowDokumen;