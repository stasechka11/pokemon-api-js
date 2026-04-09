require('dotenv').config();

const config = {
  baseUrl: process.env.BASE_URL,
  trainerToken: process.env.TRAINER_TOKEN,
};

if (!config.baseUrl) {
  throw new Error('BASE_URL is not set in .env');
}

if (!config.trainerToken) {
  throw new Error('TRAINER_TOKEN is not set in .env');
}

module.exports = { config };