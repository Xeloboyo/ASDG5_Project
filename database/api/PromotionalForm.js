/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const express = require('express');

const router = express.Router();

const Promotions = require('../models/Promotions');

//  Promotions post
router.post('/', (req, res) => {
  let {
    Promotions_Title,
    Promotions_Categories,
    Promotions_Description,
    Promotions_Object,
    User_ID
  } = req.body;
  Promotions_Title = Promotions_Title.trim();
  Promotions_Categories = Promotions_Categories.trim();
  Promotions_Description = Promotions_Description.trim();
  Promotions_Object = Promotions_Object.trim();
  User_ID = User_ID.trim();
  console.log('kkkk'); // testing line
  if (
    Promotions_Title == '' ||
    Promotions_Categories == '' ||
    Promotions_Description == '' ||
    Promotions_Object == ''
  ) {
    res.json({
      status: 'FAILED',
      message: 'Empty input fields!'
    });
  } else {
    // Checking if user already exists

    const NewPromotions = new Promotions({
      Promotions_Title,
      Promotions_Categories,
      Promotions_Description,
      Promotions_Object,
      User_ID
    });

    NewPromotions.save()
      .then((result) => {
        res.json({
          status: 'SUCCESS',
          message: 'Signup successful',
          data: result
        });
      })
      .catch((err) => {
        res.json({
          status: 'FAILED',
          message: 'An error occurred while saving user account!'
        });
        console.log(err);
      });
  }
});

// promotions update

// get all promotions
router.get('/promotionspast', async (req, res) => {
  try {
    const posts = await Promotions.find();
    if (!posts) throw Error('No Items');
    res.status(200).json(posts);
  } catch (err) {
    res.json({
      status: 'FAILED',
      message: 'An error occurred while saving user account!'
    });
    console.log(err);
  }
});

// get a promotions by id (replace :id)
router.get('/getones', async (req, res) => {
  try {
    let { _id } = req.body;
    const post = await Promotions.findById(_id);
    if (!post) throw Error('No Items');
    res.json({
      message: 'Gotten',
      data: post
    });
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// search function
router.get('/getsearch', async (req, res) => {
  try {
    let { search } = req.body;
    const post = await Promotions.find({
      $or: [
        { Promotions_Title: { $regex: '.*' + search + '.*' } },
        { Promotions_Categories: { $regex: '.*' + search + '.*' } },
        { Promotions_Description: { $regex: '.*' + search + '.*' } }
      ]
    });
    if (!post) throw Error('No Items');
    res.json({
      message: 'Gotten',
      data: post
    });
    // res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// get category promtoions
router.get('/getcategory', async (req, res) => {
  try {
    let { search } = req.body;
    const post = await Promotions.find({
      Promotions_Categories: { $regex: '.*' + search + '.*' }
    });
    if (!post) throw Error('No Items');
    res.json({
      message: 'Gotten',
      data: post
    });
    // res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
});

// Delete a post
router.delete('/deletepost', async (req, res) => {
  try {
    let { _id } = req.body;
    const post = await Promotions.findByIdAndDelete(_id);
    if (!post) throw Error('No post found!');
    res.json({
      message: 'Gotdeletedten',
      data: post
    });
    // res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//  Update a post
router.put('/promotionsupdate', async (req, res) => {
  try {
    let {
      _id,
      Promotions_Title,
      Promotions_Categories,
      Promotions_Description,
      Promotions_Object,
      User_ID
    } = req.body;
    Promotions_Title = Promotions_Title.trim();
    Promotions_Categories = Promotions_Categories.trim();
    Promotions_Description = Promotions_Description.trim();
    Promotions_Object = Promotions_Object.trim();
    User_ID = User_ID.trim();
    console.log('kkkk'); // testing line
    if (
      Promotions_Title == '' ||
      Promotions_Categories == '' ||
      Promotions_Description == '' ||
      Promotions_Object == ''
    ) {
      res.json({
        status: 'FAILED',
        message: 'Empty input fields!'
      });
    } else {
      // Checking if user already exists

      const UpdatePromotions = new Promotions({
        Promotions_Title,
        Promotions_Categories,
        Promotions_Description,
        Promotions_Object,
        User_ID
      });

      const post = await Promotions.findByIdAndUpdate(
        _id,
        {
          $set: req.body
        },
        { new: true, useFindAndModify: false }
      );
      res.json({
        message: 'Done',
        data: req.body
      });
      if (!post) throw Error('Something went wrong while updating the post');
      // res.status(200).json({ success: true });
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
