/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

// mongodb user model
const PostCommunity = require("../models/PostCommunity");

//  Create omunity post
router.post("/communitypageform", (req, res) => {
  let {
    Post_Community_Title,
    Post_Community_Category,
    Post_Paragraph,
    Post_Edited,
    User_ID,
  } = req.body;

  // Checking if input is empty
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
          message: "Post Completed!",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while creating post!",
        });
        console.log(err);
      });
  }
});

// Get a post by id
router.post("/getone", async (req, res) => {
  try {
    let { PostID } = req.body;
    const post = await PostCommunity.findById(PostID);
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

// Get one user's post
router.post("/getuserpost", async (req, res) => {
  try {
    let { UserID } = req.body;
    console.log(UserID);
    const post = await PostCommunity.find({ User_ID: UserID });
    if (!post.length) {
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
    console.log(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Search community post
router.post("/getsearch", async (req, res) => {
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
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Get community post by category
router.post("/getcategory", async (req, res) => {
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
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Delete a community post
router.post("/deletepost", async (req, res) => {
  try {
    let { _id } = req.body;
    console.log(_id);
    const post = await PostCommunity.findByIdAndDelete(_id);
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

//  Update a community post
router.put("/communitypageedits", async (req, res) => {
  try {
    let {
      PostID,
      Post_Community_Title,
      Post_Community_Category,
      Post_Paragraph,
      Post_Edited,
      User_ID,
    } = req.body;
    console.log(req.body);

    // Checking if input is empty
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
      const UpdatePostCommunity = PostCommunity({
        Post_Community_Title,
        Post_Community_Category,
        Post_Paragraph,
        Post_Edited,
        User_ID,
      });
      const post = await PostCommunity.findByIdAndUpdate(
        PostID,
        {
          $set: req.body,
        },
        { new: true, useFindAndModify: false }
      );
      res.json({
        status: "SUCCESS",
        message: "Updated Completed!",
        data: req.body,
      });

      if (!post) throw Error("Something went wrong while updating the post");
    }
  } catch (err) {
    res.status(400).json({ msg: err });
    console.log(err);
  }
});

// Get all community post
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
