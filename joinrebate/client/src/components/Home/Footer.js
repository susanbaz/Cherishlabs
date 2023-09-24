import React from 'react';

function Footer() {
  return (
    <>
      <div className="hb_footer_wrapper hb_toppadder80 hb_bottompadder40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="hb_footerdiv">
                <img src="images/logo.png" className="img-responsive" alt="" />
                <p>CherishLab specializes in personalized style with custom T-shirts, hats, and promotional items. Our quality printing and straightforward ordering process empower businesses, groups, and individuals to make a statement.</p>
                <div className="hb_social_icon">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="hb_footerdiv">
                <h3>subscribe</h3>
                <p>Join our creative community and elevate your brand or express yourself today.</p>
                <div className="hb_subscribe_form">
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <button className="hb_btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="hb_footerdiv">
                <h3>Gallery</h3>
                <ul className="hb_footer_gallery">
                  {Array.from({ length: 6 }, (_, index) => (
                    <li key={index}>
                      <a href="#">
                        <img src={`http://via.placeholder.com/74x74`} className="img-responsive" alt="" />
                        <div className="hb_img_overlay"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="hb_footerdiv">
                <h3>Get in touch</h3>
                <ul className="hb_footer_contact">
                  <li>
                    <span><i className="flaticon-close-envelope"></i></span>
                    <p><a href="#">susanbaz088@gmail.com</a></p>
                  </li>
                  <li>
                    <span><i className="flaticon-telephone"></i></span>
                    <p>+1-6232571222</p>
                  </li>
                  <li>
                    <span><i className="flaticon-home"></i></span>
                    <p>United States</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hb_copyright_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>Copyright &copy; 2023 CherishLab All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
