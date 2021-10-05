/*
    Lists of API for ticketing:
    - Show All ticket
    - Add ticket
    - Cancel ticket -> add description
    - Cancel All ticket -> add description
    - Confirm ticket -> add description
*/

const express = require('express').Router();

const router = express.Router();

const Ticketing = require('../models/Ticket');

/*
    - Get All ticketing (from Payment)
    @route GET api/ticketing/
    @desc Get All ticketing
    @access Private
*/
router.post('/', async (req, res) => {
  try {
    const ticket = await Ticketing.find();
    if (!ticket) throw Error('No Ticket');
    res.status(200).json(ticket);
  } catch (err) {
    res.json({
      status: 'FAILED',
      message: 'An error occurred'
    });
    console.log(err);
  }
});

/*
    - Add ticketing
    @route POST api/ticketing/
    @desc add ticket
    @access Private
*/
router.post('/', (req, res) => {
  let {
    UserID,
    ReservationID,
    OrderID,
    PaymentID,
    TicketDateReceived,
    TicketTimeReceived,
    TicketOrderDescription,
    TicketStatus,
    TicketUpdateDescription
  } = req.body;

  UserID = UserID.trim();
  ReservationID = ReservationID.trim();
  OrderID = OrderID.trim();
  PaymentID = PaymentID.trim();
  TicketDateReceived = TicketDateReceived.trim();
  TicketTimeReceived = TicketTimeReceived.trim();
  TicketOrderDescription = TicketOrderDescription.trim();
  TicketStatus = TicketStatus.trim();
  TicketUpdateDescription = TicketUpdateDescription.trim();
  console.log('kek');

  if (UserID = '' || OrderID == '' || RestaurantID == '') {
    res.json({
      status: 'FAILED',
      message: 'Reservation is not yet created'
    });
  } else {
    const NewTicket = new Ticketing({
      TicketDateReceived,
      TicketTimeReceived,
      TicketOrderDescription,
      TicketStatus,
      TicketUpdateDescription
    });

    NewTicket.save()
      .then((result) => {
        res.json({
          status: 'SUCCESS',
          message: 'New Ticket is created',
          data: result
        });
      })
      .catch((err) => {
        res.json({
          status: 'FAILED',
          message: 'An error occurred'
        });
        console.log(err);
      });
  }
});

/*
    - cancel ticketing
    @route POST  api/ticketing/ticketdelete/{id}
    @desc delete ticket from page
    @access Private
*/
router.post('/ticketingdelete', async (req, res) => {
  try {
    let { _id, TicketStatus, TicketUpdateDescription } = req.body;
    TicketStatus = TicketStatus.trim();
    TicketUpdateDescription = TicketUpdateDescription.trim();
    console.log('kek');

    // change ticket description
    const TicketDelete = new Ticketing({
      TicketStatus,
      TicketUpdateDescription
    });

    const update = await Ticketing.findByIDAndUpdate(
      _id,
      {
        $set: req.body
      },
      { new: true, useFindandModify: false }
    );
    res.json({
      message: 'Ticket Queue is deleted',
      data: req.body,
      TicketStatus: 'Cancelled',
      TicketUpdateDescription:
        'We apologize but we have to cancel your order due to unfortunate circumstances.'
    });
    if (!update) throw Error('Error when updating ticket description');

    const ticket = await Ticketing.findByIdandDelete(_id);
    // change ticket description

    if (!ticket) throw Error('No ticketing found based on the id');
    res.json({
      message: 'Ticket is Deleted',
      data: POST
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

/*
    - cancel ALL ticketings
    @route POST api/ticketing/ticketdelete
    @desc delete all ticket from page
    @access Private
*/
router.post('/ticketingdeleteall', async (req, res) => {
  try {
    let { _id, TicketStatus, TicketUpdateDescription } = req.body;
    TicketStatus = TicketStatus.trim();
    TicketUpdateDescription = TicketUpdateDescription.trim();
    console.log('kek');

    // change ticket description
    const TicketDeleteAll = new Ticketing({
      TicketStatus,
      TicketUpdateDescription
    });

    const update = await Ticketing.findByIDAndUpdate(
      _id,
      {
        $set: req.body
      },
      { new: true, useFindandModify: false }
    );
    res.json({
      message: 'Every Ticket Queue is deleted',
      data: req.body,
      TicketStatus: 'Cancelled',
      TicketUpdateDescription:
        'We apologize but we have to cancel your order due to unfortunate circumstances.'
    });
    if (!update) throw Error('Error when updating ticket description');

    // delete all ticket
    const deleteall = await Ticketing.deleteMany(_id);
    if (!deleteall) throw Error('Ticket Queue is empty');
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//     if (!ticket) throw Error('Ticketing queue is already empty');
//     res.json({
//       message: 'Every Ticket has been deleted',
//       data: POST
//     });
//   } catch (err) {
//     res.status(400).json({ msg: err });
//   }
// });

/*
  - confirm ticketing
  @route PATCH api/ticketing/ticketupdate/{id}
  @desc status is changed and order is made
*/

router.post('/ticketingconfirm', async (req, res) => {
  try {
    let { _id, TicketStatus, TicketUpdateDescription } = req.body;
    TicketStatus = TicketStatus.trim();
    TicketUpdateDescription = TicketUpdateDescription.trim();
    console.log('kek');

    const confirm = new Ticketing({
      TicketStatus,
      TicketUpdateDescription
    });

    const update = await Ticketing.findByIDAndUpdate(
      _id,
      {
        $set: req.body
      },
      { new: true, useFindandModify: false }
    );
    res.json({
      message: 'Ticket Confirm',
      data: req.body
    });
    if (!update) throw Error('Error when updating ticket description');
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});
/*
  - update ticketing 
  @route PATH api/ticketing/ticketupdate/{id}
  @desc description and status change

try {
  let {
    _id,
    TicketOwner,
    TicketStatus,
    TicketUpdateDescription,
  } = req.body;
        TicketOwner = TicketOwner.trim();
        TicketStatus = TicketStatus.trim();
      TicketUpdateDescription= TicketUpdateDescription.trim();
}
*/

module.exports = router;
