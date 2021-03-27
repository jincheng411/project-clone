import React from 'react';
import Order from './components/Order.jsx';
import Banner from './components/Banner.jsx';
import Navbar from './components/Navbar.jsx';
import PromoBar from './components/PromoBar.jsx';
import PromoCard from './components/PromoCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <PromoBar />
      <Order />
      <div className="promo-cards">
        <PromoCard title="REAL FOOD IS REALLY EASY" description="Customize, pay and skip the line with contactless pickup. Just grab your sealed Chipotle order from the shelf and go." url="https://www.chipotle.com/content/dam/poc/order/images/secondary-promo-banners/evergreen-pickup/Contactless-Pickup-Secondary-Tout-Desktop-@2x.gif" />
        <PromoCard title="FIND YOUR PLANT POWER" description="Try our New Fajita Veggie Quesadilla (only available online) or enjoy your fave Veggie and Sofritas entrées with Cilantro-Lime Cauliflower Rice. Pro tip: Guac isn’t extra when you go veggie." url="https://www.chipotle.com/content/dam/poc/order/images/secondary-promo-banners/pb/Tout_Desktop-image@2x.jpg" />

      </div>
      <Footer />
    </div>
  );
}

export default App;
