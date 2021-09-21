/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

// mongodb user model
const PostCommunity = require("../models/PostCommunity");

//  Comunity post
router.post("/communitypageform", (req, res) => {
  let { Post_Community_Title, Post_Community_Category, Post_ID } = req.body;
  Post_Community_Title = Post_Community_Title.trim();
  Post_Community_Category = Post_Community_Category.trim();
  Post_ID = Post_ID.trim();
  console.log("ffff"); // testing line
  if (
    Post_Community_Title == "" ||
    Post_Community_Category == "" ||
    Post_ID == ""
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
      Post_ID,
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

module.exports = router;
