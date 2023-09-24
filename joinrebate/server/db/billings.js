const { client } = require('./client');

// Create new billing information
async function createBilling(billingData) {
  try {
    const query = `
      INSERT INTO billing (user_id, first_name, last_name, email, phone_number, address, city, state, zip, payment_method)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
    `;

    const values = [
      billingData.user_id,
      billingData.first_name,
      billingData.last_name,
      billingData.email,
      billingData.phone_number,
      billingData.address,
      billingData.city,
      billingData.state,
      billingData.zip,
      billingData.payment_method,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get billing information by user ID
async function getBillingByUserId(userId) {
  try {
    const query = 'SELECT * FROM billing WHERE user_id = $1;';
    const result = await client.query(query, [userId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Update billing information by user ID
async function updateBillingByUserId(userId, billingData) {
  try {
    const query = `
      UPDATE billing
      SET
        first_name = $2,
        last_name = $3,
        email = $4,
        phone_number = $5,
        address = $6,
        city = $7,
        state = $8,
        zip = $9,
        payment_method = $10
      WHERE user_id = $1
      RETURNING *;
    `;

    const values = [
      userId,
      billingData.first_name,
      billingData.last_name,
      billingData.email,
      billingData.phone_number,
      billingData.address,
      billingData.city,
      billingData.state,
      billingData.zip,
      billingData.payment_method,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createBilling,
  getBillingByUserId,
  updateBillingByUserId,
};
