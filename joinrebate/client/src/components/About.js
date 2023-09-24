import React from 'react';
import Header from './Home/Header';


import TopHeader from './Home/TopHeader';
import MainHeader from './Home/MainHeader';

import Features from './Home/Features';
import Testimony from './Home/Testimony';

import Footer from './Home/Footer';
import WhoAreWe from './Aboutus/WhoAreWe';

function About() {
  return (
    <div className="App">
      <Header />
     
        <TopHeader />
      <MainHeader />
      <WhoAreWe />
      <Testimony />
      <Features />
      
      <Footer />
    </div>
  );
}

export default About;
