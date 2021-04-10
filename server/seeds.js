const mongoose = require('mongoose');
const Product = require('./models/product.js');

mongoose.connect('mongodb://localhost:27017/cloneProject', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongodb seeds file connected');
  })
  .catch((err) => {
    console.log('mongodb seeds file error: ' + err);
  });

const seedProducts = [
  {
    name: 'burrito',
    url: '/image/burrito.png',
    description: 'Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.',
  },
  {
    name: 'burrito bowl',
    url: '/image/bowl.jpeg',
    description: 'Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.',
  },
  {
    name: 'lifestyle bowl',
    url: '/image/lifestyle.png',
  },
  {
    name: 'quesadilla',
    url: '/image/quesadilla.jpeg',
  },
  {
    name: 'salad',
    url: '/image/salad.jpeg',
    description: 'Your choice of meat or sofritas served with our fresh supergreens lettuce blend made of Romaine, Baby Kale, and Baby Spinach. Add beans, queso blanco, salsa, guacamole, sour cream or cheese and top it off with our signature Chipotle-Honey Vinaigrette.',
  },
  {
    name: 'tacos',
    url: '/image/tacos.jpeg',
    description: 'Your choice of freshly grilled meat or sofritas served in a soft or hard-shell tortilla with guac, salsa, queso blanco, sour cream or cheese, and topped with hand-cut romaine lettuce.',
  },
  {
    name: 'chips & drinks',
    url: '/image/chips-quac.jpeg',
    description: 'Everything else you need to round out your meal.',
  },
  {
    name: 'kids meal',
    url: '/image/kidsmeal.jpeg',
    description: 'Your choice of meat, guacamole or queso, and two toppings to go with a pair of crispy corn or soft flour tortillas. Includes fruit or kid\'s chips and organic juice or milk.',
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })

const seedSections = [
  {
    name: 'protein or veggie',
    note: 'Choose up to two.',
    items: [],
  },
  {
    name: 'rice',
    items: [],
  },
  {
    name: 'beans',
    items: [],
  },
  {
    name: 'topping',
    items: [],
  },
  {
    name: 'options',
    items: [],
  },
  {
    name: 'side',
    items: [],
  },
  {
    name: 'drinks',
    items: [],
  },

]
