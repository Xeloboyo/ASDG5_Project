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

// get a post by id (replace :id)
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

// get a user's post
router.post("/getuserpost", async (req, res) => {
  try {
    let { UserID } = req.body;
    // let { UserID } = "1234";
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
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// get category post
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
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Delete a post
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

//  Update a post
router.put("/communitypageedits", async (req, res) => {
  console.log("ffjjff");
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
