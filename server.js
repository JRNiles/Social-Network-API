// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");

// Create an instance of Express
const app = express();

// Configure middleware
app.use(express.json()); // Parse incoming request bodies in JSON format
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Connect to MongoDB database
mongoose.connect("mongodb://localhost/social_network_db");

// Check for database connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the MongoDB database");
});

// Define your API routes here
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require("./routes/api/thoughtRoutes");


app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);



// Define port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
