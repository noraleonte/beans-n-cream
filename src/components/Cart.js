import { Button, Dropdown } from 'react-bootstrap';

const Cart = (props) => {
  if (props.cart.items.length) {
    return (
      <div>
        {props.cart.items.map((product) => (
          <Dropdown.Item href='#' key={product.id} className='px-0'>
            {product.name}
          </Dropdown.Item>
        ))}
        <div className='w-100 d-flex justify-content-between align-items-center'>
          <div>TOTAL: {props.cart.value}</div>
          <Button variant='secondary' className='pill'>
            Go to checkout
          </Button>
        </div>
      </div>
    );
  }
  return <div>You have nothing in your cart</div>;
};

export default Cart;
