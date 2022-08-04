import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Berita.css';
import react, {useState, useEffect, Fragment} from 'react'

function Berita() {
    const [DataBerita, setDataBerita] = useState(null);

    useEffect(() => {
      getBerita();
      return () => {
        setDataBerita(null);
      }
    }, [])

    function getBerita(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=7&per_page=4').then(function (response) {
        setDataBerita(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataBerita != null) ?
          <div className="bg container-main">
            <div className="container">
                <div className="row">
                <div className='font col-lg-6  col-md-6 col-sm-6'>
                    Berita Terbaru__
                </div>
                <div className='sub col-lg-6  col-md-6 col-sm-6 text-end'>
                <Button variant="outline-success" size="sm" href='/Berita'>
                >>Lihat semua
                </Button>
                </div>
                
        {
          DataBerita 
          && DataBerita.map((item, index) => {
            return (
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" className='image-berita' src={item.image_file_data} />
                                <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                        {item.content}
                                </Card.Text>
                                <Button variant="outline-success">Baca Selengkapnya..</Button>{' '}
                                </Card.Body>
                            </Card>
                        </div>
            )
          })
        }
                </div>
            </div>
        </div>: ''
      }
    
    </>
  );
}

export default Berita;