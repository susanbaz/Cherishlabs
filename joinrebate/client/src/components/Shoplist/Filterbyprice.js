import React from 'react';

function Filterbyprice() {
  return (
    <div className="widget widget_rangeslider">
      <h3 className="widget-title">Filter By Price</h3>
      <div id="slider-range"></div>
      <div className="hb_range">
        <label htmlFor="amount">Price range:</label>
        <input type="text" id="amount" readOnly />
      </div>
      <div className="hb_filter">
        <a href="#">filter</a>
      </div>
    </div>
  );
}

export default Filterbyprice;
