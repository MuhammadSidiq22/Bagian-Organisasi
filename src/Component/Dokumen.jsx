import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Dokumen.css';
import react, {useState, useEffect, Fragment} from 'react'

function Dokumen() {
    const [DataDokumen, setDataDokumen] = useState(null);


    useEffect(() => {
        getDataDokumen();
        return () => {
            setDataDokumen(null);
        }
      }, [])

      function getDataDokumen(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/dokumen?instansi_id=2&per_page=4').then(function (response) {
      setDataDokumen(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }


  return (  
                <>
                {
                    (DataDokumen != null) ?
                    <div className="container-main">
                        <div className="row">
                                    <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                        className="baner d-block w-100"
                                        src=""
                                        />
                                        <Carousel.Caption className='carousel'>
                                        <h3>Dokumen</h3>
                                        <p>Beranda>Halaman Dokumen</p>
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
                        DataDokumen 
                        && DataDokumen.map((item, index) => {
                        return (
                            <div className='col-lg-12'>
                                <Card className='mt-4'>
                                    <Card.Body>
                                    <Card.Title className='sub'>
                                            {item.title}
                                    </Card.Title>
                                    <Card.Text>
                                            {item.content}
                                    </Card.Text>
                                    <Button variant="outline-success">Baca Selengkapnya..</Button>{' '}
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

export default Dokumen;