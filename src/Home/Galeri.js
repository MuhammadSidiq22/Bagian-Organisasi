import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Style.css';

function Galeri() {
  return (
    <Container>
     <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#" className='fontbold'>Galeri Kegiatan</Navbar.Brand>
      </Container>
    </Navbar>
    <br></br>
      <Row>
        <Col xs={6} md={4}>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://www.jojonomic.com/wp-content/uploads/2020/09/restrukturisasi1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Button variant="outline-success">Success</Button>{' '}
            </Card.Body>
        </Card>
       </Col>
        <Col xs={6} md={4}>
        <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.jojonomic.com/wp-content/uploads/2020/09/restrukturisasi1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
              <Button variant="outline-success">Success</Button>{' '}
              </Card.Body>
            </Card>
        </Col>
        <Col xs={6} md={4}>
              <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://www.jojonomic.com/wp-content/uploads/2020/09/restrukturisasi1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Button variant="outline-success">Success</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://www.jojonomic.com/wp-content/uploads/2020/09/restrukturisasi1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Button variant="outline-success">Success</Button>{' '}
            </Card.Body>
        </Card>
       </Col>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        <Col xs={6} md={4}>
        <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://www.jojonomic.com/wp-content/uploads/2020/09/restrukturisasi1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Body>
              <Button variant="outline-success">Success</Button>{' '}
              </Card.Body>
            </Card>
        </Col>
        <Col xs={6} md={4}>
              <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://www.jojonomic.com/wp-content/uploads/2020/09/restrukturisasi1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
            <Button variant="outline-success">Success</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Galeri;