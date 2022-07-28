import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Style.css';
import React from 'react'

function Vidio() {
  return (
    <div className='isi container-fluid py-5'>
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
                    <h3>Vidio</h3>
                    <p>Beranda>Halaman Vidio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div className='isi row py-5'>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-mogxB8jFxLQ/YYN_bPWf2WI/AAAAAAAAWc8/JwPzwAiWkPMq3v8goW32r9vtFORuu8kwQCLcBGAsYHQ/s620/informasi-berita.JPG" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                 <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-mogxB8jFxLQ/YYN_bPWf2WI/AAAAAAAAWc8/JwPzwAiWkPMq3v8goW32r9vtFORuu8kwQCLcBGAsYHQ/s620/informasi-berita.JPG" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-mogxB8jFxLQ/YYN_bPWf2WI/AAAAAAAAWc8/JwPzwAiWkPMq3v8goW32r9vtFORuu8kwQCLcBGAsYHQ/s620/informasi-berita.JPG" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
                 <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-mogxB8jFxLQ/YYN_bPWf2WI/AAAAAAAAWc8/JwPzwAiWkPMq3v8goW32r9vtFORuu8kwQCLcBGAsYHQ/s620/informasi-berita.JPG" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        </div>
     </div>
  )
}

export default Vidio;