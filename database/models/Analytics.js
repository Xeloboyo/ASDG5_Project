const mongoose = require('mongoose');

const { Schema } = mongoose;

// create AnalyticsSchema
const AnalyticsSchema = new Schema({
  Date: [
    {
      type: Date,
      default: Date.now
      // default returns YYYY MM DD
      // needs to return YYYY MM
      // filter it at API
    },
    {
      OverviewData: [
        {
          UsersTotal: {
            type: Number
          },

          RestaurantsTotal: {
            type: Number
          },

          TrafficVisits: {
            type: Number
          },

          CommPostsTotal: {
            type: Number
          }
        }
      ]
    },

    {
      RestaurantData: [
        {
          Traffic: {
            type: Number
          },

          Bookings: {
            type: Number
          },

          ProfitTakeaway: {
            type: Number
          },

          Takeaway: {
            type: Number
          }
        }
      ]
    }
  ]
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
// module.exports = Analytics = mongoose.model('Analytics', AnalyticsSchema);
