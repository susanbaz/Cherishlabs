// MainPageCategory.js
import React from 'react';

const MainPageCategory = () => {
  return (
    <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm1-12 col-xs-12">
            <div className="hb_mainheading hb_bottompadder40">
              <h2>View All Categories</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="hb_herbs_heal">
              <img src="/images/pics/newarrival.png" className="img-responsive" alt="" />
              <h4><a href="#">New Arrivals</a></h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="hb_herbs_heal">
              <img src="/images/pics/tshirt.png" className="img-responsive" alt="" />
              <h4><a href="#">T-shirts</a></h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="hb_herbs_heal">
              <img src="/images/pics/sales.png" className="img-responsive" alt="" />
              <h4><a href="#">Promotional Products</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageCategory;
