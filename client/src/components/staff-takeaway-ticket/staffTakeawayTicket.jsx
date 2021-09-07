import React, { Component } from 'react';
import Dashboard from '../dashboard/Dashboard';
import Ticket from '../staff-takeaway-ticket/staffTakeawayTicket';
import { Container, Row, Col, Button } from 'react-bootstrap';

class staffTakeawayTicket extends Component {
  render() {
    return (
      <div
      // style={{
      //   marginLeft: '230px', // start after sidebar
      //   padding: '20px 0px', // top and botttom + left and right
      //   marginTop: '5px' // start after Header
      // }}
      >
        <Container>
          <Dashboard />
          <Row>
            <Col>
              <Ticket />
            </Col>
            <Col>
              <Button variant="danger">Cancel All</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default staffTakeawayTicket;
