import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Galeri.css';
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
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=2&per_page=4').then(function (response) {
        setDataVidio(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataVidio != null) ?
          <div className="container-main mt-5">
            <div className='row'>
                <Carousel fade>
                <Carousel.Item>
                        <img
                        className="baner d-block w-100"
                        src=""
                        />
                    <Carousel.Caption className='carousel'>
                    <h3>Vidio</h3>
                    <p>Beranda>Halaman Vidio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
        <div className="container">
        <div className="row">
                
        {
          DataVidio 
          && DataVidio.map((item, index) => {
            return (

                        <div className='col-lg-3 col-md-6 col-sm-12 py-5'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                        
                                </Card.Text>
                                <Button variant="outline-success">Perbesar</Button>{' '}
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