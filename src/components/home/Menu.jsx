import React, {useState, useEffect} from 'react';
import Product from './Product.jsx';
import axios from 'axios';
import './Menu.css';

function Menu() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setProducts])

  return (
    <div className="menu-list">
      <span id="order"></span>
      {console.log(products)}
      {products.map((item) => <Product key={item._id} name={item.name} imgUrl={item.url} />)}
    </div>
  );
}

export default Menu;
