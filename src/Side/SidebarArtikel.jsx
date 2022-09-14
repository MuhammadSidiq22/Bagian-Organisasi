import Card from 'react-bootstrap/Card';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function SidebarArtikel() {
    const [DataSidebarArtikel, setDataSidebarArtikel] = useState(null);


    useEffect(() => {
        getSidebarArtikel();
        return () => {
            setDataSidebarArtikel(null);
        }
      }, [])


      function getSidebarArtikel(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_ARTIKEL)
        .then(function (response) {
            setDataSidebarArtikel(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    
    return (
        <>
          {
            (DataSidebarArtikel != null) ?
              <div className="container-main py-5">
                <div className="container">
                    <div className="row">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                  <a className='font-title-sidebar' href='/Artikel'>
                                    Artikel Terbaru
                                  </a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    
            {
              DataSidebarArtikel 
              && DataSidebarArtikel.map((item, index) => {
                return (
                            <div className='col-md-12 col-sm-12'>
                                <Card className='mt-2'>
                                    <Card.Body>
                                    <Card.Title>
                                        <a className='font-sidebar' href={`/artikel/DetailArtikel/${item.id}`}>
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

export default SidebarArtikel;