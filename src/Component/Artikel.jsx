import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function Artikel() {
    const [DataArtikel, setDataArtikel] = useState(null);


    useEffect(() => {
        getArtikel();
        return () => {
            setDataArtikel(null);
        }
      }, [])


      function getArtikel(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=4').then(function (response) {
        setDataArtikel(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
    console.log(DataArtikel)
    return (
        <>
          {
            (DataArtikel != null) ?
              <div className="container-main mt-5">
                <div className="container">
                    <div className="row">
                    <div className='sub col-lg-6  col-md-6 col-sm-6'>
                        Artikel Terbaru__
                    </div>
                    <div className='sub col-lg-6  col-md-6 col-sm-6 text-end'>
                    <Button variant="outline-success" size="sm" href='/Artikel'>
                    >>Lihat semua
                    </Button>
                    </div>
                    
            {
              DataArtikel 
              && DataArtikel.map((item, index) => {
                return (
                            <div className=' col-md-6 col-sm-12'>
                                <Card className='mt-4'>
                                    <Card.Img variant="top" src={item.image_file_data} />
                                    <Card.Body>
                                    <Card.Title>{item.title}{item.id}</Card.Title>
                                    <Card.Text>
                                            
                                    </Card.Text>
                                    <Button variant="outline-success" href={`/artikel/DetailArtikel/${item.id}`}>Baca Selengkapnya..</Button>{' '}
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

export default Artikel;