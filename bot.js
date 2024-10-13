require('dotenv').config(); // Load environment variables from .env file
const TelegramBot = require('node-telegram-bot-api');

// Your bot token from the .env file
const token = process.env.TELEGRAM_BOT_API;

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
