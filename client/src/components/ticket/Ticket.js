import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { BsXCircleFill } from 'react-icons/bs';

// create 2 Ticket Designs,  using if statement to determine whether
// it's for takeaway and reservations
// if takeaway, use logo
// if reservations, use logo
// both tickets have accept and cancel button
// both tickets have more and less information
// page allows cancel all, will show warning

export const Ticket = () => {
  return (
    <IconContext.Provider>
      value ={{ color: 'green', size: '50px' }}
      <div>
        <Card>
          <Card.Header>Order:{/* Number using UUID */}, Name</Card.Header>
          <Card.Body>
            <Card.Title>Costs: $ {/* Price */}</Card.Title>

            <Card.Text>Description</Card.Text>
            {/* <Card.Text>Description</Card.Text> */}
          </Card.Body>
          <Button variant="success" size="lg">
            <FaCheckCircle />
            <BsXCircleFill />
          </Button>
        </Card>
        ));
      </div>
    </IconContext.Provider>
  );
};

export default Ticket;
