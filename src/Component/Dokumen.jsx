import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import React from 'react'

function Dokumen() {
  return (
    <div className='isi container-fluid'>
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
                    <h3>Dokumen</h3>
                    <p>Beranda>Halaman Dokumen</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>

    </div>
  )
}

export default Dokumen