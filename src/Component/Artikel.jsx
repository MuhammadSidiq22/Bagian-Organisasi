import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import React, {useState, useEffect, Fragment} from 'react'

function Artikel() {
    const [DataArtikel, setDataArtikel] = useState(null);


    useEffect(() => {
        getArtikel();
        return () => {
            setDataArtikel(null);
        }
      }, [])


      function getArtikel(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_ARTIKEL)
        .then(function (response) {
        setDataArtikel(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
    return (
        <>
          {
            (DataArtikel != null) ?
              <div className="container-main">
                <div className="container">
                    <div className="row">
                    <div className='font-title col-lg-6  col-md-6 col-sm-6'>
                        Artikel Terbaru
                    </div>
                    <hr/>
                    
            {
              DataArtikel 
              && DataArtikel.map((item, index) => {
                return (
                            <div className='font-content col-md-6 col-sm-12'>
                                <Card className='card-home mb-2'>
                                    <Card.Img
                                    className='img-home' 
                                    variant="top" 
                                    width="400"
                                    height="350"
                                    src={item.image_file_data} />
                                    <Card.Body>
                                    <Card.Title>
                                      {item.title}
                                    </Card.Title>
                                      <Button className='Button' variant="outline-success" href={`/artikel/DetailArtikel/${item.id}`}>Baca Selengkapnya..</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                      )
              })
            }
                    </div>
                </div>
            </div>: ''
          }
        
        </>
      );
    }

export default Artikel;