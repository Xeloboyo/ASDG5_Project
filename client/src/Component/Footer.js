import './Footer.css';

import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <Container className="mx-0 px-0" fluid>
      <Card className="bg-dark text-white">
        <Card.Title className="text-center">2021 Tangle </Card.Title>
        <Row>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Explore</Card.Title>
              <Card.Text href="#">Home</Card.Text>
              <Card.Text href="#">Restaurants</Card.Text>
              <Card.Text href="#">Reviews</Card.Text>
              <Card.Text href="#">Community Page</Card.Text>
            </Container>
          </Col>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Services</Card.Title>
              <Card.Text href="#">Join Us</Card.Text>
              <Card.Text href="#">Business Pro</Card.Text>
              <Card.Text href="#">Feedback</Card.Text>
            </Container>
          </Col>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Social Media</Card.Title>
              <Card.Text href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: '10px' }}>Facebook</span>
                </i>
              </Card.Text>
              <Card.Text href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: '10px' }}>Instagram</span>
                </i>
              </Card.Text>
              <Card.Text href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: '10px' }}>Twitter</span>
                </i>
              </Card.Text>
              <Card.Text href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: '10px' }}>Youtube</span>
                </i>
              </Card.Text>
            </Container>
          </Col>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Legal</Card.Title>
              <Card.Text href="#">Terms & Conditions</Card.Text>
              <Card.Text href="#">Privacy Policy</Card.Text>
              <Card.Text href="#">Terms of Use</Card.Text>
            </Container>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Footer;
