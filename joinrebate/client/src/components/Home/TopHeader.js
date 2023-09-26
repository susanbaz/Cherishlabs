import React, { useState } from 'react';
import Login from '../User/Login'; // Import your Login component
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import LogoAndNavButton from './LogoAndNavButton';
import SearchForm from './SearchForm';
import CartItems from './CartItems';

function TopHeader() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <div className="hb_topheader">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <SocialIcons />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
            <LogoAndNavButton />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className="hb_header_right_links">
              <ul>
                <li className="hb_search_wrapper">
                  <SearchForm />
                </li>
                <li>
                  <a href="#">
                    <i className="flaticon-empty-shopping-cart"></i>
                  </a>
                  <ul className="hb_cart">
                    <CartItems />
                  </ul>
                </li>
                <li className="hb_login_popup">
                  <a href="#" onClick={toggleLoginPopup}>
                    <i className="flaticon-login"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the login popup */}
      {showLoginPopup && <Login onClose={toggleLoginPopup} />}
    </div>
  );
}

export default TopHeader;
