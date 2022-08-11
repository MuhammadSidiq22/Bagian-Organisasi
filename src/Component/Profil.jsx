import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Profil.css';
import '../css/Style.css';

function Profil() {
  return (
    <div className='bg container-fluid text-center mt-5'>
      <div className='container'>
        <div className="row">
          <div className='font-judul'>
            Struktur
          </div>
          <div className="font-isi p col-lg-6 mt-5">
            <img className='img-profil' src='https://mipa.unnes.ac.id/ssc/wp-content/uploads/2017/02/PngItem_4196791-1063x1080.png'/>
            <h4 className='cont'></h4>
            <p>Ketua</p>
          </div>
          <br></br>
          <div className="font-isi p col-lg-6 mt-5">
            <img className='img-profil' src='https://mipa.unnes.ac.id/ssc/wp-content/uploads/2017/02/PngItem_4196791-1063x1080.png'/>
            <h4 className='cont'></h4>
            <p>Wakil</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;