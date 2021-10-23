const express = require("express");
const cors = require("cors");

/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
require("./config/db");

// configures to access dotenv environment
require("dotenv").config();

// create express app

const port = process.env.PORT || 5002;

const app = require("express")();
require("./models/User");

const mongoose = require("mongoose");

// middleware
app.use(cors());
app.use(express.json());

require("./config/db");
require("./models/PostCommunity");

// restaurant
const restaurantRouter = require("./api/RestaurantForm");

app.use("/restaurant", restaurantRouter);
// menu
const menuRouter = require("./api/MenuForm");

app.use("/menu", menuRouter);
const CommunityPostRouter = require("./api/CommunityPageForm");
const PromotionsRouter = require("./api/PromotionsForm");

const Routes = require("./api/Register"); //

const LoginRoute = require("./api/Login"); //

const TakeawayRoute = require("./api/Takeaway") //

const ReviewRouter = require("./api/Review");
const ReplyRouter = require("./api/Reply");

// const Route = require("./api/Login"); //
// const RouteDelete = require("./api/Delete");

const UserSchemaCopy = require("./models/User");

const bodyParser = require("express").json;

app.use(bodyParser());

app.use(cors());
app.use(bodyParser());

// router to promotions database
app.use("/promotions", PromotionsRouter);
// router to post database
app.use("/post", CommunityPostRouter);
app.use(cors());

//takeaway route
app.use("/takeaway", TakeawayRoute); //

app.use("/register", Routes); //

//Review and Reply
app.use("/review", ReviewRouter);
app.use("/reply", ReplyRouter);

app.use("/login", LoginRoute);//




//delete user s
app.delete("/delete", (req, res) => {
  console.log(req.body)
  const { _id } = req.body;
  UserSchemaCopy.findByIdAndDelete({ _id }, (err, user) => {
    if (user) {
      if (_id === user._id) {
        res.json({ message: "deleted", user: user });
      } else {
        res.json({ message: "deleted" });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
