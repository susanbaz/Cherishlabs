const express = require('express');
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../db/categories');

// GET all categories
router.get('/api/categories', async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

// GET category by ID
router.get('/api/categories/:id', async (req, res, next) => {
  const categoryId = req.params.id;
  try {
    const category = await getCategoryById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
});

// POST create a new category
router.post('/api/categories', async (req, res, next) => {
  const categoryData = req.body;
  try {
    const newCategory = await createCategory(categoryData);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

// PUT update category by ID
router.put('/api/categories/:id', async (req, res, next) => {
  const categoryId = req.params.id;
  const categoryData = req.body;
  try {
    const updatedCategory = await updateCategory(categoryId, categoryData);
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    next(error);
  }
});

// DELETE category by ID
router.delete('/api/categories/:id', async (req, res, next) => {
  const categoryId = req.params.id;
  try {
    const deletedCategory = await deleteCategory(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(deletedCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
