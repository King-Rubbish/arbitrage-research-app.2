const express = require('express');
const prisma = require('../db');

const router = express.Router();

// Get all watchlist entries
router.get('/', async (req, res) => {
  try {
    const watchlist = await prisma.watchlist.findMany();
    res.json(watchlist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch watchlist' });
  }
});

// Add to watchlist
router.post('/', async (req, res) => {
  try {
    const item = await prisma.watchlist.create({ data: req.body });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add to watchlist' });
  }
});

module.exports = router;
