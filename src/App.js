import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function App() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <img src='https://img2.pngdownload.id/20180715/chh/kisspng-business-organization-project-plan-innovation-trabajo-en-equipo-5b4b6c93d35b62.5049096415316696518657.jpg' width={80} height={70}></img>&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Profil SKPD</Nav.Link>
            <Nav.Link href="#features">INFORMASI</Nav.Link>
            <Nav.Link href="#pricing">GALERY</Nav.Link>
            <Nav.Link href="#pricing">NEWS</Nav.Link>
            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );

}
export default App;