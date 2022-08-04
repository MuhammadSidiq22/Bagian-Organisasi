import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import react, {useState, useEffect, Fragment} from 'react'

function Halamanstatis() {
    const [Datastatis, setDatastatis] = useState(null);


    useEffect(() => {
        getDatastatis();
        return () => {
            setDatastatis(null);
        }
      }, [])

      function getDatastatis(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=7&per_page=6').then(function (response) {
        setDatastatis(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }


  return (  
            <>
            {
                    (Datastatis != null) ?
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
                                        <h3>HalamanStatis</h3>
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
                        Datastatis 
                        && Datastatis.map((item, index) => {
                        return (     
                            <div className="container-fluid text center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <p>Halaman Contoh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                 
                        )
                        })
                    }
                </div>
      </div>: ''
    }
  
  </>
  );
}

export default Halamanstatis;