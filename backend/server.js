
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const techNewsRoutes = require('./routes/techNewsRoutes.js')
PORT=4000

const app = express();

app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// setting up the API - 
app.use ('/api/techNews', techNewsRoutes)

app.listen( PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
