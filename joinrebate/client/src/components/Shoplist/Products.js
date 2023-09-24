import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server when the component mounts
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="hb_mainheading hb_bottompadder40">
              <h2>Shop</h2>
              <h3>Visit Our Store</h3>
            </div>
          </div>
          {products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="hb_product_div">
                <div className="hb_product_img">
                  <img src={product.medialocation} className="img-responsive" alt={product.name} />
                  <div className="product-image-overlay">
                    <ul className="cart_icons">
                      <li>
                        <a href="cart.html">
                          <span><i className="flaticon-empty-shopping-cart"></i></span>
                          Add to Cart
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span><i className="flaticon-favorite-heart-button"></i></span>
                          Add to Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="images/placehold.jpg" className="zoom_icon">
                          <span><i className="flaticon-search"></i></span>
                          Quick View
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hb_product_data">
                  <h5><a href="shop_single.html">{product.name}</a></h5>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
