import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import Pagination from 'react-bootstrap/Pagination';

function Detberita() {
  return (
    <div className='isi container-fluid py-1'>
        <div className='row'>
            <div className='col-12'>
                <Carousel fade>
                <Carousel.Item>
                    <img

                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/ac/b9/72/acb972a99cadb2b1b311ae24788cfd6a.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className='carousel'>
                    <h3>Berita</h3>
                    <p>Beranda>Halaman Berita</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    <div className='container'>
        <div className='row py-5'>
            <div className='col-lg-6  col-md-12'>
                <Card>
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-mogxB8jFxLQ/YYN_bPWf2WI/AAAAAAAAWc8/JwPzwAiWkPMq3v8goW32r9vtFORuu8kwQCLcBGAsYHQ/s620/informasi-berita.JPG" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="https://asset-a.grid.id/crop/0x100:1080x801/x/photo/2020/02/07/167159773.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-television-news-background-image_909008.png" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-television-news-background-image_909008.png" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-television-news-background-image_909008.png" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-television-news-background-image_909008.png" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-success">Success</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
            <div className='col-lg-6 col-md-12'>
                        <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>

                  <Card.Header className='mt-5'>Featured</Card.Header>
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
                    <Card className='mb-5'>
                        <Card.Body>This is some text within a card body.</Card.Body>
                        <Card.Link href="#" className='text-end'>Selengkapnya</Card.Link>
                    </Card>

                    <Card.Header className='mt-5'>Featured</Card.Header>
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
    <div className='container'>
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </div>
</div>
  
  );
}

export default Detberita;