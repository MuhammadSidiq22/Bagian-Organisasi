import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Style.css';
import react, {useState, useEffect, Fragment} from 'react'

function Halamanstatis() {
    const [DataHalamanstatis, setDataHalamanstatis] = useState([]);


    useEffect(() => {
        getDataHalamanstatis();
        return () => {
            setDataHalamanstatis(null);
        }
      }, [])

      function getDataHalamanstatis(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_STATIS_PAGE)
        .then(function (response) {
            setDataHalamanstatis(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }

console.log(DataHalamanstatis)
  return (  
    <>
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col">
                        {DataHalamanstatis.title}
                    <p>
                        {DataHalamanstatis.intro}
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Halamanstatis;