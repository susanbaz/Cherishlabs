import React from 'react';

const ProductDetails = () => {
  return (
    <div className="hb_product_single">
      <h5>Shark Doo Design</h5>
      <p><del>$15</del> $12</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur erat diam, non iaculis ex dictum ut. Aenean sit amet odio nisi. Vestibulum vel dolor et justo sollicitudin tincidunt. Mauris eleifend elit metus. Fusce blandit nulla at massa venenatis, sed tincidunt nisl tincidunt.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur erat diam, non iaculis ex dictum ut. Aenean sit amet odio nisi.</p>
      <div className="hb_quantity">
        <label>Quantity</label>
        <input type="number" min="0" className="hb_input" placeholder="Quantity" />
      </div>
      <div className="hb_product_btn">
        <a href="cart.html" className="hb_btn"><i className="flaticon-empty-shopping-cart"></i> Add to Cart</a>
        <a href="#" className="hb_btn"><i className="flaticon-favorite-heart-button"></i> Add to Wishlist</a>
      </div>
    </div>
  );
};

export default ProductDetails;
