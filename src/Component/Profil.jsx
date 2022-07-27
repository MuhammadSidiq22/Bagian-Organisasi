import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';

function Poto() {
  return (
    <div className='container-fluid py-10 text-center'>
      <div className='container'>
        <div className='container'>
                <Figure>
                <Figure.Image
                    width={191}
                    height={200}
                    alt="191x200"
                    src="https://mipa.unnes.ac.id/ssc/wp-content/uploads/2017/02/PngItem_4196791-1063x1080.png"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
                </Figure>
          </div>
      </div>
    </div>
  );
}

export default Poto;