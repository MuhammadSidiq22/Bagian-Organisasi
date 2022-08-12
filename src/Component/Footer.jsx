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
        <div className=' col-lg-6 col-sm-12 mt-3'>
            <h4>Tentang Kami</h4>
            <hr />
            <h1 className='list-unstyled'></h1>
            <p>Alamat Instansi</p>
            <p>Jl. Yang Benar Dan Lurus</p>
            <p>Kabupaten Kali</p>
            <p>Provinsi Lampung</p>
          </div>
          <div className='col-lg-6 col-sm-12 mt-3'>
            <h4>
            Hubungi Kami :
            </h4>
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
            <p className='col text-center py-5'>
              &copy;{new Date().getFullYear()} Bagian Organisasi Tulang Bawang.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Foot;