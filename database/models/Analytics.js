const mongoose = require('mongoose');

const { Schema } = mongoose;

// create AnalyticsSchem
const AnalyticsSchema = new Schema({
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
  },

  Restaurant: [
    {
      Month: {
        type: Date
        // needs to return MM YYYY
      },

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
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
// module.exports = Analytics = mongoose.model('Analytics', AnalyticsSchema);
