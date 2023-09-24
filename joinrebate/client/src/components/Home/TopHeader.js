import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TopHeader() {
  const [showLoginPopup,setShowLoginPopup] = useState(false);
  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };
  return (
    <div className="hb_topheader">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12"> 
            <div className="hb_header_social_icon">
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
            <div className="hb_logo">
              <a href="#"><img src="images/logo.png" className="img-responsive" alt="" /></a>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className="hb_header_right_links">
              <ul>
                <li className="hb_search_wrapper"><a href="#" className="hb_search_icon"><i className="flaticon-search-2"></i></a>
                  <div className="hb_search_form">
                    <form>
                      <input type="text" className="form-control hb_search" placeholder="Search.." />
                    </form>
                  </div>
                </li>
                <li><a href="#"><i className="flaticon-empty-shopping-cart"></i></a>
                  <ul className="hb_cart">
                    <li>
                      <div className="hb_left">
                        <a href="#"><img src="http://via.placeholder.com/50x50" alt="" /></a>
                      </div>
                      <div className="hb_right">
                        <h3><a href="shop_single.html">Loose Leaf</a></h3>
                        <h6>$250</h6>
                      </div>
                    </li>
                    <li>
                      <div className="hb_left">
                        <a href="#"><img src="http://via.placeholder.com/50x50" alt="" /></a>
                      </div>
                      <div className="hb_right">
                        <h3><a href="shop_single.html">Black Organic</a></h3>
                        <h6>$250</h6>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="hb_login_popup">
                <a href="#" onClick={toggleLoginPopup}>
                <i className="flaticon-login"></i>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
