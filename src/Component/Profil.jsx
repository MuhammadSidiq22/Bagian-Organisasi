import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';
import '../css/Style.css';

function Poto() {
  return (
    <div className='container-fluid text-center mt-5'>
      <div className='cardprof container mt-5'>
        <div className='container sub'>
          <p> Kepala Bagian Organisasi</p>
                <Figure>
                <Figure.Image
                    width={191}
                    height={200}
                    alt="191x200"
                    src="https://mipa.unnes.ac.id/ssc/wp-content/uploads/2017/02/PngItem_4196791-1063x1080.png"
                />
                <Figure.Caption>
                    
                </Figure.Caption>
                </Figure>
          </div>
      </div>
    </div>
  );
}

export default Poto;