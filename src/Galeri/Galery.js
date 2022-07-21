import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' width={80} height={100}></img>&nbsp;
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