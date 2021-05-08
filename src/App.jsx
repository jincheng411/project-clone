import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Order from './components/Order.jsx';
import axios from 'axios';

function App() {
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
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/order">
            <Order products={products}/>
          </Route>
          <Route path="/">
            <Home products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
