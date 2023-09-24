import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimony = () => {
  const testimonialData = [
    {
      id: 1,
      imgSrc: 'http://via.placeholder.com/130x130',
      text:
        "We used Cherishlab for our school fundraiser, and it was a hit. The team helped us set up our campaign, and the custom products practically sold themselves. It was a fantastic way to raise money for our cause.",
      author: 'Lisa H.',
    },
    {
      id: 2,
      imgSrc: 'http://via.placeholder.com/130x130',
      text:
        "As a small business owner, I needed branded apparel for my staff. Cherishlab provided the professional look I was aiming for. Their embroidered polos and custom hats made our team stand out.",
      author: 'Michael R.',
    },
    {
      id: 3,
      imgSrc: 'http://via.placeholder.com/130x130',
      text:
        "What I love about Cherishlab is their product variety. I've ordered everything from promotional items like drinkware to custom sweatshirts for my family. It's a one-stop shop for all my customization needs.",
      author: 'Emily S.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hb_testimonial_wrapper">
      <div className="hb_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="hb_testimonial_slider">
              <Slider {...sliderSettings}>
                {testimonialData.map((testimonial) => (
                  <div key={testimonial.id} className="item">
                    <div className="hb_tslider_inner">
                      <div className="hb_tslider_img">
                        <div className="hb_left_top_border"></div>
                        <div className="hb_right_bottom_border"></div>
                        <img
                          src={testimonial.imgSrc}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="hb_tslider_data">
                        <p>{testimonial.text}</p>
                        <span>- {testimonial.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
