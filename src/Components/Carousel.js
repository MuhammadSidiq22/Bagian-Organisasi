import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Carousel.css';

function Caurosel() {
  return (
    <Container fluid="md" className='carousel'>
      <br></br>
    <Row>
      <Col>
      <Carousel>
      <Carousel.Item>
        <img
          width={1348}
          height={544}
          className="d-block w-100"
          src="https://news.unair.ac.id/wp-content/uploads/2020/04/kinerja-organisasi.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1348}
          height={544}
          className="d-block w-100"
          src="https://asset.kompas.com/crops/_XxrAFmUf3KjsVAeqEd_aXbxfy4=/0x0:7500x5000/750x500/data/photo/2021/09/02/61306471d228e.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1348}
          height={544}        
          className="d-block w-100"
          src="https://www.dictio.id/uploads/db3342/original/3X/a/e/ae02e15cd8c15e1a9cacd7cabf468830f1aaf6a0.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Col>
    </Row>
    <br></br>
  </Container>

  );
}

export default Caurosel;