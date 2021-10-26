import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaTimesCircle, FaMotorcycle } from 'react-icons/fa';
import { GiTabletopPlayers } from 'react-icons/gi';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

/* create 2 Ticket Designs,  using if statement to determine whether
 it's for takeaway and reservations
 if takeaway, use logo { FaMotorcycle }
 if reservations, use logo { GiTabletopPlayers }
 both tickets have accept and cancel button
 page allows cancel all, will show warning
*/

export const Ticket = () => {
  return (
    <Container>
      <IconContext.Provider value={{ size: '20px' }}>
        <div>
          <Card
            style={{
              width: '17rem',
              marginBottom: '25px',
              marginLeft: '220px'
              // marginRight: 'auto'
            }}
          >
            {/* Takeaway */}

            <Card.Header>
              <Row>
                <Col sm={7}>
                  <div>
                    <span style={{ color: 'green' }}>
                      <FaMotorcycle /> Takeaway <br />
                    </span>
                    in 3 minutes
                  </div>
                </Col>
                <Col sm={5}>
                  <Button variant="success" size="sm">
                    {/* to accept or cancel order */}
                    <FaCheckCircle />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ marginLeft: '7px' }}
                  >
                    <FaTimesCircle />
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Subtitle>
                #1001 {/* Generate Number using UUID */}
              </Card.Subtitle>
              {/* <Card.Text style={{ background: 'yellow' }}>Description</Card.Text> */}
            </Card.Body>
            <Button style={{ background: 'lightgrey' }}>
              <Card.Text>
                1x Fish and Chips
                <br />- no mayo
              </Card.Text>
            </Button>
          </Card>
        </div>

        {/* Reservation */}

        <div>
          <Card
            style={{
              width: '17rem',
              marginBottom: '15px',
              marginLeft: '220px'
              // marginRight: 'auto'
            }}
          >
            <Card.Header>
              <Row>
                <Col sm={7}>
                  <span style={{ color: 'darkblue' }}>
                    <GiTabletopPlayers /> Reservation <br />
                  </span>
                  in 7 minutes
                </Col>
                <Col sm={5}>
                  <Button variant="success" size="sm">
                    {/* to accept or cancel order */}
                    <FaCheckCircle />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ marginLeft: '7px' }}
                  >
                    <FaTimesCircle />
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Title>Amy</Card.Title>
              <Card.Subtitle>#203 </Card.Subtitle>
              {/* <Card.Text>Description</Card.Text> */}
            </Card.Body>
            {/* For more ticket information */}
            <Button style={{ background: 'lightgrey' }}>
              <div>
                <Card.Text>Booking for 3 people</Card.Text>
              </div>
            </Button>
          </Card>
        </div>
      </IconContext.Provider>
    </Container>
  );
};

export default Ticket;
