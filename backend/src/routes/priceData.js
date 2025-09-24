const express = require('express');
const prisma = require('../db');

const router = express.Router();

// Get all price data
router.get('/', async (req, res) => {
  try {
    const prices = await prisma.priceData.findMany();
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch price data' });
  }
});

// Add new price data
router.post('/', async (req, res) => {
  try {
    const price = await prisma.priceData.create({ data: req.body });
    res.json(price);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create price data' });
  }
});

module.exports = router;
