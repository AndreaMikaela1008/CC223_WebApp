const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

// Create an API route
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});