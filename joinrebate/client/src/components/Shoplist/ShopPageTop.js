import React from 'react';
import Viewby from './Viewby'; 
import ShowingProduct from './ShowingProduct';
import Sorting from './Sorting'; // Assuming you've named your sorting component 'Sorting'

function ShopPage() {
  return (
    <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
      <div className="container">
        <div className="hb_shoppage">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <Viewby/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <ShowingProduct/>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 pull-right">
            <Sorting />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
