const mongoose = require('mongoose');

const { Schema } = mongoose;

const moment = require('moment');

// create AnalyticsSchema
const AnalyticsSchema = new Schema({
  analytics: {
    Date: [
      {
        type: Date,
        // default: Date.now // default returns MM DD YYYY
        default: () => moment(Date.now).format('MMMM YYYY')
        // today's date formatted to: October 2021
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
  }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
// module.exports = Analytics = mongoose.model('Analytics', AnalyticsSchema);
