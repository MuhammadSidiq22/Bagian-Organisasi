import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function Vidio() {
    const [DataVidio, setDataVidio] = useState(null);

    useEffect(() => {
      getVidio();
      return () => {
        setDataVidio(null);
      }
    }, [])

    function getVidio(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2').then(function (response) {
        setDataVidio(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataVidio != null) ?
          <div className="container-main mt-5">
            <div className='baner text-center'>
                <h1>Galery Vidio</h1>
            </div>
        <div className="bg container-fluid">
        <div className="row">
                
        {
          DataVidio 
          && DataVidio.map((item, index) => {
            return (

                        <div className='col-lg-3 col-md-6 col-sm-12 py-5'>
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={item.image_gallery_item[0].thumbnail_url} />
                                <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button variant="outline-success">Perbesar</Button>{' '}
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

export default Vidio;