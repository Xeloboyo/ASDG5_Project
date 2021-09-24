/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

const Promotions = require("../models/Promotions");

//  Promotions post
router.post("/promotionsform", (req, res) => {
  let {
    Promotions_Title,
    Promotions_Categories,
    Promotions_Description,
    Promotions_Object,
    User_ID,
  } = req.body;
  Promotions_Title = Promotions_Title.trim();
  Promotions_Categories = Promotions_Categories.trim();
  Promotions_Description = Promotions_Description.trim();
  Promotions_Object = Promotions_Object.trim();
  User_ID = User_ID.trim();
  console.log("kkkk"); // testing line
  if (
    Promotions_Title == "" ||
    Promotions_Categories == "" ||
    Promotions_Description == "" ||
    Promotions_Object == ""
  ) {
    res.json({
      status: "FAILED",
      message: "Empty input fields!",
    });
  } else {
    // Checking if user already exists

    const NewPromotions = new Promotions({
      Promotions_Title,
      Promotions_Categories,
      Promotions_Description,
      Promotions_Object,
      User_ID,
    });

    NewPromotions.save()
      .then((result) => {
        res.json({
          status: "SUCCESS",
          message: "Signup successful",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while saving user account!",
        });
        console.log(err);
      });
  }
});

// promotions update

// get all post
router.get("/", async (req, res) => {
  try {
    const posts = await Promotions.find();
    if (!posts) throw Error("No Items");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Show a post (replace :id)
router.get("/:id", async (req, res) => {
  try {
    const post = await Promotions.findById(req.params.id);
    if (!post) throw Error("No Items");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Promotions.findByIdAndDelete(req.params.id);
    if (!post) throw Error("No post found!");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//  Update a post
router.patch("/:id", async (req, res) => {
  try {
    let {
      Promotions_Title,
      Promotions_Categories,
      Promotions_Description,
      Promotions_Object,
      User_ID,
    } = req.body;
    Promotions_Title = Promotions_Title.trim();
    Promotions_Categories = Promotions_Categories.trim();
    Promotions_Description = Promotions_Description.trim();
    Promotions_Object = Promotions_Object.trim();
    User_ID = User_ID.trim();
    console.log("kkkk"); // testing line
    if (
      Promotions_Title == "" ||
      Promotions_Categories == "" ||
      Promotions_Description == "" ||
      Promotions_Object == ""
    ) {
      res.json({
        status: "FAILED",
        message: "Empty input fields!",
      });
    } else {
      // Checking if user already exists

      const UpdatePromotions = new Promotions({
        Promotions_Title,
        Promotions_Categories,
        Promotions_Description,
        Promotions_Object,
        User_ID,
      });

      const post = await Promotions.findByIdAndUpdate(
        req.params.id,
        UpdatePromotions
      );
      if (!post) throw Error("Something went wrong while updating the post");
      res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
