const express = require('express');
const prisma = require('../db');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Add a product
router.post('/', async (req, res) => {
  try {
    const product = await prisma.product.create({ data: req.body });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

module.exports = router;
