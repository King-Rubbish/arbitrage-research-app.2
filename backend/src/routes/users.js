const express = require('express');
const prisma = require('../db');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Create a user (basic example)
router.post('/', async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
