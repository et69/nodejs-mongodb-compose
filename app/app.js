const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

// MongoDB connection string with environment variables
const mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@mongo:27017/${process.env.MONGO_DB}?authSource=admin`;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB with authentication');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World with MongoDB and authentication!');
});

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

