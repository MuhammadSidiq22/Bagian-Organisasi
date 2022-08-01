import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import Pagination from 'react-bootstrap/Pagination';
import react, {useState, useEffect, Fragment} from 'react'

function Detberita() {
    const [DataDetberita, setDataDetberita] = useState(null);


    useEffect(() => {
        getDetberita();
        return () => {
            setDataDetberita(null);
        }
      }, [])

      function getDetberita(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=7&per_page=6').then(function (response) {
        setDataDetberita(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }


  return (  
    <>
    {
                    (DataDetberita != null) ?
                        <div className="container-main mt-5">
                            <div className='row'>
                                <div className='col-12'>
                                    <Carousel fade>
                                    <Carousel.Item>
                                        <img

                                        className="d-block w-100"
                                        src="https://i.pinimg.com/564x/ac/b9/72/acb972a99cadb2b1b311ae24788cfd6a.jpg"
                                        alt="First slide"
                                        />
                                        <Carousel.Caption className='carousel'>
                                        <h3>Berita</h3>
                                        <p>Beranda>Halaman Berita</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                    {
                        DataDetberita 
                        && DataDetberita.map((item, index) => {
                        return (
                                <div className="container">
                                    <div className='col-sm-12'>
                                        <Card className='mt-4'>
                                            <Card.Img variant="top" src={item.image_file_data} />
                                            <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                    {item.content}
                                            </Card.Text>
                                            <Button variant="outline-success">Baca Selengkapnya..</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    </div>
                        )
                        })
                    }
      </div>: ''
    }
  
  </>
  );
}

export default Detberita;