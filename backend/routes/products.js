const express = require('express');
const router = express.Router();

// Example products data
const products = [
  { id: 1, name: "3D Model 1", price: 25 },
  { id: 2, name: "3D Model 2", price: 40 },
];

// GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
