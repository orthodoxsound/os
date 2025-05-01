const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/server-info', async (req, res) => {
  try {
    const response = await fetch('https://discord.com/api/guilds/1366907427185889443/widget.json');
    const data = await response.json();
    res.json({
      name: data.name,
      memberCount: data.presence_count
    });
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    res.status(500).json({ error: 'Failed to load server info' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
