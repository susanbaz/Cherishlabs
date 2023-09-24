import React from 'react';
import Header from './Home/Header';
import TopHeader from './Home/TopHeader';
import MainHeader from './Home/MainHeader';
import Footer from './Home/Footer';
import ProductSlide from './Shoplist/ProductSlide';
import ProductDetails from './Shoplist/ProductDetails';
import DescriptionTab from './Shoplist/DescriptionTab';
import Reviews from './Shoplist/Reviews';
import ReviewForm from './Shoplist/ReviewForm';
import Related from './Shoplist/Related';



function Shopsingle() {
  return (
    <div className="App">
      <Header />
     
        <TopHeader />
      <MainHeader />
      <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="hb_shop_slider">
                            <ProductSlide />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="hb_product_single">
                            <ProductDetails />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="hb_tabdiv">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a>
                                </li>
                                <li role="presentation">
                                    <a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Reviews</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="description">
                                    <DescriptionTab />
                                </div>
                                <div role="tabpanel" className="tab-pane" id="reviews">
                                    <Reviews />
                                    <ReviewForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="hb_related_product">
                            <h3>Related products</h3>
                            <div className="hb_related_product_slider">
                                <Related />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      <Footer />
    </div>
  );
}

export default Shopsingle;

