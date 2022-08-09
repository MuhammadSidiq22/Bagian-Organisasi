import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function DetailFoto() {
    const [DataDetailFoto, setDataDetailFoto] = useState(null);

    useEffect(() => {
      getDetailFoto();
      return () => {
        setDataDetailFoto(null);
      }
    }, [])

    function getDetailFoto(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=2').then(function (response) {
      setDataDetailFoto(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataDetailFoto != null) ?
          <div className="container-main mt-5">
              <div className='baner text-center'>
                  <h1>Galery Foto</h1>
              </div>
        <div className="container-fluid bg">
        <div className="row">
                
        {
          DataDetailFoto 
          && DataDetailFoto.map((index, item) => {
            return (

                        <div className='col-lg-3 col-md-6 col-sm-12 py-5'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={Item.image_gallery_item[0].image_file_data} />
                                <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                      {item.description}
                                </Card.Text>
                                <Button variant="outline-success" href={`/foto/DetailFoto/${item.id}`}>Perbesar</Button>{' '}
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

export default DetailFoto;