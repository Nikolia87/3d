const express = require('express');
const router = express.Router();

// Example services data
const services = [
  { id: 1, name: "PLA Printing", pricePerGram: 0.2 },
  { id: 2, name: "ABS Printing", pricePerGram: 0.3 },
];

// GET /api/services
router.get('/', (req, res) => {
  res.json(services);
});

module.exports = router;
