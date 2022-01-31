import '../../styles/products.scss';

const ProductSection = (props) => {
  const product = props.product;
  return (
    <div className='d-flex flex-md-no-wrap product my-4'>
      <div
        className='prod-img'
        // style={{ backgroundImage: `url(${product.img})` }}
      >
        <img
          src={product.src}
          srcSet={product.srcset}
          className='img-fluid rounded'
          alt='Products'
        />
      </div>
      <div className='yellow-square2'></div>

      <div className='prod-details text-primary ms-4 d-flex flex-column justify-content-between'>
        <div className='prod-det'>
          <h1 className='title-shadow-cyan product-name'>{product.name}</h1>
          {product.caffeine && (
            <h3 className='card-text text-primary caffeine text-uppercase title-shadow-cyan'>
              <span>Contains caffeine</span>
            </h3>
          )}
          <p className='mb-4 product-description'>{product.description}</p>
        </div>
        <div className='price-add'>
          <h3 className='card-text text-primary caffeine text-uppercase product-price'>
            <span>${product.price}</span>
          </h3>
          <button
            className='btn btn-info text-uppercase text-light rounded-pill mb-3 add-to-cart-btn'
            onClick={() => props.handleAddToCart()}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
