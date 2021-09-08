import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  ListGroup
} from 'react-bootstrap';
import '../scss/style.scss';

const Subscribe = () => {
  return (
    <div>
      <Container>
        <CardGroup style={{ padding: '5px' }}>
          <Card>
            <Card.Body>
              <Card.Title>User</Card.Title>
              <Card.Subtitle>Enter your email and password below</Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Order Takeaway & Pre-Booking Place
                </ListGroup.Item>
                <ListGroup.Item>
                  Review Restaurants & Community Feedback
                </ListGroup.Item>
                <ListGroup.Item>Be a Professional Reviewer</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button>Sign Up!</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Business</Card.Title>
              <Card.Subtitle>
                Gain popularity by registering your restaurant with us!
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Accept Takeaway & Pre-Booking Place
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Restaurant Reviews and Support
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Advertise and Show Your Restaurant
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Register Now!</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Business Pro</Card.Title>
              <Card.Subtitle>
                Everything with Business Plan with extra additional Analytics
                feature
              </Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Use Analytical Tool to improve your restaurant profit
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Understand your customer better with Statistics
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Download your Analytics Report
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Subscibe Now!</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Subscribe;
