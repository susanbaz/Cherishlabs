const express = require('express');
const router = express.Router();

const {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
} = require('../db/messages');

// GET all messages
router.get('/api/messages', async (req, res, next) => {
  try {
    const messages = await getAllMessages();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

// GET message by ID
router.get('/api/messages/:id', async (req, res, next) => {
  const messageId = req.params.id;
  try {
    const message = await getMessageById(messageId);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    next(error);
  }
});

// POST create a new message
router.post('/api/messages', async (req, res, next) => {
  const messageData = req.body;
  try {
    const newMessage = await createMessage(messageData);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
});

// PUT update message by ID
router.put('/api/messages/:id', async (req, res, next) => {
  const messageId = req.params.id;
  const messageData = req.body;
  try {
    const updatedMessage = await updateMessage(messageId, messageData);
    if (!updatedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(updatedMessage);
  } catch (error) {
    next(error);
  }
});

// DELETE message by ID
router.delete('/api/messages/:id', async (req, res, next) => {
  const messageId = req.params.id;
  try {
    const deletedMessage = await deleteMessage(messageId);
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(deletedMessage);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
