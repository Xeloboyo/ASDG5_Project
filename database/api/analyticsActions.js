/*
    REST API Analytics Actions:

    how does information update:
    // 1. changes realtime, 
    2. get notification to refresh? (YES)

    GET, PATCH
    - Total Users
    - Total Restaurants
    - Total Community Posts

    GET, PATCH
    Monthly Graph:
        - Number of Visits
        - Number of Advertisement Usedd
        - Number of Takeaway Ordered ( & Revenue )

    GET, PATCH, DELETE 
    User Table:
        - Filter Users ( All Users / Registered Users / Restaurants )
        - User ID
        - Username
        - Password
        - Date Created
        - Delete

*/

const express = require('express');

const router = express.Router();

/*
    - show analytics overview
    @route GET api/analytics/overview
    @desc get analytics overview data
    @access private
*/


/*
    - show restaurant's analytics (based on month)
    @route GET api/analytics/restaurants
    @desc get analytics data based on restaurant
    @access private
*/


/*
    - update analytics overview
    @route PATCH api/analytics/refresh/overview
    @desc show restaurant analytics based on restaurant id
    @access private
*/


/*
    - update restaurant's analytics
    @route PATCH api/analytics/refresh/restaurant
    @desc show restaurant analytics based on restaurant id
    @access private
*/


/*
    - update user lists
    @route PATCH api/analytics/refresh/<i class="fa fa-user" aria-hidden="true"></i>
    @desc show restaurant analytics based on restaurant id
    @access private
*/


/*
    - filter user lists (based on user's input)
    @route POST api/analytics/user/filter
    @desc filter user lists based on users
    @access private
*/


/*
    - delete user
    @route PATCH api/analytics/user/delete
    @desc filter user lists based on users
    @access private
*/


module.exports = router;
