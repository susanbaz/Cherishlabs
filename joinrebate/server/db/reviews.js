const { client } = require('./client');

// Create a new review
async function createReview(reviewData) {
  try {
    const query = `
      INSERT INTO reviews (user_id, product_id, rating, review)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [
      reviewData.user_id,
      reviewData.product_id,
      reviewData.rating,
      reviewData.review,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get a list of all reviews
async function getAllReviews() {
  try {
    const query = 'SELECT * FROM reviews;';
    const result = await client.query(query);

    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Get a single review by ID
async function getReviewById(reviewId) {
  try {
    const query = 'SELECT * FROM reviews WHERE id = $1;';
    const result = await client.query(query, [reviewId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Update a review by ID
async function updateReview(reviewId, reviewData) {
  try {
    const query = `
      UPDATE reviews
      SET user_id = $1, product_id = $2, rating = $3, review = $4
      WHERE id = $5
      RETURNING *;
    `;

    const values = [
      reviewData.user_id,
      reviewData.product_id,
      reviewData.rating,
      reviewData.review,
      reviewId,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Delete a review by ID
async function deleteReview(reviewId) {
  try {
    const query = 'DELETE FROM reviews WHERE id = $1 RETURNING *;';
    const result = await client.query(query, [reviewId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
