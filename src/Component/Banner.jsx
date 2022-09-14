import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Style.css';
import react, {useState, useEffect} from 'react'

function Banner() {
    const [DataBanner, setDataBanner] = useState(null);

    useEffect(() => {
      getDataBanner();
      return () => {
        setDataBanner(null);
      }
    }, [])

    function getDataBanner(){
        const axios = require('axios');
        axios.get(process.env.REACT_APP_BERITA)
        .then(function (response) {
          setDataBanner(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }
    

  return (
    <>
      {
        (DataBanner != null) ?
        <Carousel fade className='baner-show'>
        {
          DataBanner 
          && DataBanner.map((item, index) => {
            return (
                  <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={item.image_file_data}
                    style={{ width: 500, height: 700 }}
                    >
                    </img>
                    <Carousel.Caption className='bg-banner'>
                      <a className='font-banner' href={`/berita/DetailBerita/${item.id}`}>
                      <h3>
                        {item.title}
                      </h3>
                      </a>
                    </Carousel.Caption>
                  </Carousel.Item>
            )
          })
        }
        </Carousel>
        : ''
      }
    </>
  );
}

export default Banner;