const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Your Telegram Bot API key (Keep this safe!)
const TELEGRAM_BOT_API = process.env.TELEGRAM_BOT_API;

// Enable JSON parsing for POST requests
app.use(express.json());

// Example endpoint to send messages via Telegram Bot API
app.post('/send-message', (req, res) => {
    const { chat_id, message } = req.body;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_API}/sendMessage`, {
        chat_id,
        text: message
    })
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json({ error: error.toString() }));
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
