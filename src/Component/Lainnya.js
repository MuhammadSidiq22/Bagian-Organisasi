import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Style.css';

function Card1() {
  return (
    <div className='container-fluid py-5'>
        <div className='container'>
            <Navbar expand="lg" variant="light" bg="light">
                <div className='container'>
                <Navbar.Brand href="#" className='fontbold'>Artikel Terbaru</Navbar.Brand>
                </div>
            </Navbar>
        </div>
        <div className='row py-5'>
            <div className='col-lg-6  col-md-5 col-sm-12'>
                <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-mogxB8jFxLQ/YYN_bPWf2WI/AAAAAAAAWc8/JwPzwAiWkPMq3v8goW32r9vtFORuu8kwQCLcBGAsYHQ/s620/informasi-berita.JPG" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="https://asset-a.grid.id/crop/0x100:1080x801/x/photo/2020/02/07/167159773.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-television-news-background-image_909008.png" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-6  col-md-5 col-sm-12 mt-4'>
                  <Card.Header>Featured</Card.Header>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        <Card.Link href="#" className='text-end'>Selengkapnya</Card.Link>
                    </Card>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        <Card.Link href="#" className='text-end'>Selengkapnya</Card.Link>
                    </Card>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        <Card.Link href="#" className='text-end'>Selengkapnya</Card.Link>
                    </Card>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        <Card.Link href="#" className='text-end'>Selengkapnya</Card.Link>
                    </Card>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        <Card.Link href="#" className='text-end'>Selengkapnya</Card.Link>
                    </Card>
            </div>
        </div>
    </div>
  );
}

export default Card1;