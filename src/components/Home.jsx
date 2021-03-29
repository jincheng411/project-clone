import React from 'react';
import Menu from './home/Menu.jsx';
import Banner from './home/Banner.jsx';
import PromoBar from './home/PromoBar.jsx';
import PromoCard from './home/PromoCard.jsx';
import Footer from './home/Footer.jsx';

function Home() {
  return (
    <div>
      <Banner />
      <PromoBar />
      <Menu />
      <div className="promo-cards">
        <PromoCard title="REAL FOOD IS REALLY EASY" description="Customize, pay and skip the line with contactless pickup. Just grab your sealed Chipotle order from the shelf and go." url="https://www.chipotle.com/content/dam/poc/order/images/secondary-promo-banners/evergreen-pickup/Contactless-Pickup-Secondary-Tout-Desktop-@2x.gif" />
        <PromoCard title="FIND YOUR PLANT POWER" description="Try our New Fajita Veggie Quesadilla (only available online) or enjoy your fave Veggie and Sofritas entrées with Cilantro-Lime Cauliflower Rice. Pro tip: Guac isn’t extra when you go veggie." url="https://www.chipotle.com/content/dam/poc/order/images/secondary-promo-banners/pb/Tout_Desktop-image@2x.jpg" />

      </div>
      <Footer />
    </div>
  );
}

export default Home;
