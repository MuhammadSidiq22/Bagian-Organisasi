import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Detailberita.css';
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
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=2').then(function (response) {
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
                                        className="baner d-block w-100"
                                        src=""
                                        />
                                        <Carousel.Caption className='carousel'>
                                        <h3>Berita</h3>
                                        <p>Beranda>Halaman Berita</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="bg container-fluid">
                            <div className="container">
                            <Form className="d-flex mt-5">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            </Form>
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
                                            <Button variant="outline-success" href={`/berita/DetailBerita/${item.id}`}>Baca Selengkapnya..</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    </div>
                        )
                        })
                    }
                        <div className="container mt-5">
                        <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                        </Pagination>
                        </div>
                </div>
      </div>: ''
    }
  
  </>
  );
}

export default Detberita;