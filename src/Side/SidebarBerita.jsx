import Card from 'react-bootstrap/Card';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function SidebarBerita() {
    const [DataSidebarBerita, setDataSidebarBerita] = useState(null);


    useEffect(() => {
        getSidebarBerita();
        return () => {
            setDataSidebarBerita(null);
        }
      }, [])


      function getSidebarBerita(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_BERITA)
        .then(function (response) {
            setDataSidebarBerita(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
    return (
        <>
          {
            (DataSidebarBerita != null) ?
              <div className="container-main py-5">
                <div className="container">
                    <div className="row">
                        <Card>
                            <Card.Body>
                                <Card.Title className='font-judul'>
                                    Berita Terbaru
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    
            {
              DataSidebarBerita 
              && DataSidebarBerita.map((item, index) => {
                return (
                            <div className='font-isi col-md-12 col-sm-12'>
                                <Card className='mt-2'>
                                    <Card.Body>
                                    <Card.Title>
                                        <a className='font-sidebar' href={`/berita/DetailBerita/${item.id}`}>
                                            {item.title}
                                        </a>
                                    </Card.Title>
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

export default SidebarBerita;