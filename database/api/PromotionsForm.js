/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

const Promotions = require("../models/Promotions");

//  Create Promotions post
router.post("/", (req, res) => {
  let {
    Promotions_Title,
    Promotions_Categories,
    Promotions_Description,
    Promotions_Object,
    User_ID,
  } = req.body;

  // Checking if input is empty
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
          message: "Promotion successful",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while creating promotion!",
        });
        console.log(err);
      });
  }
});

// Get all promotions
router.get("/promotionspast", async (req, res) => {
  try {
    const posts = await Promotions.find();
    if (!posts) throw Error("No Items");
    res.status(200).json(posts);
  } catch (err) {
    res.json({
      status: "FAILED",
      message: "An error occurred while saving user account!",
    });
    console.log(err);
  }
});

// Get most recent promotions
router.get("/promotionshome", async (req, res) => {
  try {
    const posts = await Promotions.findOne()
      .sort({ field: "asc", _id: -1 })
      .limit(1);
    if (!posts) throw Error("No Items");
    res.status(200).json(posts);
  } catch (err) {
    res.json({
      status: "FAILED",
      message: "An error occurred while saving user account!",
    });
    console.log(err);
  }
});

// Get a promotions by id
router.post("/getones", async (req, res) => {
  try {
    let { PostID } = req.body;
    const post = await Promotions.findById(PostID);
    console.log(post);
    if (post == null) {
      res.json({
        message: "Empty",
        data: "",
      });
    } else {
      res.json({
        message: "One post",
        data: post,
      });
    }
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Search Post in database
router.post("/getsearch", async (req, res) => {
  try {
    let { search } = req.body;
    const post = await Promotions.find({
      $or: [
        { Promotions_Title: { $regex: ".*" + search + ".*" } },
        { Promotions_Categories: { $regex: ".*" + search + ".*" } },
        { Promotions_Description: { $regex: ".*" + search + ".*" } },
      ],
    });
    console.log(post);
    if (post.length == 0) {
      res.json({
        message: "Empty",
        data: "",
      });
    } else {
      res.json({
        message: "Gotten",
        data: post,
      });
    }
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Get promtoions by category
router.post("/getcategory", async (req, res) => {
  try {
    let { search } = req.body;
    const post = await Promotions.find({
      Promotions_Categories: { $regex: ".*" + search + ".*" },
    });
    if (!post) throw Error("No Items");
    res.json({
      message: "Gotten",
      data: post,
    });
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Delete a promotions
router.post("/deletepost", async (req, res) => {
  try {
    let { _id } = req.body;
    const post = await Promotions.findByIdAndDelete(_id);
    if (!post) throw Error("No post found!");
    res.json({
      status: "SUCCESS",
      message: "Deleted Post!",
      data: post,
    });
  } catch (err) {
    res.json({
      message: err,
    });
    console.log(err);
  }
});

// Update a promtoions
router.put("/promotionsupdate", async (req, res) => {
  try {
    let {
      PostID,
      Promotions_Title,
      Promotions_Categories,
      Promotions_Description,
      Promotions_Object,
      User_ID,
    } = req.body;

    // Checking if input is empty
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
      const UpdatePromotions = new Promotions({
        Promotions_Title,
        Promotions_Categories,
        Promotions_Description,
        Promotions_Object,
        User_ID,
      });

      const post = await Promotions.findByIdAndUpdate(
        PostID,
        {
          $set: req.body,
        },
        { new: true, useFindAndModify: false }
      );
      if (!post) {
        res.json({
          message: "Empty",
          data: "",
        });
      } else {
        res.json({
          status: "SUCCESS",
          message: "Updated Completed!",
          data: req.body,
        });
      }
    }
  } catch (err) {
    res.status(400).json({ msg: err });
    console.log(err);
  }
});

module.exports = router;
