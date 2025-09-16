import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample search route
app.post("/api/search", async (req, res) => {
  const { query } = req.body;
  // placeholder response
  res.json({
    product: { name: query },
    avg_sell_price: 100,
    net_profit: 25
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
