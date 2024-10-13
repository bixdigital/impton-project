// Load environment variables from .env file
require('dotenv').config();


const TelegramBot = require('node-telegram-bot-api');

// Securely access the bot token from the environment variable
const token = process.env.BOT_API_KEY;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/start"
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // URL for your website
    const websiteUrl = "https://impton.vercel.app/"; // Update the URL to your current site

    // Reply with a message containing an inline button that links to your website
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Visit IMPACT TON', url: websiteUrl }]
            ]
        }
    };

    bot.sendMessage(chatId, "Welcome to IMPACT TON! Click the button below to visit the website.", opts);
});
