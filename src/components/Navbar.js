import { HiOutlineShoppingCart, HiMenu } from 'react-icons/hi';
import paths from '../constants/paths.js';
import { Button, Dropdown } from 'react-bootstrap';

import Cart from './Cart.js';

import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <nav className='navbar px-5'>
      <Link to={paths.HOME}>
        <div className='logo navbar-brand text-light'>Beans 'n Cream</div>
      </Link>
      <div>
        <ul
          className={`nav justify-content-end ${props.navText} fw-bold d-flex align-items-center`}>
          <Link to={paths.ABOUT}>
            <li className={`nav-item about-us ms-2 ${props.navText}`}>
              About Us
            </li>
          </Link>

          <li className='nav-item cart ms-2'>
            <Dropdown>
              <Dropdown.Toggle variant='info' id='cart-dropdown'>
                Cart <HiOutlineShoppingCart />{' '}
                <span className='badge bg-danger'>{props.counter}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='cart-menu px-3' align='end'>
                <Cart cart={props.cart}></Cart>
              </Dropdown.Menu>
            </Dropdown>
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
