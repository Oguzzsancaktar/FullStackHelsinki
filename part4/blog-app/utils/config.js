require('dotenv').config();

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;
module.exports = { port, mongoUrl };
