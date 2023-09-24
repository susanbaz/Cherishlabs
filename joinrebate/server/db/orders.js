const { client } = require('./client');

// Create a new order
async function createOrder(orderData) {
  try {
    const query = `
      INSERT INTO orders (
        user_id,
        product_id,
        quantity,
        total,
        shipping_id,
        billing_id,
        payment_status,
        payment_type,
        order_status,
        ship_status,
        date_placed
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *;
    `;

    const values = [
      orderData.user_id,
      orderData.product_id,
      orderData.quantity,
      orderData.total,
      orderData.shipping_id,
      orderData.billing_id,
      orderData.payment_status,
      orderData.payment_type,
      orderData.order_status,
      orderData.ship_status,
      orderData.date_placed,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get a list of all orders
async function getAllOrders() {
  try {
    const query = 'SELECT * FROM orders;';
    const result = await client.query(query);

    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Get an order by ID
async function getOrderById(orderId) {
  try {
    const query = 'SELECT * FROM orders WHERE id = $1;';
    const result = await client.query(query, [orderId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Update an order by ID
async function updateOrder(orderId, orderData) {
  try {
    const query = `
      UPDATE orders
      SET user_id = $1,
          product_id = $2,
          quantity = $3,
          total = $4,
          shipping_id = $5,
          billing_id = $6,
          payment_status = $7,
          payment_type = $8,
          order_status = $9,
          ship_status = $10,
          date_placed = $11
      WHERE id = $12
      RETURNING *;
    `;

    const values = [
      orderData.user_id,
      orderData.product_id,
      orderData.quantity,
      orderData.total,
      orderData.shipping_id,
      orderData.billing_id,
      orderData.payment_status,
      orderData.payment_type,
      orderData.order_status,
      orderData.ship_status,
      orderData.date_placed,
      orderId,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Delete an order by ID
async function deleteOrder(orderId) {
  try {
    const query = 'DELETE FROM orders WHERE id = $1 RETURNING *;';
    const result = await client.query(query, [orderId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
