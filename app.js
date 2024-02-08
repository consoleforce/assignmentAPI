const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve JSON data
app.get('/data', async (req, res) => {
    try {
        // Fetch JSON data from your URL
        const response = await fetch('YOUR_JSON_URL');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
