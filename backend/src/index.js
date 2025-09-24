require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prisma = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const priceDataRoute = require('./routes/priceData');
const watchlistRoute = require('./routes/watchlist');
const searchRoute = require('./routes/search');

app.use('/users', usersRoute);
app.use('/products', productsRoute);
app.use('/price-data', priceDataRoute);
app.use('/watchlist', watchlistRoute);
app.use('/search', searchRoute);

// Health check / root route
app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
