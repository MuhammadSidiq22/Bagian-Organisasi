import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';

function Galeri() {
  return (
    <div className='container-fluid py-5'>
        <div className='sub container'>
            Galeri Kegiatan
        </div>
    <div className='container'>
        <div className='isi row py-5'>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
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
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
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
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
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
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-3'>
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
            </div>
        </div>
     </div>
    </div>
  );
}

export default Galeri;