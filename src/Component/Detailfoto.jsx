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
        axios.get(process.env.REACT_APP_FOTO_PAGE)
        .then(function (response) {
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
              <div className='font-judul baner text-center'>
                  <h1>Galery Foto</h1>
              </div>
        <div className="container-fluid bg">
        <div className="row">
                
        {
          DataDetailFoto 
          && DataDetailFoto.map((item, index) => {
            return (

                        <div className='font-isi col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img 
                                variant="top" 
                                width="400"
                                height="200"
                                src={item.image_gallery_item[0].image_file_data} />
                                <Button variant="outline-success" href={`/foto/DetailFoto/${item.slug}`}>Selengkapnya</Button>{' '}
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