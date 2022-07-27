import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Style.css';

function Navigasi() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className="justify-content-end flex-grow-1 pe-3">
      <div className='container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' width={70} height={90}></img>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/Berita">Berita</Nav.Link>
            <Nav.Link href="/Artikel">Artikel</Nav.Link>
            <Nav.Link href="#link">Dokumen</Nav.Link>
            <NavDropdown title="Galeri" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Foto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vidio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Halaman Statis</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
  );
}

export default Navigasi;