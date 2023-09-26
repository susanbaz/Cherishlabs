const express = require('express');
const router = express.Router();

const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct, getCategoryByProductId } = require('../db/products');

// GET all products
router.get('/', async (req, res, next) => {
  try {
    const productsData = await getAllProducts();
    res.json(productsData);
  } catch (error) {
    next(error);
  }
});

// GET product by ID
router.get('/:id', async (req, res, next) => {
  const productId = req.params.id;
  try {
    const productData = await getProductById(productId);
    if (!productData) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(productData);
  } catch (error) {
    next(error);
  }
});

// POST create a new product
router.post('/', async (req, res, next) => {
  
  const { title, size, colors, quantity, description, price, mediaLocation, category_id } = req.body;
  try {
    const newProduct = await createProduct({
      title,
      size,
      colors,
      quantity,
      description,
      price,
      mediaLocation,
      category_id,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

// PUT update product by ID
router.put('/:id', async (req, res, next) => {
  const productId = req.params.id;
  const { title, size, colors, quantity, description, price, mediaLocation, category_id } = req.body;
  try {
    const updatedProduct = await updateProduct(productId, {
      title,
      size,
      colors,
      quantity,
      description,
      price,
      mediaLocation,
      category_id,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

// DELETE product by ID
router.delete('/:id', async (req, res, next) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await deleteProduct(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
});

//get category by product ID
router.get('/:id/category', async (req, res, next) => {
  const productId = req.params.id;
  try {
    const categoryData = await getCategoryByProductId(productId);
    if (!categoryData) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(categoryData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
