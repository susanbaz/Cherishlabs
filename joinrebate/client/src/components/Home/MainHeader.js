import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Shop',
    path: '/shop',
    subMenu: [
      { label: 'Shop All', path: '/shop' },
      { label: 'Shop Single', path: '/shop_single' },
      { label: 'Cart', path: '/cart' },
      { label: 'Checkout', path: '/checkout' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

function MainHeader() {
  const renderSubMenu = (subMenuItems) => {
    return (
      <ul className="sub-menu">
        {subMenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="hb_main_header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="hb_menu">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  {menuItems.map((menuItem, index) => (
                    <li key={index} className={menuItem.subMenu ? 'dropdown' : ''}>
                      <Link to={menuItem.path}>{menuItem.label}</Link>
                      {menuItem.subMenu && renderSubMenu(menuItem.subMenu)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
