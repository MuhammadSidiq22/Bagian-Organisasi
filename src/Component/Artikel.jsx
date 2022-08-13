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
        axios.get(process.env.REACT_APP_ARTIKEL)
        .then(function (response) {
        setDataArtikel(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
    return (
        <>
          {
            (DataArtikel != null) ?
              <div className="container-main">
                <div className="container">
                    <div className="row">
                    <div className='font-judul col-lg-6  col-md-6 col-sm-6'>
                        Artikel Terbaru
                    </div>
                    <div className='col-lg-6  col-md-6 col-sm-6 text-end'>
                    <Button variant="outline-success" size="sm" href='/Artikel'>
                    >>Lihat semua
                    </Button>
                    </div>
                    
            {
              DataArtikel 
              && DataArtikel.map((item, index) => {
                return (
                            <div className='font-isi col-md-6 col-sm-12'>
                                <Card className='mt-4'>
                                    <Card.Img 
                                    variant="top" 
                                    width="400"
                                    height="350"
                                    src={item.image_file_data} />
                                    <Card.Body>
                                    <Card.Title>
                                      {item.title}
                                    </Card.Title>
                                      <Button className='text-end' variant="outline-success" href={`/artikel/DetailArtikel/${item.id}`}>Baca Selengkapnya..</Button>{' '}
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