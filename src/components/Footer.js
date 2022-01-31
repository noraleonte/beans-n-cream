import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer
      className='bg-dark text-light d-flex align-items-center px-5'
      style={{ minHeight: 100 + 'px' }}>
      <div className='w-50'>
        <p style={{ fontFamily: 'Bungee Inline' }}>Beans 'n Cream</p>
      </div>
      <div className='w-50 d-flex align-items-center justify-content-between flex-wrap'>
        <a href='https://www.facebook.com/' target='_blank'>
          <div className='d-flex  align-items-center text-light'>
            <FaFacebook />
            <span className='ms-1'>Facebook</span>
          </div>
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
          <div className='d-flex  align-items-center text-light'>
            <FaInstagram />
            <span className='ms-1'>Instagram</span>
          </div>
        </a>
        <a href='https://www.twitter.com/' target='_blank'>
          <div className='d-flex  align-items-center text-light'>
            <FaTwitter />
            <span className='ms-1'>Twitter</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
