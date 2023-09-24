const { client } = require('./client');

// Add a product to the shopping cart
async function addToCart(cartData) {
  try {
    const query = `
      INSERT INTO addtocart (
        user_id, product_id, quantity, total
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [
      cartData.user_id,
      cartData.product_id,
      cartData.quantity,
      cartData.total,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get shopping cart contents by user ID
async function getCartByUserId(userId) {
  try {
    const query = 'SELECT * FROM addtocart WHERE user_id = $1;';
    const result = await client.query(query, [userId]);

    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Update shopping cart item quantity by user ID and product ID
async function updateCartItemQuantity(userId, productId, quantity) {
  try {
    const query = `
      UPDATE addtocart
      SET quantity = $3
      WHERE user_id = $1 AND product_id = $2
      RETURNING *;
    `;

    const values = [userId, productId, quantity];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Remove a product from the shopping cart by user ID and product ID
async function removeFromCart(userId, productId) {
  try {
    const query = `
      DELETE FROM addtocart
      WHERE user_id = $1 AND product_id = $2
      RETURNING *;
    `;

    const values = [userId, productId];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addToCart,
  getCartByUserId,
  updateCartItemQuantity,
  removeFromCart,
};
