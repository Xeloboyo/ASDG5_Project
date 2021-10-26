/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-cond-assign */

/* REST API Analytics Actions:

    1. Overview:
    GET:
    - Total Users
    - Total Restaurants
    - Total Traffic Visits
    - Total Community Posts
    
    POST:
    - New Month

    2. Restaurant (Monthly)
    GET:
    - Number of Traffic Visits
    - Number of Advertisement Used
    - Net Bookings
    - Number of Takeaway Ordered ( & Revenue )

    POST:
    - New Month

    3. Users Lists:
    GET (based on User Category: All Users / Registered Users / Restaurants )
    - Filter Users 
    
    GET (from collection: Users)
    - User ID
    - Username
    - Password
    - Date Created
    
    DELETE 
    - Delete

    POST:
    - New Month

*/

const express = require('express');

const router = express.Router();

const moment = require('moment');

/* for date
    using moment to compare collectionDate with currentMonth and compare with currentYear
    if true then use current collection
    if not make a new collection
    compare this moment(Date.now).format('MMMM YYYY') with Analytics.Date()
    let dateFormat = moment(Date.now()).format('MMMMM YYYY');
    // let compare = moment(dateFormat).isSame(Analysis.find()); // can only be compared inside query
*/

// current document
const Analysis = require('../models/Analytics');

// other documents:

// user schema
const User = require('../models/User');
const PostCommunity = require('../models/PostCommunity');

// Restaurant schema
const Restaurant = require('../models/Restaurant');
const Promotion = require('../models/Promotions');
const Product = require('../models/Product');

// might not work
// const OverviewStats = require('../models/User' && '../models/Restaurant' && '../models/PostCommunity');
// const RestaurantStats = require('../models/Restaurant' && '../models/Promotions' && '../models/Products');

// moment date format
let dateFormat = moment(Date.now()).format('MMMM YYYY');
let dateData = moment(Analysis.Date).format('MMMM YYYY');

/*
    - Get ALl Analytics data
    @route GET api/analytics/
    @desc Get all analytics data
    @access private
*/

router.get('/', (req, res) => {
  try {
    const data = Analysis.find();
    console.log(data); // return schema

    // const compare = await Analysis.exists({ Date: dateFormat });
    const compare = Analysis.exists({ Date: dateFormat });
    console.log(compare); // true or false

    console.log('', 'kek');

    if (!compare) throw Error('No such date exist within the collection');
    res.status(200).json(data);
  } catch (err) {
    res.json({
      status: '400',
      message: 'File not found'
    });
    console.log(err);
  }
});

/*
    - Show analytics overview
    @route post api/analytics/overview
    @desc create analytics overview data
    @access private
*/
router.post('/overview', async (req, res) => {
  let usersCount = User.count();
  let restaurantsCount = Restaurant.count();
  let postCommCount = PostCommunity.count();

  const pushOverview = { usersCount, restaurantsCount, postCommCount };
  Analysis.findOneAndUpdate(
    { _id: req.body.id },
    // { $push: {Date: }}
    { $push: { OverviewData: pushOverview } }
  )
    .then((result) => {
      res.json({
        status: 'SUCCESS',
        message: 'A new month, a new table',
        data: result
      });
    })
    .catch((err) => {
      res.json({
        status: 'FAILED',
        message: 'An error occurred'
      });
      console.log(err);
    });
});

/*
    - Show restaurant's analytics
    @route GET api/analytics/restaurants
    @desc get analytics data based on restaurant
    @access private
*/

router.post('/restaurants', async (req, res) => {
  // const compare = await Analysis.exists({ Date: dateFormat });
  const compare = Analysis.exists({ Date: dateFormat });
  console.log(compare); // true or false

  console.log('', 'kek');

  // if month is not the same, then make new collection
  if (compare === false) {
    // check if month is already created
    res.json({
      status: '404',
      message: 'No such table exists'
    });
  } else {
    let userMonthCount = User.count();
    let adsMonthCount = Promotion.count();
    let takeawayMonthCount = Product.count();
    let restaurantMonthCount = Restaurant.count();

    const pushOverview = {
      userMonthCount,
      adsMonthCount,
      restaurantMonthCount,
      takeawayMonthCount
    };
    Analysis.findOneAndUpdate(
      { _id: req.body.id },
      // { $push: {Date: }}
      { $push: { OverviewData: pushOverview } }
    )
      .then((result) => {
        res.json({
          status: 'SUCCESS',
          message: 'A new month, a new table',
          data: result
        });
      })
      .catch((err) => {
        res.json({
          status: 'FAILED',
          message: 'An error occurred'
        });
        console.log(err);
      });
  }
});

//  User Lists (User, Admin, Restaurant)
//   UserID
//   Email
//   Name
//   Password
//   Date Created

/*
    - GET user lists
    @route GET api/analytics/
    @desc get all users analytics data
    @access private
*/

router.get('/users', async (req, res) => {
  try {
    const users = await Analysis.find();
    if (!users) throw Error('No User Data');
    res.status(200).json(users);
  } catch (err) {
    res.json({
      status: '404',
      message: 'An error occured'
    });
    console.log(err);
  }
});

/*
    - POST user lists
    @route POST api/analytics/users/
    @desc get analytics data based on users lists
    @access private
*/

router.post('/users', async (req, res) => {
  try {
    const whichUser = await Analysis.find();
    if (!whichUser) throw Error('No such user exist');
    res.status(200).json(whichUser);
  } catch (err) {
    res.json({
      status: '404',
      message: 'An error occurred'
    });
    console.log(err);
  }
});

/*
    - Filter user lists
    @route POST api/analytics/users/filter
    @desc filter user lists based on users
    @access private
*/

// router.get('/users', authenticate, async (req, res) => {
router.get('/users/search', async (req, res) => {
  const match = {};

  if (req.query.User_Category) {
    match.User_Category = req.query.User_Category === 'User';
  }
  try {
    await req.user
      .populate({
        path: 'users',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip)
        }
      })
      .execPopulate();
    res.send(req.user.posts);
  } catch (error) {
    res.status(500).send();
  }
});

/*
    - delete user
    @route delete api/analytics/deleteusers/:id
    @desc delete specific user based on id
    @access private
*/
router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Analysis.findByIdAndDelete(id);

    console.log('kek');

    if (!deleteuser) throw Error('UserID doenst exist');
    res.json({
      message: 'User has been deleted from the system',
      status: '200'
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

/*
  Test Files
*/

// query to test count ✅
router.route('/test/count').post((req, res) => {
  User.countDocuments({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json('number of registered users = ' + result);
      // without saving the result and push
    }
  });
});

// query to test validate month and year ✅

/* ways to validate
      let compare = moment(dateFormat).isSame(dateData); // can only be compared inside query
      output: true
      desc: check if two var is the same format

      const compare = await Analysis.exists({ Date: dateFormat });
      output: true or false
      desc: check if dateFormat(Date now) exists within collection
*/

router.post('/test/validate', async (req, res) => {
  // let compare = moment(dateFormat).isSame(dateData); // can only be compared inside query
  // console.log(dateFormat);
  try {
    const compare = await Analysis.exists({ Date: dateFormat });
    console.log(compare); // true or false

    if (!compare) throw Error('No such date exist within the collection');
    res.status(200).json(data);
  } catch (err) {
    res.json({
      status: '400',
      message: 'Data not found'
    });
    console.log(err);
  }
});

module.exports = router;

/* sources:
    
    How does data flow in mongoDB:
    > database (ASD_Restaurant_Review) 
    -> collections (analytics, menus, etc...) 
    -> {menus} documents (menusA, menusB, etc)

    How does information update (frontend)
    // 1. changes realtime, 
    2. get notified to refresh? (YES)

    Ways to check number of collections
    1. mongoose-> https://www.mathworks.com/help/database/ug/mongo.count.html
    2. mongodb -> https://docs.mongodb.com/manual/reference/method/db.collection.count/
    
    Ways to check number of traffic visits:
    1. node -> https://www.geeksforgeeks.org/how-to-implement-visitor-counter-in-node-js/        
    2. npm -> https://www.npmjs.com/package/express-visitor-counter 

    Filter dates:
    1. Date() - https://docs.mongodb.com/manual/reference/method/Date/
    2. mongoose dates - https://mongoosejs.com/docs/tutorials/dates.html
    3. dateFromParts - https://docs.mongodb.com/manual/reference/operator/aggregation/dateFromParts/. 

    /* lists 
  todo: check number of document inside a collection 

  Overview
    Month,
    UsersTotal,
    RestaurantsTotal,
    TrafficVisits,
    CommPostsTotal

  Restaurant
    Traffic,
    Bookings,
    ProfitTakeaway,
    Takeaway,

  Model/Schema Needed:
    User -> User + User Lists
    PostCommunity -> Overview
    Restaurant -> Restaurant
    Promotion -> Promotion
    Products -> Takeaway & Profit Takeaway
*/
