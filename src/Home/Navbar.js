import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Style.css';

function Navigasi() {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-end flex-grow-1 pe-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' width={70} height={90}></img>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='font'>Beranda</Nav.Link>
            <Nav.Link href="#link" className='font'>Berita</Nav.Link>
            <Nav.Link href="#link" className='font'>Artikel</Nav.Link>
            <Nav.Link href="#link" className='font'>Dokumen</Nav.Link>
            <NavDropdown title="Galeri" id="basic-nav-dropdown" className='font'>
              <NavDropdown.Item href="#action/3.1">Foto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vidio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='font'>Halaman Statis</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;