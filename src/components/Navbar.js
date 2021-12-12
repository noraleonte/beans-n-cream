import { HiOutlineShoppingCart, HiMenu } from 'react-icons/hi';
import paths from '../constants/paths.js';

import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <nav className='navbar mx-5'>
      <Link to={paths.HOME}>
        <div className='logo navbar-brand text-light'>Beans 'n Cream</div>
      </Link>
      <div>
        <ul className={`nav justify-content-end ${props.navText} fw-bold`}>
          <Link to={paths.ABOUT}>
            <li className={`nav-item about-us ms-2 ${props.navText}`}>
              About Us
            </li>
          </Link>

          <li className='nav-item cart ms-2'>
            Cart <HiOutlineShoppingCart />{' '}
            <span className='badge bg-danger'>{props.counter}</span>
          </li>
          {/* <li className='nav-item menu ms-2'>
            Menu <HiMenu />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
