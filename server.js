const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // MongoDB connection
const developerRoutes = require("./routes/developerRoutes"); // Import routes
const projectRoutes = require("./routes/projectRoutes"); // Import routes
const seriesRoutes = require("./routes/seriesRoutes"); // Import routes
const towerRoutes = require("./routes/towerRoutes"); // Import routes
dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
connectDB();

// Use developer routes
app.use("/api/developers", developerRoutes); // Base route for developers
app.use("/api/projects", projectRoutes);
app.use("/api/towers", towerRoutes);
app.use("/api/series", seriesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
