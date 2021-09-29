// const express = require('express');
// const mongoose = require('mongoose'); used inside db.js
const bodyParser = require('body-parser');

require('./config/db');

require('./models/PostCommunity');

const app = require('express')();
// app.use = express();

const UserRouter = require('./api/CommunityPageForm');

// For accepting post form data
// eslint-disable-next-line import/order
// const bodyParser = require('express').json;

// BodyParser Middleware
// app.use(bodyParser());
app.use(bodyParser.json());

app.use('/post', UserRouter);

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
