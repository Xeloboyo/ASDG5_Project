import React, { Component, useState, useEffect } from 'react';
import '../../scss/style.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketMain from './TicketMain';
import axios from 'axios';
// import StaffFooter from './StaffFooter';

function StaffTicket() {
  /*
  - get all ID
  -- map ticketmain
   */

  // const [tickets, setTickets] = useState(initialState);

  // Delete All
  const handleClickAll = (e) => {
    e.preventDefault();
    axios
      .post(`http://localthost:5002/ticketing/ticketdeleteall/`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    console.log('deleted all tickets');
  };

  return (
    <div
      style={{
        background: 'lightgrey',
        paddingTop: '85px',
        width: '100%',
        height: '100%',
        position: 'absolute',
        margin: 'auto'
      }}
    >
      <Container>
        <div
          style={{
            float: 'right'
            // marginTop: '80px',
          }}
        >
          <Button variant="danger" {...handleClickAll}>
            Cancel All
          </Button>
        </div>
        <div>
          <div>
            <TicketMain />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StaffTicket;
