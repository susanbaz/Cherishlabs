import React from 'react';

const Coupon = () => {
  return (
    <div className="coupon">
      <h3>Coupon Code</h3>
      <input
        type="text"
        name="coupon_code"
        className="input-text"
        id="coupon_code"
        value=""
        placeholder="Coupon code"
      />
      <input
        type="submit"
        className="button hb_coupon_btn"
        name="apply_coupon"
        value="Apply"
      />
    </div>
  );
};

export default Coupon;
