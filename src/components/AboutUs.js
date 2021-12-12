import heroImage from '../assets/heroImage.jpg';
import about from '../assets/about-us-1.jpg';

import '../styles/about.scss';
import ArticleCard from './cards/ArticleCard';

const AboutUs = (props) => {
  const content = {
    title: 'About Us',
    subtitle: 'Our secret is pouring love into each cup we serve',
    text: 'We all share the love for a good cup of coffee and a good story. At Beans n Cream you can find both. Be a part of our story. Visit us today!',
  };
  props.handleChangeNavText('text-light');
  return (
    <div className='mx-5'>
      <div
        id='carouselExampleSlidesOnly'
        className='carousel slide'
        data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={heroImage} className='d-block w-100' alt='heroImage' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      {/* <div
        className='hero-img'
        style={{ backgroundImage: `url(${heroImage})` }}></div> */}
      <h1 className='title-shadow-cyan'>About us</h1>
      <p className='about-subtitle text-info text-uppercase'>
        We believe that coffee is more than just a drink. It is an art, it is a
        science and it has its secrets. But most importantly coffee represents
        small moments of pleasure in one's life. We want to share those happy
        moment with our clients.
      </p>
      <p className='text-light fw-light'>
        Beans 'n Cream is more than just a coffee shop. It is the place where
        you come to be part of the coffee story, a story that starts from the
        man who takes care of the plant with the precious beans full of flavor
        and ends with the roasting process that releases your favorite flavors.
      </p>
      <p className='text-light fw-light'>
        We will happily share that story with you, and every cup we pour is
        filled with love and passion.
      </p>
      <div className='bg-secondary text-primary p-3 text-center rounded my-2'>
        <p className='m-0'>
          The beans we roast come straight from Africa, and every drink is
          prepared from a signature blend.
        </p>
      </div>
      <p className='text-light fw-light'>
        Our focus is on quality, and on our client's happiness. That is why we
        believe that we serve the world's best coffee. But we do offer goodies
        for those who haven't fallen in love with coffee...yet. Come and be a
        part of our story.
      </p>
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
};

export default AboutUs;
