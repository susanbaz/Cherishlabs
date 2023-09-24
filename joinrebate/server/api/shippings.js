const express = require('express');
const router = express.Router();

const {
  createShipping,
  getShippingByUserId,
  updateShippingByUserId,
} = require('../db/shippings');

// POST create new shipping information
router.post('/api/shippings', async (req, res, next) => {
  const shippingData = req.body;
  try {
    const newShipping = await createShipping(shippingData);
    res.status(201).json(newShipping);
  } catch (error) {
    next(error);
  }
});

// GET shipping information by user ID
router.get('/api/shippings/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const shipping = await getShippingByUserId(userId);
    if (!shipping) {
      return res.status(404).json({ message: 'Shipping information not found' });
    }
    res.json(shipping);
  } catch (error) {
    next(error);
  }
});

// PUT update shipping information by user ID
router.put('/api/shippings/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const shippingData = req.body;
  try {
    const updatedShipping = await updateShippingByUserId(userId, shippingData);
    if (!updatedShipping) {
      return res.status(404).json({ message: 'Shipping information not found' });
    }
    res.json(updatedShipping);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
