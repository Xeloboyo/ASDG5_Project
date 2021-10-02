/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

const Promotions = require("../models/Promotions");

//  Promotions post
router.post("/", (req, res) => {
  let {
    Promotions_Title,
    Promotions_Categories,
    Promotions_Description,
    Promotions_Object,
    User_ID,
  } = req.body;

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

// get all promotions
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

// get latetess promotions
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

// get a promotions by id (replace :id)
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

// search function
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
    if (!post) throw Error("No Items");
    res.json({
      message: "Gotten",
      data: post,
    });
    // res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// get category promtoions
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
    // res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Delete a post
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
    // res.status(200).json({ success: true });
  } catch (err) {
    res.json({
      message: err,
    });
    console.log(err);
  }
});

//  Update a post
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
      // if (!post) throw Error("Something went wrong while updating the post");
      // res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ msg: err });
    console.log(err);
  }
});

module.exports = router;
