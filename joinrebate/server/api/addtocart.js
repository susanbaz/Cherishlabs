const express = require('express');
const router = express.Router();

const {
  addToCart,
  getCartByUserId,
  updateCartItemQuantity,
  removeFromCart,
} = require('../db/addtocart');

// POST add a product to the shopping cart
router.post('/api/addtocart', async (req, res, next) => {
  const cartData = req.body;
  try {
    const newCartItem = await addToCart(cartData);
    res.status(201).json(newCartItem);
  } catch (error) {
    next(error);
  }
});

// GET shopping cart contents by user ID
router.get('/api/addtocart/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const cartContents = await getCartByUserId(userId);
    res.json(cartContents);
  } catch (error) {
    next(error);
  }
});

// PUT update shopping cart item quantity by user ID and product ID
router.put('/api/addtocart/:userId/:productId', async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  const quantity = req.body.quantity;
  try {
    const updatedCartItem = await updateCartItemQuantity(userId, productId, quantity);
    if (!updatedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.json(updatedCartItem);
  } catch (error) {
    next(error);
  }
});

// DELETE remove a product from the shopping cart by user ID and product ID
router.delete('/api/addtocart/:userId/:productId', async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  try {
    const removedCartItem = await removeFromCart(userId, productId);
    if (!removedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.json(removedCartItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
