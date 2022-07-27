import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';

function Berita() {
  return (
    <div className='container-fluid py-5'>
        <div className='sub container'>
            Berita Terbaru
        </div>
            <div className='container'>
            <div className='isi row'>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
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
                <div className='col-lg-3 col-md-6 mt-3'>
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
                <div className='col-lg-3 col-md-6 mt-3'>
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
                <div className='isi col-lg-3 col-md-12 mt-4'>
                    <Card.Header className='sub'>Featured</Card.Header>
                    <Card className='mt-3'>
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

export default Berita;