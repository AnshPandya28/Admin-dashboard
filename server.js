const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Ensure environment variables are loaded

// Import routes
const ngoRoutes = require('./routes/ngoRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Import the database connection function
const connectDB = require('./db/connectDB');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
connectDB(); // This will establish the database connection

// Set up routes
app.use('/api/ngos', ngoRoutes);
app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
