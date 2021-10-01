/*
    REST API Analytics Actions:
    - get analytics

    show analytics for: (using date)
    - revenue
    - page view
    - share number
    - ratings

    update the analytics: (using date)
    - revenue
    - page view
    - share number
    - ratings

*/

import { response } from 'express';

const express = require('express');

const router = express.Router();

const Analytics = require('../models/Analytics');

/*
    - get analytics
    @route GET api/analytics
    @desc get analytics data
    @access public

*/
router.get('/', (req, res) => {
  try {
    const analytics = await Analytics.find();
    if (!analytics) throw Error('No data available');
    console.log(analytics);
  } catch (err) {
    res.status(400).json({ msg: err });
    // Analytics.find().then((analytics) => res.json(analytics));
  }

/*
    - show the analytics
    @route POST api/analytics
    @desc show analytics from page
    revenue, page views number, share number , ratings number
    @access public
*/

/*
    - update the analytics
    @route PATCH api/ticket
    @desc update analytics
    revenue, page views number, share number , ratings number
    @access public
*/

module.exports = router;
