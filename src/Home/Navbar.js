import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Style.css';

function Navigasi() {
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
        <Navbar.Brand href="#home" className='font'>HOME</Navbar.Brand>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav className="me-auto">
          <Nav.Link href="#home" className='font'>PROFIL SKPD</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#features" className='font'>INFORMASI</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="../Galeri/Galeri.js" className='font'>GALERY</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#pricing" className='font'>NEWS</Nav.Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link href="#pricing" className='font'>CONTACT US</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default Navigasi;