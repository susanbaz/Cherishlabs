const express = require('express');
const router = express.Router();

const {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require('../db/reviews');

// GET all reviews
router.get('/api/reviews', async (req, res, next) => {
  try {
    const reviews = await getAllReviews();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

// GET review by ID
router.get('/api/reviews/:id', async (req, res, next) => {
  const reviewId = req.params.id;
  try {
    const review = await getReviewById(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    next(error);
  }
});

// POST create a new review
router.post('/api/reviews', async (req, res, next) => {
  const reviewData = req.body;
  try {
    const newReview = await createReview(reviewData);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
});

// PUT update review by ID
router.put('/api/reviews/:id', async (req, res, next) => {
  const reviewId = req.params.id;
  const reviewData = req.body;
  try {
    const updatedReview = await updateReview(reviewId, reviewData);
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(updatedReview);
  } catch (error) {
    next(error);
  }
});

// DELETE review by ID
router.delete('/api/reviews/:id', async (req, res, next) => {
  const reviewId = req.params.id;
  try {
    const deletedReview = await deleteReview(reviewId);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(deletedReview);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
