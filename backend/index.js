const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Use express.json() for parsing JSON bodies
app.use(express.json());

// Allow CORS (adjust origin as needed)
app.use(cors());

let latestAnswer = ''; // In-memory storage

// POST endpoint to receive data
app.post('/api/create-answer', (req, res) => {
    const { data } = req.body;

    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid data format' });
    }

    latestAnswer = data;
    console.log('Received data:', data);
    res.status(200).json({ message: 'Data received' });
});

// GET endpoint to retrieve latest data
app.get('/api/get-latest-answer', (req, res) => {
    res.json({ data: latestAnswer });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
