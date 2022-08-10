import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function Vidio() {
    const [DataVidio, setDataVidio] = useState(null);

    useEffect(() => {
      getVidio();
      return () => {
        setDataVidio(null);
      }
    }, [])

    function getVidio(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2&per_page=4').then(function (response) {
        setDataVidio(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataVidio != null) ?
          <div className="bg container-main mt-5">
            <div className="container">
                <div className="row">
                <div className='sub col-lg-6  col-md-6 col-sm-6'>
                    Galeri Vidio__
                </div>
                <div className='sub col-lg-6  col-md-6 col-sm-6 text-end'>
                <Button variant="outline-success" size="sm" href='/Vidio'>
                >>Lihat semua
                </Button>
                </div>
                
        {
          DataVidio 
          && DataVidio.map((index) => {
            return (
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={index.image_gallery_item[0].thumbnail_url} />
                                <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                       {index.description} 
                                </Card.Text>
                                <Button variant="outline-success">Selengkapnya</Button>{' '}
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

export default Vidio;