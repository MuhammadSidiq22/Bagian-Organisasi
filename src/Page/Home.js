import Navigasi from '../Component/Navbar';
import Caurosel from '../Component/Carousel';
import Berita from '../Component/Berita';
import Artikel from '../Component/Artikel';
import Profil from '../Component/Profil';
import Vidio from '../Component/Vidio';
import Foto from '../Component/Foto';
import Footer from '../Component/Footer';
import React from "react";


const Home = () => {
  return (
    <>
      <div>
          <div>
                <Navigasi />
          </div>
          <br></br>
          <div className='mt-5'>
                <Caurosel />
          </div>
          <div>
                <Berita />
          </div>
          <div>
                <Artikel />
          </div>
          <div>
                <Profil />
          </div>
          <div className='mb-5'>
                <Foto />
          </div>
          <div className='mb-5'>
                <Vidio />
          </div>
        </div>
        <Footer />
    </>
  );
};

export default Home;