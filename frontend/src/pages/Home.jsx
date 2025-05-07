import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import Reviews from '../components/Reviews';
import Offers from '../components/Offers';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Categories />
      <Reviews />
      <Offers />
    </div>
  );
}

export default Home;