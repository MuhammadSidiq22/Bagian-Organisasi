import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Style.css';

function Footer() {
  return (
    <Container className='footer'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
_______________________________________________________________________________________________________________________________________________________________________
                <br></br>
                <br></br>
                <br></br>
                <br></br>                
      <Row>
        <Col>

                    Some quick example text to build on the card title and make up the
                    <br></br>
                    bulk of the card's content.

        </Col>
        <Col>

                    Some quick example text to build on the card title and make up the
                    <br></br>
                    bulk of the card's content.

        </Col>
        <br></br>
        <br></br>
        <Col>

                    Some quick example text to build on the card title and make up the
                    <br></br>
                    bulk of the card's content.

        </Col>
      </Row>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Navbar expand="lg" variant="light" bg="light" className='copy'>
      <Container>
        <Navbar.Brand href="#">© 2022 Bagian Organisasi Tulang Bawang.</Navbar.Brand>
      </Container>
    </Navbar>
    </Container>
  );
}

export default Footer;