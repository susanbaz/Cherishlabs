const { client } = require('./client');

// Create new payment information
async function createPayment(paymentData) {
  try {
    const query = `
      INSERT INTO payment (
        user_id, payment_method, card_number, expiration_date, cvv, billing_id, total
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const values = [
      paymentData.user_id,
      paymentData.payment_method,
      paymentData.card_number,
      paymentData.expiration_date,
      paymentData.cvv,
      paymentData.billing_id,
      paymentData.total,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get payment information by user ID
async function getPaymentByUserId(userId) {
  try {
    const query = 'SELECT * FROM payment WHERE user_id = $1;';
    const result = await client.query(query, [userId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Update payment information by user ID
async function updatePaymentByUserId(userId, paymentData) {
  try {
    const query = `
      UPDATE payment
      SET
        payment_method = $2,
        card_number = $3,
        expiration_date = $4,
        cvv = $5,
        billing_id = $6,
        total = $7
      WHERE user_id = $1
      RETURNING *;
    `;

    const values = [
      userId,
      paymentData.payment_method,
      paymentData.card_number,
      paymentData.expiration_date,
      paymentData.cvv,
      paymentData.billing_id,
      paymentData.total,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createPayment,
  getPaymentByUserId,
  updatePaymentByUserId,
};
