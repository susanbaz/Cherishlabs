const express = require('express');
const router = express.Router();

const {
  createPayment,
  getPaymentByUserId,
  updatePaymentByUserId,
} = require('../db/payments');

// POST create new payment information
router.post('/api/payments', async (req, res, next) => {
  const paymentData = req.body;
  try {
    const newPayment = await createPayment(paymentData);
    res.status(201).json(newPayment);
  } catch (error) {
    next(error);
  }
});

// GET payment information by user ID
router.get('/api/payments/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const payment = await getPaymentByUserId(userId);
    if (!payment) {
      return res.status(404).json({ message: 'Payment information not found' });
    }
    res.json(payment);
  } catch (error) {
    next(error);
  }
});

// PUT update payment information by user ID
router.put('/api/payments/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const paymentData = req.body;
  try {
    const updatedPayment = await updatePaymentByUserId(userId, paymentData);
    if (!updatedPayment) {
      return res.status(404).json({ message: 'Payment information not found' });
    }
    res.json(updatedPayment);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
