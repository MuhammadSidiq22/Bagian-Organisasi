import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import React, {useState, useEffect, Fragment} from 'react'

function Berita() {
    const [DataBerita, setDataBerita] = useState(null);

    useEffect(() => {
      getBerita();
      return () => {
        setDataBerita(null);
      }
    }, [])

    function getBerita(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_BERITA)
        .then(function (response) {
        setDataBerita(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataBerita != null) ?
          <div className="container-main">
            <div className="container">
                <div className="row">
                <div className='font-title col-lg-6  col-md-6 col-sm-6'>
                     Berita Terbaru
                </div>
                <hr/>
                
        {
          DataBerita 
          && DataBerita.map((item, index) => {
            return (
                        <div className='font-content col-lg-4 col-md-6 col-sm-12 mt-2'>
                            <Card className='card-home'>
                                <Card.Img 
                                variant="top" 
                                className='img-home'
                                width="400"
                                height="200" 
                                src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                        {item.content}
                                </Card.Text>
                                <Button className='Button' variant="outline-success" href={`/berita/DetailBerita/${item.id}`}>Baca Selengkapnya..</Button>
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

export default Berita;