const { client } = require('./client');

// Create new shipping information
async function createShipping(shippingData) {
  try {
    const query = `
      INSERT INTO shipping (
        user_id, first_name, last_name, email, phone_number, address, city, state, zip,
        shipping_method, shipping_status, shipping_cost, shipping_date, tracking_number, tracking_status
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING *;
    `;

    const values = [
      shippingData.user_id,
      shippingData.first_name,
      shippingData.last_name,
      shippingData.email,
      shippingData.phone_number,
      shippingData.address,
      shippingData.city,
      shippingData.state,
      shippingData.zip,
      shippingData.shipping_method,
      shippingData.shipping_status,
      shippingData.shipping_cost,
      shippingData.shipping_date,
      shippingData.tracking_number,
      shippingData.tracking_status,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get shipping information by user ID
async function getShippingByUserId(userId) {
  try {
    const query = 'SELECT * FROM shipping WHERE user_id = $1;';
    const result = await client.query(query, [userId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Update shipping information by user ID
async function updateShippingByUserId(userId, shippingData) {
  try {
    const query = `
      UPDATE shipping
      SET
        first_name = $2,
        last_name = $3,
        email = $4,
        phone_number = $5,
        address = $6,
        city = $7,
        state = $8,
        zip = $9,
        shipping_method = $10,
        shipping_status = $11,
        shipping_cost = $12,
        shipping_date = $13,
        tracking_number = $14,
        tracking_status = $15
      WHERE user_id = $1
      RETURNING *;
    `;

    const values = [
      userId,
      shippingData.first_name,
      shippingData.last_name,
      shippingData.email,
      shippingData.phone_number,
      shippingData.address,
      shippingData.city,
      shippingData.state,
      shippingData.zip,
      shippingData.shipping_method,
      shippingData.shipping_status,
      shippingData.shipping_cost,
      shippingData.shipping_date,
      shippingData.tracking_number,
      shippingData.tracking_status,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createShipping,
  getShippingByUserId,
  updateShippingByUserId,
};
