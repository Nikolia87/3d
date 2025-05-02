const express = require('express');
const path = require('path'); // For resolving file paths
const app = express();
const PORT = 3000;

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Import routes
const productsRouter = require('./routes/products');
const servicesRouter = require('./routes/services');

// Use API routes
app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);

// Root route - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
