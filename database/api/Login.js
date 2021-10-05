const express = require("express");

const app = express();

const router = express.Router()

const UserSchemaCopy = require("../models/User");

//login user
app.post("/form", (req, res) => {
    const { User_Email,  User_Password } = req.body;
    User.findOne({ User_Email: User_Email }, (err, user) => {
      if (user) {
        if (User_Password === user.User_Password) {
          console.log('user logged in')
          // res.send({ message: "login success", user: user });
        } else {
          console.log('errroooor')
          // res.send({ message: "wrong credentials" });
        }
      }
    });
  });


//delete user
app.delete("/delete", (req, res) => {
  const { User_Email } = req.body;
  User.findOne({ User_Email: User_Email }, (err, user) => {
    if (user) {
      if (User_Email === user.User_Email) {
        console.log('user deleted')
        // res.send({ message: "deleted" });
      } else {
        console.log('errroooor')
        // res.send({ message: "error" });
      }
    }
  });
});



module.exports= router