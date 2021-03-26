import React from 'react';
import Order from './components/Order.jsx';
import Banner from './components/Banner.jsx';
import Navbar from './components/Navbar.jsx';
import PromoBar from './components/PromoBar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <PromoBar />
      <Order />
    </div>
  );
}

export default App;
