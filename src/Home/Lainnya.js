import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

function Artikel() {
  return (
    <Container>
    <Row>
        <Col xs={6} md={4}>
        <div className='fontbold'>Info lainnya _____</div>
        <br></br>
        <br></br>
        <br></br>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <div className='fontbold'>Info lainnya _____</div>
        <br></br>
        <br></br>
        <br></br>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={6} md={4}>
        <div className='fontbold'>Berita Terbaru _____</div>
        <br></br>
        <br></br>
        <br></br>
        <Card>
        <Card.Img variant="top" src="https://mediajagoan.com/wp-content/uploads/2021/04/20210429_112406.jpg" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <div className='fontbold'>Pemerintah Kabupaten _____</div>
        <br></br>
        <br></br>
        <br></br>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        </Col>
        <Col xs={6} md={4}>
        <div className='fontbold'>Kepala Bagian _____</div>
          <Figure>
          <br></br>
          <br></br>
          <Figure.Image
                width={700}
                height={200}
                alt="171x180"
                src="https://cdn.imgbin.com/10/20/11/imgbin-avatar-user-profile-icon-women-wear-frock-GNLBV4N6qanFpjEYMEqxEgcCd.jpg"
              />
              <br></br>
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </Figure>
              <div className='fontbold'>Publikasi _____</div>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Artikel;