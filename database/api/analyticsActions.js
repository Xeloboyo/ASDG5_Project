/*
    REST API Analytics Actions:

    - get analytics -> restaurant id
    - "create" analytics when restaurant is made
    - "show" the analytics when restaurant subscribe
    - stop showing analytics if user stop subscribing
    - filter data based on date

    each one needs to render:
    1. count: share, views, ratings, takeaway, bookings
    2. average: day and hours of booking, day and hours of reservations 
    // popularity
    3. total: takeaway
    4. filter: date ( to change all the value above )

*/

const express = require('express');

const router = express.Router();

const Analytics = require('../models/Analytics');
const Subscribe = require('../models/Subscribe');

/*
    - get analytics
    @route GET api/analytics/analytics/{id}
    @desc get analytics data
    @access private

*/

/*
    - create analytics
    @route POST api/analytics/analytics/{id}
    @desc create analytics data based on restaurant
    @access private

*/

/*
    - show the analytics
    @route POST api/analytics/analyticsshow/{id}
    @desc show restaurant analytics based on restaurant id
    @access private
*/

/*
    - stop showing analytics
    @route PATCH api/analytics/analyticsstop/{id}
    @desc stop showing analytics when restaurant stop subscribing
    @access private
*/

/*
    - filter analytics (based on date)
    @route PATCH api/analytics/analytics/analyticsfilter/{id}
    @desc filter restaurant analytics based on date
    @access private
*/

module.exports = router;
