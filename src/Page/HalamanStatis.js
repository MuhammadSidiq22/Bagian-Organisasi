import Navigasi from '../Component/Navbar';
import Footer from '../Component/Footer';
import Halamanstatis from '../Component/HalamanStatis';
import React from "react";


const HalamanStatis = () => {
  return (
    <>
      <div>
          <div>
            <Navigasi />
          </div>
          <div>
             <Halamanstatis/>   
          </div>
      </div>
            <Footer />
    </>
  );
};

export default HalamanStatis;