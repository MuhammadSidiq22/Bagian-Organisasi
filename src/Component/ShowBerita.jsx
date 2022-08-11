import react, {useState, useEffect, Fragment} from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../css/Style.css';

function ShowBerita() {
    const [DataShowBerita, setDataShowBerita] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getShowBerita();
      }, [])

      function getShowBerita(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_SHOW_BERITA + id)
        .then(function (response) {
        setDataShowBerita(response.data.data);
        console.log(response.data)
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
  console.log(DataShowBerita)
    return (
        <>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <div className='font-judul'>
                  <h1>
                      {DataShowBerita.title}
                  </h1>
                    </div>
                    <div className='text-center'>
                      <img className='mt-5'
                          src={DataShowBerita.image_file_data}>
                      </img>
                    </div>
                      <p className='font-isi mt-5 mb-5'>
                        {DataShowBerita.content}
                      </p>
                  </div>
                </div>
                <div>
                <Button variant="outline-success" size="sm" href='/Berita'>
                Lihat Berita Lainnya
                </Button>
            </div>
          </div>
        </div>       
        </>
      );
    }

export default ShowBerita;