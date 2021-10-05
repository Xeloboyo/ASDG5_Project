/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */  
const express = require("express");

const router = express.Router();

// mongodb user model
const PostCommunity = require("../models/PostCommunity");

//  Comunity post
router.post("/communitypageform", (req, res) => {
  let {
    Post_Community_Title,
    Post_Community_Category,
    Post_Paragraph,
    Post_Edited,
    User_ID,
  } = req.body;
  Post_Community_Title = Post_Community_Title.trim();
  Post_Community_Category = Post_Community_Category.trim();
  Post_Paragraph = Post_Paragraph.trim();
  Post_Edited = Post_Edited.trim();
  User_ID = User_ID.trim();
  console.log("ffff"); // testing line
  if (
    Post_Community_Title == "" ||
    Post_Community_Category == "" ||
    Post_Paragraph == ""
  ) {
    res.json({
      status: "FAILED",
      message: "Empty input fields!",
    });
  } else {
    // Checking if user already exists

    const NewPostCommunity = new PostCommunity({
      Post_Community_Title,
      Post_Community_Category,
      Post_Paragraph,
      Post_Edited,
      User_ID,
    });

    NewPostCommunity.save()
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

// get a post by id (replace :id)
router.get("/getone", async (req, res) => {
  try {
    let { _id } = req.body;
    const post = await PostCommunity.findById(_id);
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

// search function
router.get("/getsearch", async (req, res) => {
  try {
    let { search } = req.body;
    const post = await PostCommunity.find({
      $or: [
        { Post_Community_Title: { $regex: ".*" + search + ".*" } },
        { Post_Paragraph: { $regex: ".*" + search + ".*" } },
        { Post_Community_Category: { $regex: ".*" + search + ".*" } },
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

router.get("/getcategory", async (req, res) => {
  try {
    let { search } = req.body;
    const post = await PostCommunity.find({
      Post_Community_Category: { $regex: ".*" + search + ".*" },
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
router.delete("/deletepost", async (req, res) => {
  try {
    let { _id } = req.body;
    const post = await PostCommunity.findByIdAndDelete(_id);
    if (!post) throw Error("No post found!");
    res.json({
      message: "Gotdeletedten",
      data: post,
    });
    // res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//  Update a post
router.put("/communitypageedits", async (req, res) => {
  console.log("ffjjff");
  try {
    let {
      _id,
      Post_Community_Title,
      Post_Community_Category,
      Post_Paragraph,
      Post_Edited,
      User_ID,
    } = req.body;

    Post_Community_Title = Post_Community_Title.trim();
    Post_Community_Category = Post_Community_Category.trim();
    Post_Paragraph = Post_Paragraph.trim();
    Post_Edited = Post_Edited.trim();
    User_ID = User_ID.trim();
    console.log("ffj2jff"); // testing line
    if (
      Post_Community_Title == "" ||
      Post_Community_Category == "" ||
      Post_Paragraph == ""
    ) {
      res.json({
        status: "FAILED",
        message: "Empty input fields!",
      });
    } else {
      // Checking if user already exists

      const UpdatePostCommunity = PostCommunity({
        Post_Community_Title,
        Post_Community_Category,
        Post_Paragraph,
        Post_Edited,
        User_ID,
      });
      console.log("aple");
      const post = await PostCommunity.findByIdAndUpdate(
        _id,
        {
          $set: req.body,
        },
        { new: true, useFindAndModify: false }
      );
      res.json({
        message: "Done",
        data: req.body,
      });

      if (!post) throw Error("Something went wrong while updating the post");
      // res.status(200).json({ success: true });
      // return;
    }
  } catch (err) {
    res.status(400).json({ msg: err });
    console.log(err);
  }
});

// get all post
router.get("/", async (req, res) => {
  try {
    const posts = await PostCommunity.find();
    if (!posts) throw Error("No Items");
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

module.exports = router;
