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
        axios.get(process.env.REACT_APP_VIDIO_PAGE)
        .then(function (response) {
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
            <div className='font-judul baner text-center'>
                <h1>Galery Vidio</h1>
            </div>
        <div className="bg container-fluid">
        <div className="row">
        <div className='font-judul'>
            Galeri Vidio
          </div>
                
        {
          DataVidio 
          && DataVidio.map((item, index) => {
            return (

                        <div className='font-isi col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img 
                                variant="top" 
                                width="400"
                                height="200"
                                src={item.image_gallery_item[0].thumbnail_url} />
                                <Button variant="outline-success" href={`/vidio/DetailVidio/${item.slug}`}>Selengkapnya</Button>{' '}
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