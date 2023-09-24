import React from 'react';
import Header from './Home/Header';
import TopHeader from './Home/TopHeader';
import MainHeader from './Home/MainHeader';
import Footer from './Home/Footer';
import ShopPageTop from './Shoplist/ShopPageTop';
import ShopPage from './Shoplist/ShopPageTop';
import Shoplist from './Shoplist/Shoplist';
import Search from './search/Search';
import Categories from './Categories';
import FeaturedProducts from './Shoplist/FeaturedProducts';
import TagCloud from './Shoplist/TagCloud';
import Filterbyprice from './Shoplist/Filterbyprice';



function Shop() {
  return (
    <div className="App">
      <Header />
     
        <TopHeader />
      <MainHeader />
      <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
      <div className="container">
        <ShopPageTop />
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <Shoplist />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <Search />
            <Categories />
            <FeaturedProducts />
            <Filterbyprice/>
            <TagCloud />
          </div>
        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
}

export default Shop;
