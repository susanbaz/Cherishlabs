import React from "react";

// Create a sub-component for the cart items
function CartItems() {
    return (
      <li>
        <a href="#">
          <i className="flaticon-empty-shopping-cart"></i>
        </a>
        <ul className="hb_cart">
          <li>
            <div className="hb_left">
              <a href="#">
                <img src="http://via.placeholder.com/50x50" alt="" />
              </a>
            </div>
            <div className="hb_right">
              <h3>
                <a href="shop_single.html">Shark T-Shirt</a>
              </h3>
              <h6>$25</h6>
            </div>
          </li>
          <li>
            <div className="hb_left">
              <a href="#">
                <img src="http://via.placeholder.com/50x50" alt="" />
              </a>
            </div>
            <div className="hb_right">
              <h3>
                <a href="shop_single.html">Christmas T-Shirt</a>
              </h3>
              <h6>$25</h6>
            </div>
          </li>
        </ul>
      </li>
    );
  }
  
  export default CartItems;