import coffee from '../../assets/coffee.png';
const NoProduct = () => {
  return (
    <div
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ minHeight: 80 + 'vh' }}>
      <img
        src={coffee}
        class='rounded mx-auto d-block'
        alt='coffee'
        style={{ height: 200 + 'px' }}
      />
      <h4 className='text-light'>No product found</h4>
    </div>
  );
};

export default NoProduct;
