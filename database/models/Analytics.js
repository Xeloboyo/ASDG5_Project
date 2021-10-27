const mongoose = require('mongoose');

const { Schema } = mongoose;

const moment = require('moment');

// create AnalyticsSchema
const AnalyticsSchema = new Schema({
  Date: {
    type: Date,
    default: Date.now
    // return moment(Date.now).format('MMMM YYYY');
  },

  OverviewData: {
    type: [String],
    default: []
    /*
        0: Total Users
        1: Total Restaurants
        2: Total Traffic Visits
        3: Total Community Posts
      */
  },

  RestaurantData: {
    type: [String],
    default: []
    /*
        0: Number of Traffic Visits
        1: Number of Advertisement Used
        2: Net Bookings
        3: Number of Takeaway Ordered ( & Revenue )
      */
  }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
// module.exports = Analytics = mongoose.model('Analytics', AnalyticsSchema);
