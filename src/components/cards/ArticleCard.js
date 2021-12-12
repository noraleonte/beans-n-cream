import { Link } from 'react-router-dom';
import about1 from '../../assets/about-us-1.jpg';
const ArticleCard = (props) => {
  return (
    <div
      className={`card mb-3 ${props.background} text-light p-0 `}
      style={{ width: 100 + '%' }}>
      <div className='row g-0' style={{ height: 100 + '%' }}>
        <div className='col-md-5'>
          <img src={about1} className='img-fluid rounded' alt='about us' />
        </div>
        <div
          className={`col-md-7 ${
            props.textColor ? props.textColor : `text-dark`
          } text-center `}>
          <div
            className='card-body px-4 d-flex flex-column justify-content-center align-items-center'
            style={{ height: 100 + '%' }}>
            {props.content && (
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3
                  className={`card-title ${
                    props.textColor ? props.textColor : `text-dark`
                  } ${
                    props.textShadow ? props.textShadow : `title-shadow-light`
                  }`}>
                  {props.content.title}
                </h3>
                <hr className='separator text-light mt-1' />
                <h5 className='fw-bold'>{props.content.subtitle}</h5>
                <p className='card-text'>{props.content.text}</p>
              </div>
            )}

            {props.button && (
              <Link to={props.button.path} className='align-self-end my-1'>
                <button
                  className={`btn ${props.button.class} text-uppercase text-light rounded-pill `}>
                  {props.button.text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
