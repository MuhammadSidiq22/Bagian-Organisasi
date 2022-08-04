import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function Galeri() {
    const [DataGaleri, setDataGaleri] = useState(null);

    useEffect(() => {
      getGaleri();
      return () => {
        setDataGaleri(null);
      }
    }, [])

    function getGaleri(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=7&per_page=4').then(function (response) {
        setDataGaleri(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataGaleri != null) ?
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
          DataGaleri 
          && DataGaleri.map((item, index) => {
            return (
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_file_data} />
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

export default Galeri;