import { Link } from 'react-router-dom';
import coffee from '../../assets/coffee.png';
import '../../styles/home.scss';
import paths from '../../constants/paths.js';
const Hero = () => {
  return (
    <div className='hero d-flex align-itmes-center'>
      <div className='row'>
        <div className='left col col-md-6 col-sm-12 d-flex flex-column justify-content-center'>
          <h2 className='text-light'>The world's best flavours in one place</h2>
          <button className='btn btn-info text-primary rounded-pill'>
            <Link to={paths.ABOUT}>Read more about us</Link>
          </button>
        </div>

        <div className='right col-md-6  col-sm-0 d-flex flex-column justify-content-center'>
          <img src={coffee} alt='coffee' className='coffee-img' />
        </div>
      </div>
      <div className='yellow-square'></div>
    </div>
  );
};

export default Hero;
