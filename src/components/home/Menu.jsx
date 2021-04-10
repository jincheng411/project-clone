import React, {useState, useEffect} from 'react';
import menu from '../../menu';
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
      {products.map((item) => <Product key={item.name} name={item.name} imgUrl={item.url} />)}
    </div>
  );
}

export default Menu;
