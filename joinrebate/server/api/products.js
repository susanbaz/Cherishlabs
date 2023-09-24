const express = require('express');
const router = express.Router();
const multer = require('multer'); // For handling file uploads
const path = require('path');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../db/products');



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
    const roductsData = await getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(ProductsData);
  } catch (error) {
    next(error);
  }
});

// POST create a new product
router.post('/'), async (req, res, next) => {
  // Handle the uploaded file here if needed
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
};

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

module.exports = router;
