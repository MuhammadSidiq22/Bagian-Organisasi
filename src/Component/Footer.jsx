import React from 'react'
import '../css/Footer.css';
import bg from '../asset/logo/facebook.png';
import bg1 from '../asset/logo/whatsapp.png';
import bg2 from '../asset/logo/instagram.png';
import bg3 from '../asset/logo/youtube.png';

function Foot() {
  return (
    <div className='Foot font-foot main-footer'>
      <div className='container py-2'>
        <div className='row'>
        <div className=' col-lg-6 col-sm-12 mt-3'>
            <h4>Tentang Kami</h4>
            <hr />
            <h1 className='list-unstyled'></h1>
            <p>
              Bagian Organisasi merupakan kantor dinas yang bekerja untuk perizinan, pengawasan, hingga pengembangan seluruh organisasi yang ada di kabupaten Tulang Bawang
            </p>
          </div>
          <div className='col-lg-6 col-sm-12 mt-3'>
            <h5>
            Hubungi Kami :
            </h5>
            <hr />
            <p >
              <a 
              className='font-foot' 
              href=''
              >
                <img 
                src={bg}
                width={40}>
                </img>&nbsp;
                Facebook Kami
              </a>
            </p>
            <p>
              <a
              className='font-foot'
              href=''
              >
                <img 
                src={bg1}
                width={40}>
                </img>&nbsp;
                Whatsapp kami
              </a>
            </p>
            <p>
              <a
              className='font-foot'
              href=''
              >
                <img 
                src={bg2}
                width={40}>
                </img>&nbsp;
                Instagram Kami
              </a>
            </p>
            <p>
              <a
              className='font-foot'
              href=''
              >
                <img 
                src={bg3}
                width={40}>
                </img>&nbsp;
                Youtube Kami
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
      <hr />
          <div className='row'>
            <p className='col text-center py-1'>
              &copy;{new Date().getFullYear()} Bagian Organisasi Tulang Bawang.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Foot;