import { Link } from 'react-router-dom';

import paths from '../../constants/paths.js';

const ProductCard = (props) => {
  const product = props.product;
  return (
    <div
      className='card mb-3 me-1 bg-dark text-light col-md-12 col-lg-6 col-xl-4 p-0'
      style={{ maxWidth: 550 + 'px' }}>
      <div className='row g-0' style={{ height: 100 + '%' }}>
        <div className='col-md-5'>
          <img
            src={product.src}
            srcSet={product.srcset}
            className='img-fluid rounded'
            alt='Products'
            loading='lazy'
          />
        </div>
        <div className='col-md-7'>
          <div className='card-body'>
            <Link to={`${paths.PRODUCT}/${product.id}`}>
              <h3 className='card-title text-secondary'>{product.name}</h3>{' '}
            </Link>
            {product.caffeine && (
              <p className='card-text text-info caffeine text-uppercase'>
                <span>Contains caffeine</span>
              </p>
            )}

            <p className='card-text'>
              <span className='fw-bold price'>Price: </span>{' '}
              <span>${product.price}</span>
            </p>
            <button
              className='btn btn-danger text-uppercase text-light rounded-pill'
              onClick={(e) => {
                e.preventDefault();
                props.handleAddToCart();
              }}>
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
