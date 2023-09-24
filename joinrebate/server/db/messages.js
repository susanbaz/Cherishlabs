const { client } = require('./client');

// Create a new message
async function createMessage(messageData) {
  try {
    const query = `
      INSERT INTO messages (user_id, message)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const values = [messageData.user_id, messageData.message];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get a list of all messages
async function getAllMessages() {
  try {
    const query = 'SELECT * FROM messages;';
    const result = await client.query(query);

    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Get a single message by ID
async function getMessageById(messageId) {
  try {
    const query = 'SELECT * FROM messages WHERE id = $1;';
    const result = await client.query(query, [messageId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Update a message by ID
async function updateMessage(messageId, messageData) {
  try {
    const query = `
      UPDATE messages
      SET user_id = $1, message = $2
      WHERE id = $3
      RETURNING *;
    `;

    const values = [messageData.user_id, messageData.message, messageId];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Delete a message by ID
async function deleteMessage(messageId) {
  try {
    const query = 'DELETE FROM messages WHERE id = $1 RETURNING *;';
    const result = await client.query(query, [messageId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};
