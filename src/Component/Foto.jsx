import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function Foto() {
    const [DataFoto, setDataFoto] = useState(null);

    useEffect(() => {
      getFoto();
      return () => {
        setDataFoto(null);
      }
    }, [])

    function getFoto(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2&per_page=4').then(function (response) {
      setDataFoto(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataFoto != null) ?
          <div className="container-main mt-5">
            <div className="container">
                <div className="row">
                <div className='sub col-lg-6  col-md-6 col-sm-6'>
                    Galeri Foto__
                </div>
                <div className='sub col-lg-6  col-md-6 col-sm-6 text-end'>
                <Button variant="outline-success" size="sm" href='/Foto'>
                >>Lihat semua
                </Button>
                </div>
                
        {
          DataFoto 
          && DataFoto.map((item, index) => {
            return (
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_gallery_item[0].image_file_data} />
                                <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                       {item.description} 
                                </Card.Text>
                                <Button variant="outline-success" href={`/foto/DetailFoto/${item.slug}`}>Perbesar</Button>{' '}
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

export default Foto;