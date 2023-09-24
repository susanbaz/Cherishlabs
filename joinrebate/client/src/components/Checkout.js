import React from 'react';
import Header from './Home/Header';
import TopHeader from './Home/TopHeader';
import MainHeader from './Home/MainHeader';
import Footer from './Home/Footer';
import CartTotals from './Cart/CartTotals';
import BillDetails from './Checkout/BillDetails';
import PaymentMethod from './Checkout/PaymentMethod';

const Checkout = () => {
    return (
        <div className="App">
      <Header />
             <TopHeader />
      <MainHeader />
      <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <form className="checkout woocommerce-checkout">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                  <div className="woocommerce-billing-fields">
                    <h3>Billing Details</h3>
                    <BillDetails />
                                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <PaymentMethod />
                  <CartTotals />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
    );
  };
  
  export default Checkout;

  
  
  
  
  
  