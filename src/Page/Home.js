import Navigasi from '../Component/Navbar';
import Banner from '../Component/Banner';
import Berita from '../Component/Berita';
import SidebarBerita from '../Side/SidebarBerita';
import SidebarArtikel from '../Side/SidebarArtikel';
import Artikel from '../Component/Artikel';
import Profil from '../Component/Profil';
import Vidio from '../Component/Vidio';
import Foto from '../Component/Foto';
import Footer from '../Component/Footer';
import '../css/Style.css';
import React from "react";


const Home = () => {
  return (
    <>
            <div className='mb-5'>
                  <Navigasi />
            </div>
            <div className='py-5'>
                  <Banner />
            </div>
    <div className='container-fluid'>
            <div className='bg row py-5 mt-5'>
                  <div className='col-lg-8 col-md-12 py-5'>
                        <Berita />
                  </div>
                  <div className='col-lg-4 col-md-12 py-5'>
                        <SidebarBerita />
                  </div>
            </div>
            <div className='bg1 row py-5 mt-5'>
                  <div className='col-lg-8 col-md-12 py-5'>
                        <Artikel />
                  </div>
                  <div className='col-lg-4 col-md-12 py-5'>
                        <SidebarArtikel />
                  </div>
            </div>
            <div className='bg'>
                <Profil />
            </div>
            <div className='bg1'>
                <Foto />
            </div>
            <div className='bg'>
                <Vidio />
             </div>
   
    </div>
                <Footer />
    </>
  );
};

export default Home;