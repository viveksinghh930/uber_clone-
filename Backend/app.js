const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb=require('./db/db');
connectToDb();
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/about', (req, res) => {
  res.send('This is the about page');
});

module.exports = app;
