const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// create Subscribe schema
const SubscribeSchema = new Schema({
  Subscription_ID: {
    type: String
  },

  Restaurant_ID: {
    type: String
  },

  Payment_ID: {
    type: String
  },

  Subscription_Options: {
    type: String
  },

  Subscription_Start: {
    type: String
  },

  Subscription_End: {
    type: String
  },

  Subscription_Trial: {
    type: String
  }
});

// module.exports = Subscribe = mongoose.model('subscribe', SubscribeSchema);
