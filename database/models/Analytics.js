const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// create TicketSchema
const AnalyticsSchema = new Schema({
  Analytics_Filter: {
    type: String
  },

  Analytics_PageViewsNum: {
    type: String
  },

  Analytics_ShareNum: {
    type: String
  },

  Analytics_RatingsNum: {
    type: String
  },

  Analytics_Popularity: {
    type: String
  },

  Order_ID: {
    type: String
  },

  Promotion_ID: {
    type: String
  },

  Analytics_Profit: {
    type: String
  }
});

// module.exports = Analytics = mongoose.model('analytics', AnalyticsSchema);
