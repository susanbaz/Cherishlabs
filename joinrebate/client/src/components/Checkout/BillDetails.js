import React from 'react';

const BillingDetailsForm = () => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="First Name" value="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Last Name" value="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email" value="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Phone" value="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="form-group">
          <textarea className="form-control" placeholder="Address" rows="9"></textarea>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="City" value="" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="State" value="" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Pin Code" value="" />
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <button className="hb_btn">Place Order</button>
      </div>
    </div>
  );
};

export default BillingDetailsForm;
