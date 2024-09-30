const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Routes
const developerRoutes = require('./routes/developerRoutes');
const projectRoutes = require('./routes/projectRoutes');
const towerRoutes = require('./routes/towerRoutes');
const seriesRoutes = require('./routes/seriesRoutes');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Use Routes
app.use('/api/developers', developerRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/towers', towerRoutes);
app.use('/api/series', seriesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
