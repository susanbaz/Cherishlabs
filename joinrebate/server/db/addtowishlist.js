const { client } = require('./client');

// Add a product to the wishlist
async function addToWishlist(wishlistData) {
  try {
    const query = `
      INSERT INTO addtowishlist (user_id, product_id)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const values = [wishlistData.user_id, wishlistData.product_id];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get wishlist items by user ID
async function getWishlistByUserId(userId) {
  try {
    const query = 'SELECT * FROM addtowishlist WHERE user_id = $1;';
    const result = await client.query(query, [userId]);

    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Remove a product from the wishlist by user ID and product ID
async function removeFromWishlist(userId, productId) {
  try {
    const query = `
      DELETE FROM addtowishlist
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
  addToWishlist,
  getWishlistByUserId,
  removeFromWishlist,
};
