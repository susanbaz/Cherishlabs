import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Hero() {
  return (
    <div className="hb_slider_wrapper">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div className="item">
          <div className="hb_slider_data">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 hb_padder0 hidden-sm hidden-xs">
              {/* Include any content or image for this slide */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right hb_padder0">
              <div className="hb_sliderimg">
                <img src="./images/hello/slide4.jpg" className="img-responsive" alt="" />
              </div>
            </div>
            <div className="hb_banner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                    <div className="hb_banner_content">
                      <h2>Make custom T-shirts, apparel & Promo Products Online</h2>
                      <p>with the highest quality printing & customer service.<br />Easy Ordering. Fast & Free Shipping.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the same structure for other slides */}
        <div className="item">
          <div className="hb_slider_data">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 hb_padder0 hidden-sm hidden-xs">
              {/* Include any content or image for this slide */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right hb_padder0">
              <div className="hb_sliderimg">
                <img src="./images/hello/slide5.jpg" className="img-responsive" alt="" />
              </div>
            </div>
            <div className="hb_banner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                    <div className="hb_banner_content">
                      <h2>We’ll Bring Your Dream Design<br />To Life</h2>
                      <p>Incredible Service. All-inclusive Pricing.<br />Real Love.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="hb_slider_data">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 hb_padder0 hidden-sm hidden-xs">
              {/* Include any content or image for this slide */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-right hb_padder0">
              <div className="hb_sliderimg">
                <img src="./images/hello/slide6.jpg" className="img-responsive" alt="" />
              </div>
            </div>
            <div className="hb_banner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                    <div className="hb_banner_content">
                      <h2>Empower Your Crew<br />Elevate Your Teams</h2>
                      <p>Put your logo to work with products people use every day <br />Build your brand with the perfect products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
