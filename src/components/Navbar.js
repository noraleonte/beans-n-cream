import { HiOutlineShoppingCart, HiMenu } from 'react-icons/hi';

import '../styles/test.css';
const Navbar = () => {
  return (
    <nav className='navbar sticky-top text-light'>
      <div className='logo navbar-brand'>Beans 'n Cream</div>
      <div>
        <ul className='nav justify-content-end text-primary fw-bold'>
          <li className='nav-item about-us ms-2'>About Us</li>
          <li className='nav-item cart ms-2'>
            Cart <HiOutlineShoppingCart />
          </li>
          <li className='nav-item menu ms-2'>
            Menu <HiMenu />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
