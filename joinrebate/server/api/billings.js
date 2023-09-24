const express = require('express');
const router = express.Router();

const {
  createBilling,
  getBillingByUserId,
  updateBillingByUserId,
} = require('../db/billings');

// POST create new billing information
router.post('/api/billings', async (req, res, next) => {
  const billingData = req.body;
  try {
    const newBilling = await createBilling(billingData);
    res.status(201).json(newBilling);
  } catch (error) {
    next(error);
  }
});

// GET billing information by user ID
router.get('/api/billings/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const billing = await getBillingByUserId(userId);
    if (!billing) {
      return res.status(404).json({ message: 'Billing information not found' });
    }
    res.json(billing);
  } catch (error) {
    next(error);
  }
});

// PUT update billing information by user ID
router.put('/api/billings/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const billingData = req.body;
  try {
    const updatedBilling = await updateBillingByUserId(userId, billingData);
    if (!updatedBilling) {
      return res.status(404).json({ message: 'Billing information not found' });
    }
    res.json(updatedBilling);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
