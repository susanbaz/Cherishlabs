import React from 'react';
import Header from './Home/Header';
import TopHeader from './Home/TopHeader';
import MainHeader from './Home/MainHeader';
import Footer from './Home/Footer';
import CartTable from './Cart/CartTable';
import CartTotals from './Cart/CartTotals';
import Coupon from './Cart/Coupon';


const Cart = () => {
  return (
    <div className="App">
      <Header />
             <TopHeader />
      <MainHeader />
    <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="woocommerce">
              <CartTable />
              <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                <Coupon />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 pull-right">
                <CartTotals />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Cart;
