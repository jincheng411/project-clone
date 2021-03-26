import React from 'react';
import Order from './components/Order.jsx';
import Banner from './components/Banner.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Order />
    </div>
  );
}

export default App;
