import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaTimesCircle, FaMotorcycle } from 'react-icons/fa';
import { GiTabletopPlayers } from 'react-icons/gi';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';

// create 2 Ticket Designs,  using if statement to determine whether
// it's for takeaway and reservations
// if takeaway, use logo { FaMotorcycle }
// if reservations, use logo { GiTabletopPlayers }
// both tickets have accept and cancel button
// both tickets have more and less information
// page allows cancel all, will show warning

export const Ticket = () => {
  return (
    <IconContext.Provider>
      value ={{ color: 'green', size: '50px' }}
      <div>
        <Card icon={FaMotorcycle}>
          <Card.Header>
            Order: number {/* Number using UUID */}, Name
          </Card.Header>
          <Card.Body>
            <Card.Title>Costs: $price {/* Price */}</Card.Title>
            <Card.Text>Description</Card.Text>
          </Card.Body>
          <Button>
            {/* For more ticket information */}
            <BsChevronDoubleDown />
            <BsChevronDoubleUp />
          </Button>
          <Button variant="success" size="lg">
            {/* to accept or cancel order */}
            <FaCheckCircle />
            <FaTimesCircle />
          </Button>
        </Card>
        ));
      </div>
      <div>
        <Button variant="danger">Cancel All</Button>{' '}
        {/* Are you sure you want to cancel all: Yes/ No */}
        {/* Form:*/} {/* Reason to Cancel Description */}
      </div>
    </IconContext.Provider>
  );
};

export default Ticket;
