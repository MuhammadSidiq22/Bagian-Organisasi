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
        axios.get(process.env.REACT_APP_FOTO)
        .then(function (response) {
        console.log('response :>> ', response);  
        setDataFoto(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
    { console.log('DataFoto', DataFoto) }
      {
        (DataFoto != null) ?
          <div className="container-main mt-5">
            <div className="container">
                <div className="row">
                <div className='font-judul col-lg-6  col-md-6 col-sm-6'>
                    Galeri Foto
                </div>
                <div className='sub col-lg-6  col-md-6 col-sm-6 text-end'>
                <Button variant="outline-success" size="sm" href='/Foto'>
                >>Lihat semua
                </Button>
                </div>
                
        {
          DataFoto 
          && DataFoto.map((item, index) => {
            { console.log('item', item) }
            return (
                        <div className='font-isi col-lg-3 col-md-6 col-sm-12'>
                            <Card className='mt-4'>
                                <Card.Img 
                                  variant="top" 
                                  width="400"
                                  height="200"
                                  src={item.image_gallery_item[0].image_file_data}/>
                                  <Button variant="outline-success" href={`/foto/DetailFoto/${item.slug}`}>Buka</Button>{' '}
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