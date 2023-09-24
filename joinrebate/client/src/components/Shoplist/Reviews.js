import React from 'react';

const ReviewItem = ({ name, image, text, time }) => {
  return (
    <li>
      <div className="hb_review_img">
        <img src={image} className="img-responsive" alt={name} />
      </div>
      <div className="hb_review_data">
        <h3>{name}</h3>
        <p>{text}</p>
        <h6>
          <i className="fa fa-clock-o"></i> {time} <a href="#"><i className="fa fa-reply"></i> reply</a>
        </h6>
      </div>
    </li>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: 'Peter Parker',
      image: 'http://via.placeholder.com/84x84',
      text: 'Pellentesque lobortis faucibus tincidunt. Proin posuere luctus cursus. Cras non eleifend nibh, vel porttitor metus. Laient squessty tincidunt purus id ante .',
      time: '8 Hours Ago',
    },
    {
      name: 'Peter Parker',
      image: 'http://via.placeholder.com/84x84',
      text: 'Pellentesque lobortis faucibus tincidunt. Proin posuere luctus cursus. Cras non eleifend nibh, vel porttitor metus. Laient squessty tincidunt purus id ante .',
      time: '8 Hours Ago',
    },
  ];

  return (
    <div className="hb_review_div">
      <ul>
        {reviews.map((review, index) => (
          <ReviewItem
            key={index}
            name={review.name}
            image={review.image}
            text={review.text}
            time={review.time}
          />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
