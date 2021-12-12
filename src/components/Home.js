import Hero from './home/Hero';
import Products from './home/Products';
import ArticleCard from './cards/ArticleCard';

import paths from '../constants/paths.js';

const Home = (props) => {
  props.handleChangeNavText('text-primary');

  const button = {
    class: 'btn-info',
    text: 'Read more',
    path: paths.ABOUT,
  };
  const content = {
    title: 'About Us',
    subtitle: 'Our secret is pouring love into each cup we serve',
    text: 'We all share the love for a good cup of coffee and a good story. At Beans n Cream you can find both. Be a part of our story. Visit us today!',
  };
  return (
    <div className='px-5'>
      <Hero />
      <Products
        products={props.products}
        handleAddToCart={props.handleAddToCart}
      />
      <div className='d-flex justify-content-center'>
        <hr className='separator text-secondary  mt-1' />
      </div>
      <ArticleCard
        button={button}
        content={content}
        background={'bg-secondary'}
        textShadow={'title-shadow-light'}
      />
    </div>
  );
};

export default Home;
