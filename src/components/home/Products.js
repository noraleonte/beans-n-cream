import { useState, useEffect } from 'react';

import '../../styles/products.scss';
import ProductCard from '../cards/ProductCard.js';

const Products = (props) => {
  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'other', name: 'Other Beverages' },
    { id: 'snacks', name: 'Snacks' },
  ];
  const [category, setCategory] = useState('coffee');
  const [products, setProducts] = useState(props.products);
  const handleSelectCategory = (selected) => {
    setCategory(selected);
  };

  const filterProducts = () => {
    return props.products.filter((product) => product.category === category);
  };
  useEffect(() => {
    setProducts(filterProducts());
  }, [category]);

  return (
    <div className='d-flex flex-column align-items-center p-0 m-0'>
      <h3 className='text-light text-center title-shadow-cyan'>
        Popular products
      </h3>
      <hr className='separator text-secondary mt-1' />
      <ul className='nav text-light mb-3 product-list'>
        {categories.map((cat) => (
          <li
            className='nav-item mx-2'
            key={cat.id}
            onClick={() => handleSelectCategory(cat.id)}>
            {cat.name}
          </li>
        ))}
      </ul>
      <div className='row justify-content-center m-0'>
        {products.map((product) => (
          <ProductCard
            product={product}
            handleAddToCart={props.handleAddToCart}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
