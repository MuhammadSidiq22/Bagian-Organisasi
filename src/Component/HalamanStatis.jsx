import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function Halamanstatis() {
    const [Datastatis, setDatastatis] = useState(null);


    useEffect(() => {
        getDatastatis();
        return () => {
            setDatastatis(null);
        }
      }, [])

      function getDatastatis(){
        const axios = require('axios');
    axios.get('').then(function (response) {
        setDatastatis(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }


  return (  
            <>
            {
                    (Datastatis != null) ?
                        <div className="container-main mt-5">
                            <div className='baner text-center'>
                                <h1>Informasi Lainnya</h1>
                            </div>
                            <div className="bg container-fluid">
                            <div className="container">
                                    <div className="row">
                    {
                        Datastatis 
                        && Datastatis.map((item, index) => {
                        return (     
                                        <div>
                                            <h1>Halaman Contoh</h1>
                                        </div>
                        )
                        })
                    }
                        </div>
                    </div>
                </div>
      </div>: ''
    }
  
  </>
  );
}

export default Halamanstatis;