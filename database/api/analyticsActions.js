/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-cond-assign */

/* REST API Analytics Actions:

    1. Overview
    
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

const Analysis = require('../models/Analytics');

// to filter Date.now
// const Month =

//  Overview
//   Month,
//   UsersTotal,
//   RestaurantsTotal,
//   TrafficVisits,
//   CommPostsTotal

//  Restaurant
//   Traffic,
//   Bookings,
//   ProfitTakeaway,
//   Takeaway,

/*
    - Get ALl Analytics data
    @route GET api/analytics/
    @desc Get all analytics data
    @access private
*/

router.get('/', async (req, res) => {
  try {
    const data = await Analysis.find();
    if (!data) throw Error('No data available');
    res.status(200).json(data);
  } catch (err) {
    res.json({
      status: '404',
      message: 'File not found'
    });
    console.log(err);
  }
  // check if month and year exist
});

/*
    - Show analytics overview
    @route post api/analytics/overview
    @desc create analytics overview data
    @access private
*/
router.post('/overview/', async (req, res) => {
  let { Month, UsersTotal, RestaurantsTotal, TrafficVisits, CommPostsTotal } =
    req.body;

  console.log('it`s all kek');

  // if month is not the same, then make new collection
  if ((Month = '')) {
    // check if month is already created
    res.json({
      status: '404',
      message: 'Table has not yet created'
    });
  } else {
    const NewAnalysis = new Analysis({
      Month,
      UsersTotal,
      RestaurantsTotal,
      TrafficVisits,
      CommPostsTotal
    });

    NewAnalysis.save() // instead of save, make a new document
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
  // else the show the current collection data
});

/*
    - Show restaurant's analytics
    @route GET api/analytics/restaurants
    @desc get analytics data based on restaurant
    @access private
*/
router.post('/restaurants/', async (req, res) => {
  let { Month, Traffic, Bookings, ProfitTakeaway, Takeaway } = req.body;

  console.log('its kek');

  if ((Month = '')) {
    res.json({
      status: 'FAILED',
      message: 'Data is not yet created'
    });
  } else {
    const NewAnalysis = new Analysis({
      Month,
      Traffic,
      Bookings,
      ProfitTakeaway,
      Takeaway
    });

    NewAnalysis.save()
      .then((result) => {
        res.json({
          status: '200',
          message: 'New Restaurant is Created',
          data: result
        });
      })
      .catch((err) => {
        res.json({
          status: 'FAILED',
          message: 'An error occured'
        });
        console.log(err);
      });
  }
});

/*
    - Update analytics overview
    @route POST api/analytics/update/
    @desc get analytics overview data
    @access private
*/

/*
    - Update restaurant's analytics
    @route PATCH api/analytics/update
    @desc update restaurant analytics
    @access private
*/

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

router.get('/', async (req, res) => {
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

router.post('/users/', async (req, res) => {
  try {
    const whichUser = await Analysis.find();
    if (!whichUser) throw Error('No such user exist');
    res.status(200).json(whichUser);
  } catch (err) {
    res.json({
      status: '404',
      message: 'An error occured'
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
router.get('/users', authenticate, async (req, res) => {
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
router.post('/deleteusers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Analysis.deleteOne(id);

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

*/
