import Navigasi from './Component/Navbar';
import Caurosel from './Component/Carousel';
import Berita from './Component/Berita';
import Artikel from './Component/Artikel';
import Galeri from './Component/Galeri';
import Footer from './Component/Footer';
import Poto from './Component/Profil';
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
                <Poto />
          </div>
          <div>
                <Galeri />
          </div>
        </div>
        <Footer />
    </>
  );
};

export default Home;