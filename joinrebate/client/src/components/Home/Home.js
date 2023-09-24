import React from 'react';
import Header from './Header';


import TopHeader from './TopHeader';
import MainHeader from './MainHeader';
import Hero from './Hero';
import MainPageCategory from './MainPageCategory';
import AddBanner from './AddBanner';
import Features from './Features';
import Testimony from './Testimony';
import Product from '../Shoplist/Products';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      <Header />
   
  
      <TopHeader />
      <MainHeader />
      <Hero />
      <MainPageCategory />
      <AddBanner />
      <Features />
      <Testimony />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
