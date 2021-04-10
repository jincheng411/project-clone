const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Product = require('./models/product.js');
const port = 4000;

mongoose.connect('mongodb://localhost:27017/cloneProject', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((err) => {
    console.log('mongodb err: ' + err);
  })

app.use('/', express.static(path.join(__dirname, '../build')));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/products', async (req, res) => {
  const products = await Product.find();

  res.json(products);
})

app.listen(port, () => {
  console.log('Listening on port: ' + port);
})