import products from '../../assets/products.jpg';

const Products = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h3 className='text-light text-center title-shadow-cyan'>
        Popular products
      </h3>
      <hr className='separator text-secondary mt-1' />
      <div
        className='card mb-3 bg-dark text-light'
        style={{ maxWidth: 540 + 'px' }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={products} className='img-fluid rounded' alt='Products' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h3 className='card-title text-secondary'>Speciality Latte</h3>
              <p className='card-text'>
                <span className='fw-bold'>Caffeine: </span> <span>yes</span>
              </p>
              <p className='card-text'>
                <span className='fw-bold price'>Price: </span> <span>$5</span>
              </p>
              <button className='btn btn-danger text-uppercase text-light rounded-pill'>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
