import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'


function Dokumen() {
    const [DataDokumen, setDataDokumen] = useState(null);


    useEffect(() => {
        getDataDokumen();
        return () => {
            setDataDokumen(null);
        }
      }, [])

      function getDataDokumen(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/dokumen?instansi_id=2').then(function (response) {
      setDataDokumen(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }

 console.log(DataDokumen)
  return (  
                <>
                {
                    (DataDokumen != null) ?
                    <div className="container-main">
                        <div className='baner text-center'>
                            <h1>Dokumen</h1>
                            <hr />
                        </div>
                                <div className="bg container-fluid">
                                <div className="container">
                                    <h2>Dokumen</h2>
                            
                    {
                        DataDokumen 
                        && DataDokumen.map((item, index) => {
                        return (
                            <div className='col-lg-12'>
                                <Card className='mt-4'>
                                    <Card.Body>
                                    <Card.Title>
                                    {item.dokumen_item[0].dokumen_file_name}
                                    </Card.Title>
                                    <Card.Text>
                                    {item.description}
                                    </Card.Text>
                                    <Button variant="outline-success" href={`/dokumen/DetailDokumen/${item.slug}`}>Baca Selengkapnya..</Button>{' '}
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

export default Dokumen;