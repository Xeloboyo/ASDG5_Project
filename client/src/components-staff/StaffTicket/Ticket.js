import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaTimesCircle, FaMotorcycle } from 'react-icons/fa';
import { GiTabletopPlayers } from 'react-icons/gi';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';

/* create 2 Ticket Designs,  using if statement to determine whether
 it's for takeaway and reservations
 if takeaway, use logo { FaMotorcycle }
 if reservations, use logo { GiTabletopPlayers }
 both tickets have accept and cancel button
 both tickets have more and less information
 page allows cancel all, will show warning
*/

export const Ticket = () => {
  return (
    <Container>
      <IconContext.Provider value={{ size: '20px' }}>
        <div>
          <Card
            style={{
              width: '51rem',
              marginBottom: '30px',
              marginLeft: '380px'
              // marginRight: 'auto'
            }}
          >
            {/* Takeaay */}

            <Card.Header>
              <Row>
                <Col sm={10}>
                  <span style={{ color: 'green', marginRight: '10px' }}>
                    <FaMotorcycle />
                  </span>
                  Order: #1001 {/* Generate Number using UUID */}
                </Col>
                <Col sm={2}>
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
                Total: $<i>100</i> {/* Price */}
              </Card.Subtitle>
              {/* <Card.Text style={{ background: 'yellow' }}>Description</Card.Text> */}
            </Card.Body>
            {/* For more ticket information */}
            <Button style={{ background: 'lightgrey' }}>
              <BsChevronDoubleDown />
              <Card.Text></Card.Text>
              {/* <BsChevronDoubleUp /> 
              <Card.Text></Card.Text>*/}
            </Button>
          </Card>
        </div>

        {/* Reservation */}

        <div>
          <Card
            style={{
              width: '51rem',
              marginBottom: '15px',
              marginLeft: '380px'
              // marginRight: 'auto'
            }}
          >
            <Card.Header>
              <Row>
                <Col sm={10}>
                  <span style={{ color: 'darkblue', marginRight: '10px' }}>
                    <GiTabletopPlayers />
                  </span>
                  Reservation: #11{/* Generate Number using UUID */}
                </Col>
                <Col sm={2}>
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
              <Card.Title>Jane Doe, 5 people</Card.Title>
              <Card.Subtitle>
                Details: <b>20 September, 2PM Thrusday</b> {/* Price */}
              </Card.Subtitle>
              {/* <Card.Text>Description</Card.Text> */}
            </Card.Body>
            {/* For more ticket information */}
            <Button style={{ background: 'lightgrey' }}>
              {/* <BsChevronDoubleDown />
              <Card.Text style={{ background: 'yellow' }}></Card.Text> */}
              <div>
                <Card.Text style={{ background: 'yellow' }}>
                  For Birthday Party
                </Card.Text>
              </div>
              <BsChevronDoubleUp />
            </Button>
          </Card>
        </div>
      </IconContext.Provider>
    </Container>
  );
};

export default Ticket;
