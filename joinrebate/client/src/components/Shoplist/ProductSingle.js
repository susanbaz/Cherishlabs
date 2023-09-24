import React from 'react';

function ProductSingle({ product }) {
 
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 item">
      <div className="hb_product_div">
        <div className="hb_product_img">
        <img src={product.mediaLocation} className="img-responsive" alt={product.title} />

          <div className="product-image-overlay">
            <ul className="cart_icons">
              <li>
                <a href="cart.html">
                  <span><i className="flaticon-empty-shopping-cart"></i></span>Add to cart
                </a>
              </li>
              <li>
                <a href="#">
                  <span><i className="flaticon-favorite-heart-button"></i> </span> Add to Wishlist
                </a>
              </li>
              <li>
                <a href="images/placehold.jpg" className="zoom_icon">
                  <span><i className="flaticon-search"></i> </span> Quick View
                </a>
              </li>
            </ul>
          </div>
          <div className="hb_img_overlay"></div>
          <div className="hb_overlay_icon">
            <a href="images/placehold.jpg" className="zoom_icon"><i className="flaticon-search-2"></i></a>
          </div>
        </div>
        <div className="hb_product_data">
          <h5><a href="shop_single.html">{product.title}</a></h5>
          <p><del>$15</del> ${product.price}</p>
          <div className="hb_product_detail">
            <p>{product.description}</p>
          </div>
          <div className="hb_product_btn">
            <a href="cart.html" className="hb_btn"><i className="flaticon-empty-shopping-cart"></i> add to cart </a>
            <a href="#" className="hb_btn"><i className="flaticon-favorite-heart-button"></i> add to wishlist </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSingle;
