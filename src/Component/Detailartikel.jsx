import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Detailartikel.css';
import Pagination from 'react-bootstrap/Pagination';
import react, {useState, useEffect, Fragment} from 'react'

function Detartikel() {
    const [DataDetartikel, setDataDetartikel] = useState(null);


    useEffect(() => {
        getDetartikel();
        return () => {
            setDataDetartikel(null);
        }
      }, [])

      function getDetartikel(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=4').then(function (response) {
        setDataDetartikel(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }


  return (  
                <>
                {
                    (DataDetartikel != null) ?
                    <div className="container-main">
                        <div className="row">
                                    <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                        className="baner d-block w-100"
                                        src=""
                                        />
                                        <Carousel.Caption className='carousel'>
                                        <h3>Artikel</h3>
                                        <p>Beranda>Artikel</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    </Carousel>
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
                            
                    {
                        DataDetartikel 
                        && DataDetartikel.map((item, index) => {
                        return (
                            <div className='col-lg-12'>
                                <Card className='mt-4'>
                                    <Card.Img variant="top" src={item.image_file_data} />
                                    <Card.Body>
                                    <Card.Title className='sub'>{item.title}</Card.Title>
                                    <Card.Text>
                                            {item.content}
                                    </Card.Text>
                                    <Button variant="outline-success" href='/artikel/DetailArtikel/${item.id}'>Baca Selengkapnya..</Button>{' '}
                                    </Card.Body>
                                </Card>
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
                </div>
      </div>: ''
    }
  
  </>
  );
}

export default Detartikel;