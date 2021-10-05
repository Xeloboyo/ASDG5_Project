const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// create Subscribe schema
const SubscribeSchema = new Schema({
  // analytics

  RestaurantID: {
    // foreign_key
    type: Number
  },

  PaymentID: {
    // foreign_key
    type: Number
  },

  SubscriptionOptions: {
    // none, show no analytics
    // monthly or yearly
    type: String,
    default: ''
  },

  SubscriptionStartDate: {
    type: Date,
    default: ''
  },

  SubscriptionEndDate: {
    type: Date,
    default: ''
  },

  SubscriptionTrial: {
    type: Boolean,
    default: false
  }
});

const Subscribe = mongoose.model('Subscribe', SubscribeSchema);
module.exports = Subscribe;
// module.exports = Subscribe = mongoose.model('subscribe', SubscribeSchema);
