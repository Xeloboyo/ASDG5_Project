import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';

export const Ticket = () => {
  return (
    <IconContext.Provider>
      value ={{ color: 'green', size: '50px' }}
      <div>
        <Card>
          <Card.Header>Takeaway Order</Card.Header>
          <Card.Body>
            <Card.Title>Number #{/* automated uuid number */} </Card.Title>
            <Card.Text>Description</Card.Text>
            {/* <Card.Text>Description</Card.Text> */}
          </Card.Body>
          <Button variant="success" size="lg">
            Confirm <FaCheckCircle />
          </Button>
        </Card>
        ));
      </div>
    </IconContext.Provider>
  );
};

export default Ticket;
