const express = require("express");

const app = express();

const router = express.Router();

const UserSchemaCopy = require("../models/User");

//login user L
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


//delete user L
app.delete("/delete", async (req, res) => {
  try {
    let { _id } = req.body;
    console.log(_id);
    const user = await UserSchemaCopy.findByIdAndDelete(_id);
    if (!user) throw Error("Error!");
    res.json({
      status: "Deleted",
      message: "Deleted!",
      data: user,
    });
  } catch (err) {
    res.json({
      message: err,
    });
    console.log(err);
  }
});

//Get user L
app.get("/", async (req, res) => {
  try {
    const user = await UserSchemaCopy.find();
    if (!user) throw Error("No user");
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});



module.exports = router;
