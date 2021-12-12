import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import products from './constants/products';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Product from './components/Product';

import paths from './constants/paths.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [counter, setCounter] = useState(0);
  const [navText, setNavText] = useState('text-primary');

  const handleAddToCart = () => {
    setCounter(counter + 1);
  };
  const handleChangeNavText = (textColor) => {
    setNavText(textColor);
  };
  return (
    <Router>
      <div className='App'>
        <Navbar counter={counter} navText={navText} />
        <div className='content'>
          <Switch>
            <Route exact path={paths.HOME}>
              <Home
                products={products}
                handleAddToCart={handleAddToCart}
                handleChangeNavText={handleChangeNavText}
              />
            </Route>
            <Route path={paths.ABOUT}>
              <AboutUs handleChangeNavText={handleChangeNavText} />
            </Route>
            <Route path={`${paths.PRODUCT}/:id`}>
              <Product
                products={products}
                handleAddToCart={handleAddToCart}
                handleChangeNavText={handleChangeNavText}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
