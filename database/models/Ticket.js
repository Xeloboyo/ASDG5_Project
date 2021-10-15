const mongoose = require('mongoose');

const { Schema } = mongoose;

// create TicketSchema
const TicketSchema = new Schema(
  {
    UserID: {
      // foreign_key
      type: Number
    },

    // ReservationID: {
    //   // foreign_key
    //   type: Number
    // },

    OrderID: {
      // foreign_key
      type: Number
    },

    // PaymentID: {
    //   // foreign_key is associate with restaurant and user
    //   type: Number
    // },

    TicketOwner: {
      type: String,
      default: '',
      required: true
    },

    // TicketDateReceived: {
    //   type: String,
    //   required: true,
    //   default: Date.toLocaleDateString() // mm/dd/yyyy
    // }, CreatedBy

    // TicketTimeReceived: {
    //   type: String,
    //   required: true,
    //   default: Date().toLocaleTimeString() // hh:mm:ss
    // }, CreatedBy

    // TicketOrder: {
    //   type: String
    // },

    TicketOrderQuantity: {
      type: Number,
      required: true,
      default: ''
    },

    TicketOrderDescription: {
      type: String,
      required: true,
      default: ''
    },

    TicketStatus: {
      type: String,
      required: true,
      default: 'Pending'
    },

    TicketUpdateDescription: {
      type: String
      //   'We apologize but we have to cancel your order due to unfortunate circumstances.'
    }
  },
  {
    timestamps: true
  }
);

// name, ticket description

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;
// module.exports = Ticket = mongoose.model('Ticket', TicketSchema);
