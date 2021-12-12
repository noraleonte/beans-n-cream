import products from '../assets/products.jpg';
import prod1 from '../assets/prod1.jpg';
import prod2 from '../assets/prod2.jpg';
import prod3 from '../assets/prod3.jpg';
import prod4 from '../assets/prod4.jpg';
import prod5 from '../assets/prod5.jpg';
import tea1 from '../assets/tea1.jpg';
import tea2 from '../assets/tea2.jpg';
import tea3 from '../assets/tea3.jpg';
import tea4 from '../assets/tea4.jpg';
import shake1 from '../assets/shake1.jpg';
import shake2 from '../assets/shake2.jpg';
import choc1 from '../assets/choc1.jpg';
import choc2 from '../assets/choc2.jpg';
import cookie from '../assets/cookie.jpg';
import ginger from '../assets/ginger.jpg';

export default [
  {
    id: 'p_7sz1qavdpzv',
    name: 'ESPRESSO AMERICANO',
    category: 'coffee',
    caffeine: true,
    description:
      'Espresso with hot water added (100–150 ml). Often served in a cappuccino cup. (Espresso is added to hot water, rather than all the water flowing through the coffee, which would lead to over-extraction.)',
    price: 34,
    img: products,
  },
  {
    id: 'p_hyiivotb1vf',
    name: 'CAFFÈ LATTE',
    category: 'coffee',
    caffeine: true,
    description:
      'A tall, mild milk coffee (about 150-300 ml). An espresso with steamed milk and only a little milk foam poured over it. Serve in a latte glass or a coffee cup. Flavoured syrup can be added. ',
    price: 47,
    img: prod1,
  },
  {
    id: 'p_e9x4ecjhplr',
    name: 'DOUBLE ESPRESSO (DOPPIO)',
    category: 'coffee',
    caffeine: true,
    description: 'Double portion of espresso in a cappuccino/espresso cup.',
    price: 43,
    img: prod3,
  },
  {
    id: 'p_ex90ylyssse',
    name: 'CAFFÈ MOCHA',
    category: 'coffee',
    caffeine: true,
    price: 30,
    description:
      'A caffè latte with chocolate and whipped cream, made by pouring about 2 cl of chocolate sauce into the glass, followed by an espresso shot and steamed milk. ',
    img: prod4,
  },
  {
    id: 'p_ngrhoro76s',
    name: 'CAFÈ AU LAIT',
    category: 'coffee',
    caffeine: true,
    price: 51,
    img: prod2,
    description:
      'French morning coffee. Made by mixing dark roasted filter coffee (often prepared with French Press) and warm milk. Served in a bowl or a large coffee cup.',
  },
  {
    id: 'p_ygix0u31xa',
    name: 'COLD BREW COFFEE',
    price: 17,
    category: 'coffee',
    caffeine: false,
    img: prod5,
    description:
      'Cold Brew Coffee is a smooth, cold beverage prepared by brewing freshly ground coffee in cold water. In the Cold Brew process, time makes up for heat.',
  },
  {
    id: 'p_dq11du0f1vm',
    name: 'FREAKSHAKE',
    price: 45,
    category: 'other',
    caffeine: true,
    img: shake1,
  },
  {
    id: 'p_l4n1pe6748e',
    name: 'Green tea with lemon',
    price: 25,
    category: 'tea',
    caffeine: true,
    img: tea1,
  },
  {
    id: 'p_my33ptpd9wn',
    name: 'Rooibos',
    price: 30,
    category: 'tea',
    caffeine: true,
    img: tea2,
  },
  {
    id: 'p_qpwtnd6kecj',
    name: 'chamomile and green tea',
    price: 13,
    category: 'tea',
    caffeine: true,
    img: tea4,
  },
  {
    id: 'p_r290kpnxpw',
    name: 'Mango Ice tea',
    price: 39,
    category: 'tea',
    caffeine: false,
    img: tea3,
  },
  {
    id: 'p_up4b17ltq4n',
    name: 'Hazelnut Hot Chocolate',
    price: 35,
    category: 'other',
    caffeine: false,
    img: choc1,
  },
  {
    id: 'p_gmmumlh3fc',
    name: 'White hot chocolate',
    price: 34,
    category: 'other',
    caffeine: false,
    img: choc2,
  },
  {
    id: 'p_akynqzwel76',
    name: 'Strawberry milkshake',
    price: 42,
    category: 'other',
    caffeine: false,
    img: shake2,
  },
  {
    id: 'p_vmn25gur3zr',
    name: 'Chocolate chip cookies',
    price: 28,
    category: 'snacks',
    img: cookie,
  },
  {
    id: 'p_7aie6l5u1ii',
    name: 'Gingerbread man',
    price: 47,
    category: 'snacks',

    img: ginger,
  },
];
