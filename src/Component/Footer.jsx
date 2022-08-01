import React from 'react'
import '../css/Style.css';

function Foot() {
  return (
    <div className='Foot main-footer mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>
              <img src=''></img>
            </h4>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos autem in cumque dignissimos tempore ea voluptate quis doloribus pariatur laborum?
            </p>
            <p>
              Hubungi Kami :
            </p>
            <p>
              <img src='https://spng.pngfind.com/pngs/s/681-6813052_facebook-and-instagram-icon-png-transparent-png.png'
              width={80}></img>
            </p>
          </div>
          <div className='col'>
            <h4>Berita Terkait</h4>
            <h1 className='list-unstyled'></h1>
            <p>reader will be distracted by the readable content of a page when ...</p>
            <p>Various versions have evolved over the years, sometimes by accide...</p>
            <p>necessitatibus saepe eveniet ut et voluptates repudiandae sint et...</p>
            <p>f classical Latin literature from 45 BC, making it over 2000 yea...</p>
          </div>
          <div className='col'>
            <h4>Artikel Terkait</h4>
            <h1 className='list-unstyled'></h1>
            <p>reader will be distracted by the readable content of a page when ...</p>
            <p>Various versions have evolved over the years, sometimes by accide...</p>
            <p>necessitatibus saepe eveniet ut et voluptates repudiandae sint et...</p>
            <p>f classical Latin literature from 45 BC, making it over 2000 yea...</p>
          </div>
        </div>
      </div>
      <div className='container'>
          <div className='row'>
            <p className='col-sm text center'>
              &copy;{new Date().getFullYear}Bagian Organisasi Tulang Bawang.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Foot;