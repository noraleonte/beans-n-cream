import products from '../constants/products';

export const filterProducts = (atr, value) => {
  return products.filter((product) => product[atr] === value);
};

export const calculateValue = (cart) => {
  let value = cart.value;
  cart.items.forEach((item) => (value += item.price));
  return value;
};
