if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

const UserSchemaCopy = require("../models/User");

//login user s
router.post("/", async (req, res) => {
  console.log(req.body);
  const { User_Email, User_Password } = req.body;
  // eslint-disable-next-line object-shorthand
  try {
    const existingUser = await UserSchemaCopy.findOne({ User_Email });
    console.log(existingUser)
    if(!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      User_Password,
      existingUser.User_Password
    );
    console.log(isPasswordCorrect)
    // if (!isPasswordCorrect)
    //   res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { email: existingUser.User_Email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    console.log(token)
    res.status(200).json({ result: existingUser, token });
} catch (error) {
  console.log(error)
  res.status(500).json({ message: "Something went wrong" });
}
  // });
  // , (err, user) => {
  //   if (user) {
  //     if (User_Password === user.User_Password) {
  //       // eslint-disable-next-line object-shorthand
  //       res.json({ message: "login success", user: user });
  //     } else {
  //       console.log(err)
  //       res.json({ message: "wrong credentials" });
  //     }
  //   }
});

//login user L
router.post("/form", (req, res) => {
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
router.delete("/delete", async (req, res) => {
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
router.get("/", async (req, res) => {
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
