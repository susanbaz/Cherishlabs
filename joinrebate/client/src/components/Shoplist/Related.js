import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Related = () => {
  const productData = [
    {
      name: 'Shark Doo Design',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
    {
      name: 'Lives Matter Designs',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
    {
      name: 'Dragons Imagine Designs',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
    {
      name: 'Families Together Designs',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
    {
      name: 'Families Together Designs',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
    {
      name: 'Hawaii Aloha Designs',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
    {
      name: 'Space Force Designs',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
    {
      name: 'Halloween Cat Design',
      imageSrc: 'http://via.placeholder.com/263x263',
      price: 12,
    },
  ];

  return (
    <div className="hb_related_product">
      
      <Carousel
        showArrows={true}
        emulateTouch={true}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        selectedItem={0}
        swipeable={true}
        autoPlay={true}
      >
        {productData.map((product, index) => (
          <div key={index} className="item">
            <div className="hb_product_div">
              <div className="hb_product_img">
                <img
                  src={product.imageSrc}
                  className="img-responsive"
                  alt={`Product ${index + 1}`}
                />
                <div className="product-image-overlay">
                  <ul className="cart_icons">
                    <li>
                      <a href="cart.html">
                        <span>
                          <i className="flaticon-empty-shopping-cart"></i>
                        </span>
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="flaticon-favorite-heart-button"></i>
                        </span>
                        Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="images/placehold.jpg" className="zoom_icon">
                        <span>
                          <i className="flaticon-search"></i>
                        </span>
                        Quick View
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hb_product_data">
                <h5>
                  <a href="shop_single.html">{product.name}</a>
                </h5>
                <p>
                  <del>$15</del> {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Related;
