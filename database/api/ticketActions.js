/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-cond-assign */

/*
    Lists of API for ticketing:
    - Show All ticket ✅
    - Add ticket ✅
    - Cancel ticket ✅ ( add description )
    - Cancel All ticket ✅ ( add description )
    - Confirm ticket ✅ ( add description )
*/

const express = require('express');

const router = express.Router();

const Ticketing = require('../models/Ticket');

/*
    - Get All ticketing (from Payment)
    @route GET api/ticketing/
    @desc Get All ticketing
    @access Private
*/
router.get('/', async (req, res) => {
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
    // ReservationID,
    OrderID,
    // PaymentID,
    // TicketDateReceived,
    // TicketTimeReceived,
    // TicketOrderDescription,
    TicketOwner,
    // TicketOrder,
    TicketOrderQuantity,
    TicketOrderDescription,
    TicketStatus,
    TicketUpdateDescription,
  } = req.body;

  console.log('kek');

  if ((UserID = '' || OrderID == '')) {
    res.json({
      status: 'FAILED',
      message: 'Reservation is not yet created'
    });
  } else {
    const NewTicket = new Ticketing({
      // TicketDateReceived,
      // TicketTimeReceived,
      // TicketOrderDescription,
      TicketOwner,
      TicketOrderQuantity,
      TicketOrderDescription,
      TicketStatus,
      TicketUpdateDescription
    });

    NewTicket.save()
      .then((result) => {
        res.json({
          status: 'SUCCESS',
          message: 'New Ticket Order',
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
router.post('/ticketdelete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // TicketStatus = TicketStatus.trim();
    // TicketUpdateDescription = TicketUpdateDescription.trim();
    const ticket = await Ticketing.findByIdAndDelete(id);

    console.log('kek');

    // change ticket description
    // const TicketDelete = new Ticketing({
    //   TicketStatus,
    //   TicketUpdateDescription
    // });

    // const update = await Ticketing.findByIDAndUpdate(
    //   _id,
    //   {
    //     $set: req.body
    //   },
    //   { new: true, useFindandModify: false }
    // );
    // res.json({
    //   message: 'Ticket Queue is deleted',
    //   data: req.body,
    //   TicketStatus: 'Cancelled',
    //   TicketUpdateDescription:
    //     'We apologize but we have to cancel your order due to unfortunate circumstances.'
    // });
    // if (!update) throw Error('Error when updating ticket description');

    // change ticket description

    if (!ticket) throw Error('No ticketing found based on the id');
    res.json({
      message: 'Ticket is Deleted',
      status: 'SUCCESS'
      // data: POST
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
router.post('/ticketdeleteall', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteall = await Ticketing.deleteMany(id);

    // TicketStatus = TicketStatus.trim();
    // TicketUpdateDescription = TicketUpdateDescription.trim();
    console.log('kek');

    // change ticket description
    // const TicketDeleteAll = new Ticketing({
    //   TicketStatus,
    //   TicketUpdateDescription
    // });

    /*
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
    */

    // delete all tickets

    if (!deleteall) throw Error('Ticket Queue is empty');
    res.json({
      message: 'Every Ticket has been deleted',
      status: 'SUCCESS'
      // TicketStatus: 'Cancelled',
      // TicketUpdateDescription:
      // 'We apologize but we have to cancel your order due to unfortunate circumstances.',
      // data: POST
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

/*
  - confirm ticketing
  @route PATCH api/ticketing/ticketupdate/{d}
  desc status is changed and order is made
*/

router.post('/ticketcomplete/:id', async (req, res) => {
  try {

    let { id } = req.params;
    const update = await Ticketing.findByIDAndUpdate(id);

    // TicketStatus = TicketStatus.trim();
    // TicketUpdateDescripion = TicketUpdateDescription.trim();
   console.log('kek');

    const complete = new Ticketing({
      TicketStatus: 'SUCCESS',
      TicketUpdateDescription: 'Order Finish'
   });

    res.json({
      message: 'Order Finish and Ticket Sent',
      // data: req.body,
      Status: 'Completed',
      TicketStatus: 'Success',
      TicketUpdateDescription: 'Order Complete'
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
*/
// router.post('/ticketupdate/:id', async (req, res) => {
// try {
//   let {
//     _id,
//     TicketOwner,
//     TicketStatus,
//     TicketUpdateDescription,
//   } = req.body;
//         TicketOwner = TicketOwner.trim();
//         TicketStatus = TicketStatus.trim();
//      TicketUpdateDescription= TicketUpdateDescription.trim();
// }
// /

module.exports = router;
