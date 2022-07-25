import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import '../css/Style.css';

function Card1() {
  return (
    <div className='container-fluid py-5'>
        <div className='container'>

            <Navbar expand="lg" variant="light" bg="light">
                <div className='container'>
                <Navbar.Brand href="#" className='fontbold'>Berita Terbaru</Navbar.Brand>
                </div>
            </Navbar>
            <div className='row py-5'>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
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
                <div className='col-lg-3 col-md-6 mt-3'>
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
                <div className='col-lg-3 col-md-6 mt-3'>
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
                <div className='col-lg-3 col-md-12 mt-4'>
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
    </div>
  );
}

export default Card1;