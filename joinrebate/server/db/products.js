const { client } = require('./client');


// Create a new product
async function createProduct(Products) {
  try {
    const query = `
      INSERT INTO products (title, size, colors, quantity, description, price, mediaLocation, category_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;

    const values = [
      productData.title,
      productData.size,
      productData.colors,
      productData.quantity,
      productData.description,
      productData.price,
      productData.mediaLocation,
      productData.category_id,
    
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}


// Get a list of all products
async function getAllProducts() {
  try {
  
    const productsData = 'SELECT * FROM products;';
    const result = await client.query(productsData);

    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Get a single product by ID
async function getProductById(productId) {
  try {
    const query = 'SELECT * FROM products WHERE id = $1;';
    const result = await client.query(query, [productId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

//get the category from the product
async function getCategoryByProductId(productId) {
  try {
    const { rows: [ category ] } = await client.query(`
      SELECT *
      FROM categories
      JOIN products ON products.category_id = categories.id
      WHERE products.id = $1;
    `, [productId]);

    return category;
  } catch (error) {
    throw error;
  }
}

// Update a product by ID
async function updateProduct(productId, productData) {
  try {
    const query = `
      UPDATE products
      SET title = $1, size = $2, colors = $3, quantity = $4, description = $5, price = $6, mediaLocation = $7, category_id = $8
      WHERE id = $9
      RETURNING *;
    `;

    const values = [
      productData.title,
      productData.size,
      productData.colors,
      productData.quantity,
      productData.description,
      productData.price,
      productData.mediaLocation,
      productData.category_id,
      productId,
    ];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Delete a product by ID
async function deleteProduct(productId) {
  try {
    const query = 'DELETE FROM products WHERE id = $1 RETURNING *;';
    const result = await client.query(query, [productId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getCategoryByProductId,
};
