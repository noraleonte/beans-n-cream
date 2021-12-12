import coffee from '../../assets/coffee.png';
import '../../styles/home.scss';
const Hero = () => {
  return (
    <div className='hero d-flex align-itmes-center'>
      <div className='left d-flex flex-column justify-content-center'>
        <h2 className='text-light'>The world's best flavours in one place</h2>
        <button className='btn btn-info text-primary rounded-pill'>
          Read more about us
        </button>
      </div>
      <img src={coffee} alt='coffee' className='coffee-img' />
      <div className='yellow-square'></div>
    </div>
  );
};

export default Hero;
