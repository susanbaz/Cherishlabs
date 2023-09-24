import React from 'react';

const Features = () => {
  return (
    <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="hb_mainheading hb_bottompadder40">
              <h2>Features</h2>
              <h3>Why Choose US</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 hb_toppadder70">
            <div className="hb_feature_image">
              <div className="hb_left_top_border"></div>
              <div className="hb_right_bottom_border"></div>
              <img src="/images/pics/whychooseus.png" className="img-responsive" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="hb_feature_data">
                  <div className="hb_feature_icon">
                    <i className="flaticon-herbal-spa-treatment-leaves"></i>
                  </div>
                  <div className="hb_feature_content">
                    <h4>Customization and Quality Printing</h4>
                    <p>Allows customers to design custom T-shirts, apparel, sell products on plateforms</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="hb_feature_data">
                  <div className="hb_feature_icon">
                    <i className="flaticon-favorite-heart-button"></i>
                  </div>
                  <div className="hb_feature_content">
                    <h4>Easy Ordering and Fast Shipping</h4>
                    <p>Customers can enjoy an easy ordering process, and the company offers fast and free shipping.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="hb_feature_data">
                  <div className="hb_feature_icon">
                    <i className="flaticon-quality"></i>
                  </div>
                  <div className="hb_feature_content">
                    <h4>Diverse Product Range</h4>
                    <p>Offers a diverse range of products beyond T-shirts, including sweatshirts, hats, polo shirts, jackets, drinkware, bags, activewear, and more.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="hb_feature_data">
                  <div className="hb_feature_icon">
                    <i className="flaticon-women"></i>
                  </div>
                  <div className="hb_feature_content">
                    <h4>Fundraising Support</h4>
                    <p>This feature can be particularly appealing to groups or organizations looking to raise funds through custom product sales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
