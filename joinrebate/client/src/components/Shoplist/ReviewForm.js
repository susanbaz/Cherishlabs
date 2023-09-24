import React, { useState } from 'react';

const ReviewForm = ({ isLoggedIn, user, onReviewSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
  });
  const [hasSubmittedReview, setHasSubmittedReview] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      // Display a message or redirect to a login page
      console.log('Only logged-in users can submit reviews.');
      return;
    }

    if (hasSubmittedReview) {
      // Display a message indicating that the user has already submitted a review
      console.log('You have already submitted a review.');
      return;
    }

    // Handle form submission logic for logged-in users here
    onReviewSubmit(formData);

    // Mark the user as having submitted a review
    setHasSubmittedReview(true);
  };

  if (!isLoggedIn) {
    // Render a message or login prompt for users who are not logged in
    return <p>Please log in to submit a review.</p>;
  }

  if (hasSubmittedReview) {
    // Render a message indicating that the user has already submitted a review
    return <p>You have already submitted a review.</p>;
  }

  return (
    <div className="hb_review_form_div">
      <h3>your review:</h3>
      <form className="hb_review_form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name*"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Review*"
                rows="5"
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button type="submit" className="hb_btn">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
