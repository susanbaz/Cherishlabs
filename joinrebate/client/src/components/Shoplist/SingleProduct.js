import React from 'react';
import ProductSlide from './ProductSlide';
import ProductDetails from './ProductDetails';
import DescriptionTab from './DescriptionTab';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';
import Related from './Related';

function SingleProduct() {
    return (
        <div className="hb_white_wrapper hb_toppadder80 hb_bottompadder40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <ProductSlide />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <ProductDetails />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <DescriptionTab />
                        <Reviews />
                        <ReviewForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Related />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
