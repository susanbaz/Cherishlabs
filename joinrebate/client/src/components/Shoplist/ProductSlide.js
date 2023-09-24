import React from 'react';

const ProductSlide = () => {
  return (
    <div className="hb_shop_slider">
      <div
        id="rev_slider_8_1_wrapper"
        className="rev_slider_wrapper fullwidthbanner-container"
        data-alias="facebook-feed8"
        style={{
          margin: '0px auto',
          backgroundColor: '#dddddd',
          padding: '0px',
          marginTop: '0px',
          marginBottom: '0px',
        }}
      >
        {/* START REVOLUTION SLIDER 5.0.7 auto mode */}
        <div
          id="rev_slider_8_1"
          className="rev_slider fullwidthabanner"
          style={{ display: 'none' }}
          data-version="5.0.7"
        >
          <ul>
            {/* SLIDE */}
            <li
              data-index="rs-28"
              data-transition="scaledownfromleft"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="1500"
              data-thumb="http://via.placeholder.com/70x70"
              data-rotate="0"
              data-fstransition="fade"
              data-fsmasterspeed="1500"
              data-fsslotamount="7"
              data-saveperformance="off"
            >
              {/* MAIN IMAGE */}
              <img
                src="js/plugins/revolution/images/dummy.png"
                alt=""
                width="1920"
                height="1080"
                data-lazyload="http://via.placeholder.com/500x500"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
            </li>
            {/* SLIDE */}
            <li
              data-index="rs-303"
              data-transition="scaledownfromleft"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="1500"
              data-thumb="http://via.placeholder.com/70x70"
              data-rotate="0"
              data-saveperformance="off"
            >
              {/* MAIN IMAGE */}
              <img
                src="js/plugins/revolution/images/dummy.png"
                alt=""
                width="1920"
                height="1280"
                data-lazyload="http://via.placeholder.com/500x500"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />
            </li>
            {/* SLIDE */}
            <li
              data-index="rs-302"
              data-transition="scaledownfromleft"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="1500"
              data-thumb="http://via.placeholder.com/70x70"
              data-rotate="0"
              data-saveperformance="off"
            >
              {/* MAIN IMAGE */}
              <img
                src="js/plugins/revolution/images/dummy.png"
                alt=""
                width="1920"
                height="1280"
                data-lazyload="http://via.placeholder.com/500x500"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                className="rev-slidebg"
                data-no-retina
              />
            </li>
            {/* Add more slides as needed */}
          </ul>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: 'visible !important' }}
          ></div>
        </div>
        {/* END REVOLUTION SLIDER */}
      </div>
    </div>
  );
};

export default ProductSlide;
