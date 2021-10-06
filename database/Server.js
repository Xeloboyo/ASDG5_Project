const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');

// configures to access dotenv environment
require('dotenv').config();

// create express app
const app = express();
const port = process.env.PORT || 5002;

// middleware
app.use(cors());
app.use(express.json());

require("./config/db");
require("./models/PostCommunity");

// restaurant 
const restaurantRouter = require("./api/RestaurantForm");
app.use('/restaurant', restaurantRouter);
// menu
const menuRouter = require("./api/MenuForm");
app.use('/menu', menuRouter);

// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require("express").json;
app.use(bodyParser());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});