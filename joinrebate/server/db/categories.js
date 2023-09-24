const { client } = require('./client');

// Create a new category
async function createCategory(categoryData) {
  try {
    const query = `
      INSERT INTO categories (name)
      VALUES ($1)
      RETURNING *;
    `;

    const values = [categoryData.name];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Get a list of all categories
async function getAllCategories() {
  try {
    const query = 'SELECT * FROM categories;';
    const result = await client.query(query);

    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Get a single category by ID
async function getCategoryById(categoryId) {
  try {
    const query = 'SELECT * FROM categories WHERE id = $1;';
    const result = await client.query(query, [categoryId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Update a category by ID
async function updateCategory(categoryId, categoryData) {
  try {
    const query = `
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *;
    `;

    const values = [categoryData.name, categoryId];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

// Delete a category by ID
async function deleteCategory(categoryId) {
  try {
    const query = 'DELETE FROM categories WHERE id = $1 RETURNING *;';
    const result = await client.query(query, [categoryId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
