import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Nav.css';

function Navigasi() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className="bg-nav justify-content-end flex-grow-1 pe-3">
      <div className='nav container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png' width={70} height={90}></img>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='effect'>Beranda</Nav.Link>
            <Nav.Link href="/Berita" className='effect'>Berita</Nav.Link>
            <Nav.Link href="/Artikel" className='effect'>Artikel</Nav.Link>
            <Nav.Link href="/Dokumen" className='effect'>Dokumen</Nav.Link>
            <NavDropdown title="Galeri" id="basic-nav-dropdown" className='effect'>
              <NavDropdown.Item href="/Foto" className='effect'>Foto</NavDropdown.Item>
              <NavDropdown.Item href="/Vidio" className='effect'>Vidio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/HalamanStatis" className='effect'>Halaman Statis</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
  );
}

export default Navigasi;