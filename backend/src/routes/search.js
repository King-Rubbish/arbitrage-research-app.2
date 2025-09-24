const express = require('express');
const prisma = require('../db');

const router = express.Router();

// Search products by keyword
router.get('/:keyword', async (req, res) => {
  try {
    const results = await prisma.product.findMany({
      where: {
        name: {
          contains: req.params.keyword,
          mode: 'insensitive'
        }
      }
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;
