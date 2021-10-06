const express = require("express");
const cors = require("cors");

/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
require("./config/db");

// configures to access dotenv environment
require("dotenv").config();

<<<<<<< HEAD
=======
// create express app

const port = process.env.PORT || 5002;

>>>>>>> master
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

const ReviewRouter = require("./api/Review");
const ReplyRouter = require("./api/Reply");

const Route = require("./api/Login"); //
// const RouteDelete = require("./api/Delete");

const UserSchemaCopy = require("./models/User");

// const userSchema = new mongoose.Schema({
//   User_Email: String,
//   User_Password: String,
// });

// const User = new mongoose.model("User", userSchema);

// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require("express").json;

app.use(bodyParser());

app.use(cors());
app.use(bodyParser());

// router to promotions database
app.use("/promotions", PromotionsRouter);
// router to post database
app.use("/post", CommunityPostRouter);
app.use(cors());

app.use("/register", Routes); //

//Review and Reply
app.use("/review", ReviewRouter);
app.use("/reply", ReplyRouter);

app.use("/login", LoginRoute);//


//login user s
app.post("/login", (req, res) => {
  console.log(req.body);
  const { User_Email, User_Password } = req.body;
  // eslint-disable-next-line object-shorthand
  UserSchemaCopy.findOne({ User_Email: User_Email }, (err, user) => {
    if (user) {
      if (User_Password === user.User_Password) {
        // eslint-disable-next-line object-shorthand
        res.json({ message: "login success", user: user });
      } else {
        res.json({ message: "wrong credentials" });
      }
    }
  });
});

<<<<<<< HEAD
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

=======
>>>>>>> master
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
