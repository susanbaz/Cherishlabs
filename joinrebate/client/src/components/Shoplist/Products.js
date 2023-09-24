import React from 'react';

const productList = [
  
    {
      productId: 1,
      name: "Shark Lovers Unite",
      size: "small",
      colors: "white",
      quantity: 100,
      description: "Our diverse range of Shark T-shirts caters to all ages and tastes...",
      price: 28,
      medialocation: "./images/products/shark.png",
      category_id: 1,
    },
    {
      productId: 2,
      name: "Shark Lovers Unite",
      size: "medium",
      colors: "black",
      quantity: 100,
      description: "Our diverse range of Shark T-shirts caters to all ages and tastes...",
      price: 28,
      medialocation: "./images/products/shark.png",
      category_id: 1,
    },
    {
      productId: 3,
      name: "Shark Lovers Unite",
      size: "large",
      colors: "blue",
      quantity: 100,
      description: "Our diverse range of Shark T-shirts caters to all ages and tastes...",
      price: 28,
      medialocation: "./images/products/shark.png",
      category_id: 1,
    },
    {
      productId: 4,
      name: "Shark Lovers Unite",
      size: "XL",
      colors: "green",
      quantity: 0,
      description: "Our diverse range of Shark T-shirts caters to all ages and tastes...",
      price: 28,
      medialocation: "./images/products/shark.png",
      category_id: 1,
    },
    {
      productId: 5,
      name: "Unique Boats and Hoes T-Shirt - Perfect for Movie Enthusiasts",
      size: "small",
      colors: "white",
      quantity: 50,
      description: "Don't miss out on the opportunity to own this unique piece of movie-inspired fashion...",
      price: 32,
      medialocation: "./images/products/boat.png",
      category_id: 1,
    },
    {
      productId: 6,
      name: "Unique Boats and Hoes T-Shirt - Perfect for Movie Enthusiasts",
      size: "medium",
      colors: "black",
      quantity: 50,
      description: "Don't miss out on the opportunity to own this unique piece of movie-inspired fashion...",
      price: 32,
      medialocation: "./images/products/boat.png",
      category_id: 1,
    },
    {
      productId: 7,
      name: "Unique Boats and Hoes T-Shirt - Perfect for Movie Enthusiasts",
      size: "large",
      colors: "blue",
      quantity: 50,
      description: "Don't miss out on the opportunity to own this unique piece of movie-inspired fashion...",
      price: 32,
      medialocation: "./images/products/boat.png",
      category_id: 1,
    },
    {
      productId: 8,
      name: "Unique Boats and Hoes T-Shirt - Perfect for Movie Enthusiasts",
      size: "XL",
      colors: "green",
      quantity: 10,
      description: "Don't miss out on the opportunity to own this unique piece of movie-inspired fashion...",
      price: 32,
      medialocation: "./images/products/boat.png",
      category_id: 1,
    },
    {
      productId: 9,
      name: "Holiday Spirit on Display: Christmas T-Shirts Galore",
      size: "small",
      colors: "white",
      quantity: 20,
      description: "Crafted with comfort in mind, our Christmas shirts are made from high-quality materials...",
      price: 24,
      medialocation: "./images/products/christmas.png",
      category_id: 1,
    },
    {
      productId: 10,
      name: "Holiday Spirit on Display: Christmas T-Shirts Galore",
      size: "medium",
      colors: "black",
      quantity: 20,
      description: "Crafted with comfort in mind, our Christmas shirts are made from high-quality materials...",
      price: 24,
      medialocation: "./images/products/christmas.png",
      category_id: 1,
    },
    {
      productId: 11,
      name: "Holiday Spirit on Display: Christmas T-Shirts Galore",
      size: "large",
      colors: "blue",
      quantity: 20,
      description: "Crafted with comfort in mind, our Christmas shirts are made from high-quality materials...",
      price: 24,
      medialocation: "./images/products/christmas.png",
      category_id: 1,
    },
    {
      productId: 12,
      name: "Holiday Spirit on Display: Christmas T-Shirts Galore",
      size: "XL",
      colors: "green",
      quantity: 3,
      description: "Crafted with comfort in mind, our Christmas shirts are made from high-quality materials...",
      price: 24,
      medialocation: "./images/products/christmas.png",
      category_id: 1,
    },
    {
      productId: 13,
      name: "Spooktacular Halloween T-Shirts: Creepy, Cute, and Customizable",
      size: "small",
      colors: "white",
      quantity: 15,
      description: "Don't wait until October 31st to get into the spirit—browse our Halloween t-shirts today...",
      price: 19,
      medialocation: "./images/products/halloween.png",
      category_id: 1,
    },
    {
      productId: 14,
      name: "Spooktacular Halloween T-Shirts: Creepy, Cute, and Customizable",
      size: "medium",
      colors: "black",
      quantity: 15,
      description: "Don't wait until October 31st to get into the spirit—browse our Halloween t-shirts today...",
      price: 19,
      medialocation: "./images/products/halloween.png",
      category_id: 1,
    },
    {
      productId: 15,
      name: "Spooktacular Halloween T-Shirts: Creepy, Cute, and Customizable",
      size: "large",
      colors: "blue",
      quantity: 15,
      description: "Don't wait until October 31st to get into the spirit—browse our Halloween t-shirts today...",
      price: 19,
      medialocation: "./images/products/halloween.png",
      category_id: 1,
    },
    {
      productId: 16,
      name: "Spooktacular Halloween T-Shirts: Creepy, Cute, and Customizable",
      size: "XL",
      colors: "green",
      quantity: 1,
      description: "Don't wait until October 31st to get into the spirit—browse our Halloween t-shirts today...",
      price: 19,
      medialocation: "./images/products/halloween.png",
      category_id: 1,
    },
    {
      productId: 17,
      name: "God's Masterpiece T-Shirt: Wear Your Faith with Pride",
      size: "small",
      colors: "white",
      quantity: 10,
      description: "Share your faith, your strength, and your belief in the masterpiece that is you...",
      price: 22,
      medialocation: "./images/products/masterpiece.png",
      category_id: 1,
    },
    {
      productId: 18,
      name: "God's Masterpiece T-Shirt: Wear Your Faith with Pride",
      size: "medium",
      colors: "black",
      quantity: 10,
      description: "Share your faith, your strength, and your belief in the masterpiece that is you...",
      price: 22,
      medialocation: "./images/products/masterpiece.png",
      category_id: 1,
    },
    {
      productId: 19,
      name: "God's Masterpiece T-Shirt: Wear Your Faith with Pride",
      size: "large",
      colors: "blue",
      quantity: 10,
      description: "Share your faith, your strength, and your belief in the masterpiece that is you...",
      price: 22,
      medialocation: "./images/products/masterpiece.png",
      category_id: 1,
    },
    {
      productId: 20,
      name: "God's Masterpiece T-Shirt: Wear Your Faith with Pride",
      size: "XL",
      colors: "green",
      quantity: 5,
      description: "Share your faith, your strength, and your belief in the masterpiece that is you...",
      price: 22,
      medialocation: "./images/products/masterpiece.png",
      category_id: 1,
    },
    {
      productId: 21,
      name: "USA Flag Tees",
      size: "small",
      colors: "white",
      quantity: 25,
      description: "Discover a wide range of American flag shirts and apparel on Amazon...",
      price: 15,
      medialocation: "./images/products/people.png",
      category_id: 1,
    },
    {
      productId: 22,
      name: "USA Flag Tees",
      size: "medium",
      colors: "black",
      quantity: 25,
      description: "Discover a wide range of American flag shirts and apparel on Amazon...",
      price: 15,
      medialocation: "./images/products/people.png",
      category_id: 1,
    },
    {
      productId: 23,
      name: "USA Flag Tees",
      size: "large",
      colors: "blue",
      quantity: 25,
      description: "Discover a wide range of American flag shirts and apparel on Amazon...",
      price: 15,
      medialocation: "./images/products/people.png",
      category_id: 1,
    },
    {
      productId: 24,
      name: "USA Flag Tees",
      size: "XL",
      colors: "green",
      quantity: 0,
      description: "Discover a wide range of American flag shirts and apparel on Amazon...",
      price: 15,
      medialocation: "./images/products/people.png",
      category_id: 1,
    },
    {
      productId: 25,
      name: "Explore Flamingo Shirts",
      size: "small",
      colors: "white",
      quantity: 30,
      description: "Dive into the world of flamingos with our wide selection of flamingo shirts on Amazon...",
      price: 16,
      medialocation: "./images/products/flamingo.png",
      category_id: 1,
    },
    {
      productId: 26,
      name: "Explore Flamingo Shirts",
      size: "medium",
      colors: "black",
      quantity: 30,
      description: "Dive into the world of flamingos with our wide selection of flamingo shirts on Amazon...",
      price: 16,
      medialocation: "./images/products/flamingo.png",
      category_id: 1,
    },
    {
      productId: 27,
      name: "Explore Flamingo Shirts",
      size: "large",
      colors: "blue",
      quantity: 30,
      description: "Dive into the world of flamingos with our wide selection of flamingo shirts on Amazon...",
      price: 16,
      medialocation: "./images/products/flamingo.png",
      category_id: 1,
    },
    {
      productId: 28,
      name: "Explore Flamingo Shirts",
      size: "XL",
      colors: "green",
      quantity: 30,
      description: "Dive into the world of flamingos with our wide selection of flamingo shirts on Amazon...",
      price: 16,
      medialocation: "./images/products/flamingo.png",
      category_id: 1,
    },
    {
      productId: 29,
      name: "Discover the Cosmos with Space T-Shirts",
      size: "small",
      colors: "white",
      quantity: 30,
      description: "Explore the universe of space-themed t-shirts on Amazon...",
      price: 5,
      medialocation: "./images/products/space.png",
      category_id: 1,
    },
    {
      productId: 30,
      name: "Discover the Cosmos with Space T-Shirts",
      size: "medium",
      colors: "black",
      quantity: 30,
      description: "Explore the universe of space-themed t-shirts on Amazon...",
      price: 5,
      medialocation: "./images/products/space.png",
      category_id: 1,
    },
    {
      productId: 31,
      name: "Discover the Cosmos with Space T-Shirts",
      size: "large",
      colors: "blue",
      quantity: 30,
      description: "Explore the universe of space-themed t-shirts on Amazon...",
      price: 5,
      medialocation: "./images/products/space.png",
      category_id: 1,
    },
    {
      productId: 32,
      name: "Discover the Cosmos with Space T-Shirts",
      size: "XL",
      colors: "green",
      quantity: 30,
      description: "Explore the universe of space-themed t-shirts on Amazon...",
      price: 5,
      medialocation: "./images/products/space.png",
      category_id: 1,
    },
    
  ];

const ProductCard = ({ product }) => (
  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="hb_product_div">
      <div className="hb_product_img">
        <img src={productList.medialocation} className="img-responsive" alt={product.name} />
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
        <h5><a href="shop_single.html">{product.title}</a></h5>
        <p>${product.price}</p>
      </div>
    </div>
  </div>
);

const Products = () => (
  <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="hb_mainheading hb_bottompadder40">
            <h2>Shop</h2>
            <h3>Visit Our Store</h3>
          </div>
        </div>
        {productList.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  </div>
);

export default Products;
