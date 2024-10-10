const express = require('express');
const bodyParser = require('body-parser');
const travelRoutes = require('./routes/travel');
const cors = require('cors'); // Ensure CORS is allowed if needed

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// API routes
app.use('/api', travelRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
