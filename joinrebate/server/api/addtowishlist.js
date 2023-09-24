const express = require('express');
const router = express.Router();

const {
  addToWishlist,
  getWishlistByUserId,
  removeFromWishlist,
} = require('../db/addtowishlist');

// POST add a product to the wishlist
router.post('/api/addtowishlist', async (req, res, next) => {
  const wishlistData = req.body;
  try {
    const newWishlistItem = await addToWishlist(wishlistData);
    res.status(201).json(newWishlistItem);
  } catch (error) {
    next(error);
  }
});

// GET wishlist items by user ID
router.get('/api/addtowishlist/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const wishlistItems = await getWishlistByUserId(userId);
    res.json(wishlistItems);
  } catch (error) {
    next(error);
  }
});

// DELETE remove a product from the wishlist by user ID and product ID
router.delete('/api/addtowishlist/:userId/:productId', async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  try {
    const removedWishlistItem = await removeFromWishlist(userId, productId);
    if (!removedWishlistItem) {
      return res.status(404).json({ message: 'Wishlist item not found' });
    }
    res.json(removedWishlistItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
