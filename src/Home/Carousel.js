import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Style.css';

function Caurosel() {
  return (
    <Container fluid="md">
      <br></br>
    <Row>
      <Col>
      <Carousel fade>
      <Carousel.Item>
        <img
          width={1348}
          height={544}
          className="d-block w-100"
          src="https://mediajagoan.com/wp-content/uploads/2021/04/20210429_112406.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carousel'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1348}
          height={544}
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-s9b-25d9IRM/X8B3b_oWvRI/AAAAAAAA170/yhNcqMdebZQnKz4z08aUHsQDaZe9Xj7wgCLcBGAsYHQ/s1280/Pemerintah%2BTulang%2BBawang%2BTerima%2BPenghargaan%2BWTP%2B6%2BKali%2BBerturut-turut.jpg"
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
          src="https://cdn-2.tstatic.net/lampung/foto/bank/images/Harapan-Pj-Bupati-Mesuji-Sulpakar-kepada-Dandim-0426Tulang-Bawang-yang-baru.jpg"
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