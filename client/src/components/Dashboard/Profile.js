import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

/* create 2 Ticket Designs,  using if statement to determine whether
 it's for takeaway and reservations
 if takeaway, use logo { FaMotorcycle }
 if reservations, use logo { GiTabletopPlayers }
 both tickets have accept and cancel button
 both tickets have more and less information
 page allows cancel all, will show warning
*/

function Profile() {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Old Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="type your old password"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            New Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="type your new password"
            />
          </Col>
        </Form.Group>
        <Button>Confirm Change</Button>
        <Button>Cancel</Button>
      </Form>
    </Container>
  );
};

export default Profile;
