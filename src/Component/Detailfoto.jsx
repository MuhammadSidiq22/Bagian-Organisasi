import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Galeri.css';
import bg from '../asset/banner/2.jpg';
import react, {useState, useEffect, Fragment} from 'react'

function Foto() {
    const [DataFoto, setDataFoto] = useState(null);

    useEffect(() => {
      getFoto();
      return () => {
        setDataFoto(null);
      }
    }, [])

    function getFoto(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=2&per_page=4').then(function (response) {
        setDataFoto(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataFoto != null) ?
          <div className="container-main mt-5">
            <div className='row'>
                <Carousel fade>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={bg}
                        />
                    <Carousel.Caption className='carousel'>
                    <h3>Foto</h3>
                    <p>Beranda>Halaman Foto</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
        <div className="container">
        <div className="row">
                
        {
          DataFoto 
          && DataFoto.map((item, index) => {
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

export default Foto;