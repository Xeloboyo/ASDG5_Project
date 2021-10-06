import React, { Component } from 'react';
import '../../scss/style.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketMain from './TicketMain';
import StaffFooter from './StaffFooter';

class StaffTicket extends Component {
  /*
  // this.handleClick = this.handleClick.bind(this);
  // this.onChangeDeleteAllTicket = this.onChangeDeleteAllTicket.bind(this);

  // Delete All Tickets
  onChangeDeleteAllTicket(e) {
    e.preventDefault();

  const response = await fetch("http://localhost:5002/ticketdeleteall", {
    method: 'POST',
    headers: {
      "content-type": 'application/json',
    },
    body: JSON.stringify(newList),
  }),
  const jsonData = await response.json();
  console.log(`${jsonData.message}`);
}
*/
  render() {
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
            <Button variant="danger">Cancel All</Button>
          </div>
          <div>
            <div>
              <TicketMain />
            </div>
          </div>
          <div>
            <StaffFooter />
          </div>
        </Container>
      </div>
    );
  }
}

export default StaffTicket;
