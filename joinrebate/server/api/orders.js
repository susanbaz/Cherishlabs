const express = require('express');
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require('../db/orders');

// GET all orders
router.get('/api/orders', async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

// GET order by ID
router.get('/api/orders/:id', async (req, res, next) => {
  const orderId = req.params.id;
  try {
    const order = await getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
});

// POST create a new order
router.post('/api/orders', async (req, res, next) => {
  const orderData = req.body;
  try {
    const newOrder = await createOrder(orderData);
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
});

// PUT update order by ID
router.put('/api/orders/:id', async (req, res, next) => {
  const orderId = req.params.id;
  const orderData = req.body;
  try {
    const updatedOrder = await updateOrder(orderId, orderData);
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
});

// DELETE order by ID
router.delete('/api/orders/:id', async (req, res, next) => {
  const orderId = req.params.id;
  try {
    const deletedOrder = await deleteOrder(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(deletedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

