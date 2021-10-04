const mongoose = require('mongoose');

const { Schema } = mongoose;

// create TicketSchema
const AnalyticsSchema = new Schema({
  Analytics_PageViewsNum: {
    type: Number
  },

  Analytics_ShareNum: {
    type: Number
  },

  Analytics_RatingsNum: {
    type: Number
  },

  Analytics_Popularity: {
    type: Number
  },

  Analytics_Profit: {
    type: Number
  },

  Analytics_Date: {
    // get this from v-calendar
    type: Date
  },

  Order_ID: {
    type: Number
  },

  Promotion_ID: {
    type: Number
  }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
// module.exports = Analytics = mongoose.model('Analytics', AnalyticsSchema);
