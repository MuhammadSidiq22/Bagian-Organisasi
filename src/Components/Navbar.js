import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Carousel.css';

import '../css/Navbar.css';

function Header() {
 return (
    <>
    <Container fluid="md" className='Nav'>
      <br></br>
      <Row>
        <Col>
    <Navbar bg="light" variant="light" className='header'>
      <Container>
        <img src='https://img2.pngdownload.id/20180715/chh/kisspng-business-organization-project-plan-innovation-trabajo-en-equipo-5b4b6c93d35b62.5049096415316696518657.jpg' width={80} height={70}></img>&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav className="me-auto">
          <Nav.Link href="#home">PROFIL SKPD</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#features">INFORMASI</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#pricing">GALERY</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#pricing">NEWS</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#pricing">CONTACT US</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default Header;