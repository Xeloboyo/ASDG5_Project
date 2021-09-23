import React, { Component } from 'react';
import '../../scss/style.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Ticket from './Ticket';
import StaffFooter from './StaffFooter';

class StaffTicket extends Component {
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
              <Ticket />
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
