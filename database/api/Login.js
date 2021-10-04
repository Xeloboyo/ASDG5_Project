const express = require("express");

const app = express();

const router = express.Router();

const UserSchemaCopy = require("../models/User");

//routes routes
app.post("/form", (req, res) => {
  const { User_Email, User_Password } = req.body;
  User.findOne({ User_Email: User_Email }, (err, user) => {
    if (user) {
      if (User_Password === user.User_Password) {
        console.log("user logged in");
        // res.send({ message: "login success", user: user });
      } else {
        console.log("errroooor");
        // res.send({ message: "wrong credentials" });
      }
    }
  });
});

//could be FormSignup and FormSignUpRestaurant, make a second one of each for the  restaurant admin registration

module.exports = router;
