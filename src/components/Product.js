import { useParams } from 'react-router-dom';
import '../styles/products.scss';
import ArticleCard from './cards/ArticleCard';
import ProductCard from './cards/ProductCard';
import NoProduct from './product/NoProduct';
import ProductSection from './product/ProductSection';

const Product = (props) => {
  const { id } = useParams();
  const product = props.products.find((product) => product.id === id);
  const popular = props.products.slice(0, 2);
  const content = {
    title: 'About Us',
    subtitle: 'Our secret is pouring love into each cup we serve',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus morbi eget malesuada cum quis amet, cras aliquam. Egestas scelerisque dignissim ac duis vel nulla. Purus scelerisque sed amet hendrerit. Tristique placerat pellentesque donec curabitur ut lacus.',
  };
  if (product) {
    props.handleChangeNavText('text-primary');

    return (
      <div className='mx-5'>
        <div>
          <ProductSection
            product={product}
            handleAddToCart={props.handleAddToCart}
          />
        </div>
        <div className='d-flex flex-column align-items-center'>
          <h3 className='text-light text-center title-shadow-cyan'>
            Popular products
          </h3>
          <hr className='separator text-secondary mt-1' />
        </div>

        <div className='row justify-content-center m-0'>
          {popular.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              handleAddToCart={props.handleAddToCart}
            />
          ))}
        </div>
        <div className='d-flex flex-column align-items-center'>
          <hr className='separator text-secondary mt-1' />
        </div>
        <div>
          <ArticleCard
            content={content}
            background={'bg-dark'}
            textShadow={'title-shadow-cyan'}
            textColor={'text-light'}
          />
        </div>
      </div>
    );
  } else {
    props.handleChangeNavText('text-light');

    return (
      <div>
        <NoProduct />
      </div>
    );
  }
};

export default Product;
