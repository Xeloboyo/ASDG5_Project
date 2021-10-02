import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import TicketFooter from './TicketMini';

function StaffFooter() {
  return (
    <div
      style={{
        marginLeft: '230px', // start after sidebar
        width: '100%',
        position: 'fixed',
        left: '0',
        bottom: '0',
        // marginBottom: '270px',
        padding: '15px 0px', // top and botttom + left and right
        background: '#50cb9b',
        zIndex: '1'
        // marginBottom: '150px'
      }}
    >
      <Container>
        <TicketFooter />{' '}
        {/* create a duplicate file of Ticket to Ticket Footer */}
      </Container>
    </div>
  );
}

export default StaffFooter;
