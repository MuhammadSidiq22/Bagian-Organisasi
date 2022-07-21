import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Style.css';

function Card1() {
  return (
    <Container>
    <br></br>
    <Container fluid="md">
      <Row>
        <Col>      
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
      </Col>
      </Row>
      <br></br>
      <br></br>
      <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#" className='fontbold'>Berita Terbaru</Navbar.Brand>
      </Container>
    </Navbar>
    </Container>
      <br></br>
      <br></br>
      <Row>
        <Col xs={12} md={8}>
        <CardGroup className='card'>
      <Card>
        <Card.Img variant="top" src="https://www.talenta.co/wp-content/uploads/2022/03/organisasi-perusahaan.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text >
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="outline-success">Baca Selengkapnya</Button>{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.sampoernauniversity.ac.id/wp-content/uploads/2022/02/pexels-photo-3183150.jpeg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button variant="outline-success">Baca Selengkapnya</Button>{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.republika.co.id/uploads/member/images/news/kghgd9li2v.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button variant="outline-success">Baca Selengkapnya</Button>{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </Col>
        <br></br>
        <Col xs={6} md={4}>
        <Card border="light" style={{ width: '18rem' }} className>
        <Card.Header className='fontbold'>Berita Populer</Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Selengkapnya</Card.Link>
          <br></br>
          <br></br>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Selengkapnya</Card.Link>
          <br></br>
          <br></br>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Selengkapnya</Card.Link>
          <br></br>
          <br></br>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Selengkapnya</Card.Link>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Card1;