const mongoose = require('mongoose');

const { Schema } = mongoose;


const ProductSchema = new Schema( // Product + Ticketing
  // dont mind the changes like type and etc, it makes to differnt to how it run
  {
    Product_Quantity: {
      type: Number
    },

    Product_TotalPrice: {
      type: Number
    },

    Product_menuItems: { type: [String], default: [] },

    // checkout form
    Product_UserName: {
      type: String
    },

    Product_UserEmail: {
      type: String
    },

    Product_CreditCardName: {
      type: String
    },

    Product_CreditCardNumber: {
      type: Number
    },

    Product_CreditCardCVC: {
      type: Number
    },

    // ricky features
    Ticket: {
      TicketStatus: {
        type: String,
        required: false, // change to true later
        default: 'Pending'
      },

      TicketUpdateDescription: {
        type: String
        //   'We apologize but we have to cancel your order due to unfortunate circumstances.'
      }
    }
  },

  {
    timestamps: true // just put this in lmao
  }
);

// need the schema  for restaurant(vivians feature) and user(my feature)
// C: creating receipt, R: removing product off checkout order, U: updating quantity of order, D: delete a product off order.

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
