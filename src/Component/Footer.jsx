import React from 'react'
import '../css/Footer.css';
import bg from '../asset/logo/facebook.png';
import bg1 from '../asset/logo/whatsapp.png';
import bg2 from '../asset/logo/instagram.png';
import bg3 from '../asset/logo/youtube.png';

function Foot() {
  return (
    <div className='Foot main-footer'>
      <div className='container py-5'>
        <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
            <h4>Artikel Terkait</h4>
            <hr />
            <h1 className='list-unstyled'></h1>
            <p>reader will be distracted by the readable content of a page when ...</p>
            <p>Various versions have evolved over the years, sometimes by accide...</p>
            <p>necessitatibus saepe eveniet ut et voluptates repudiandae sint et...</p>
            <p>f classical Latin literature from 45 BC, making it over 2000 yea...</p>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
            <h4>Berita Terkait</h4>
            <hr />
            <h1 className='list-unstyled'></h1>
            <p>reader will be distracted by the readable content of a page when ...</p>
            <p>Various versions have evolved over the years, sometimes by accide...</p>
            <p>necessitatibus saepe eveniet ut et voluptates repudiandae sint et...</p>
            <p>f classical Latin literature from 45 BC, making it over 2000 yea...</p>
          </div>
          <div className='col-lg-4 col-md-6-text-center col-sm-12 mt-3'>
            <h4>
            Hubungi Kami :
            </h4>
            <hr />
            <p>
              <img src={bg}
              width={40}></img>&nbsp;
              Facebook Kami
            </p>
            <p>
              <img src={bg1}
              width={40}></img>&nbsp;
              Whatsapp kami
            </p>
            <p>
              <img src={bg2}
              width={40}></img>&nbsp;
              Instagram Kami
            </p>
            <p>
              <img src={bg3}
              width={40}></img>&nbsp;
              Youtube Kami
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
      <hr />
          <div className='row'>
            <p className='col text-center py-5'>
              &copy;{new Date().getFullYear()} Bagian Organisasi Tulang Bawang.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Foot;