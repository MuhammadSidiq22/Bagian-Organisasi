import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Style.css';

function Card1() {
  return (
    <Container>
    <br></br>
    <Container fluid="md">
      <br></br>
      <br></br>
      <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#" className='fontbold'>Artikel Terbaru</Navbar.Brand>
      </Container>
    </Navbar>
    </Container>
      <br></br>
      <br></br>
      <Row>
        <Col xs={12} md={8}>
        <Card>
        <Card.Img variant="top" src="https://1.bp.blogspot.com/-mogxB8jFxLQ/YYN_bPWf2WI/AAAAAAAAWc8/JwPzwAiWkPMq3v8goW32r9vtFORuu8kwQCLcBGAsYHQ/s620/informasi-berita.JPG" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
       </Card>
      <br></br>
      <br></br>
       <Card>
        <Card.Img variant="top" src="https://asset-a.grid.id/crop/0x100:1080x801/x/photo/2020/02/07/167159773.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
      <br></br>
      <br></br>
        <Card>
        <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-television-news-background-image_909008.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
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
      <Row>
        <Col>
              
        </Col>
      </Row>
    </Container>
  );
}

export default Card1;