import React, { Component } from 'react';
import '../../scss/style.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Ticket from './Ticket';

class StaffTicket extends Component {
  render() {
    return (
      <div
        style={
          {
            //   background: 'lightgrey',
            //   height: 'auto'
            //   position: 'fixed'
          }
        }
      >
        <Container>
          <div
            style={{ float: 'right', marginTop: '100px', marginBottom: '50px' }}
          >
            <Button variant="danger">Cancel All</Button>
          </div>
          <div>
            <Ticket />
          </div>
        </Container>
      </div>
    );
  }
}

export default StaffTicket;
