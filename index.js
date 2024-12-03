const express = require('express');
const app = express();
const functions = require("firebase-functions");
const cors = require('cors'); // CORS middleware

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes (this is essential if your frontend and backend are on different domains/ports)
app.use(cors());

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Import route files
const postRoutes = require('./routes/postRoutes');
const getRoutes = require('./routes/getRoutes');
const putRoutes = require('./routes/putRoutes');
const deleteRoutes = require('./routes/deleteRoutes');
const patchRoutes = require('./routes/patchRoutes');

// Register routes
app.use('/api', postRoutes);  // Handles POST for all resources
app.use('/api', getRoutes);   // Handles GET for all resources
app.use('/api', putRoutes);   // Handles PUT for all resources
app.use('/api', deleteRoutes); // Handles DELETE for all resources
app.use('/api', patchRoutes);  // Handles PATCH for all resources

// Firebase function exports
exports.api = functions.https.onRequest(app);
