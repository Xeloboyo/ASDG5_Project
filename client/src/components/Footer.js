// import './Footer.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <div>
      <Card className="bg-dark text-white p-2">
        <Container className="mx-auto px-auto" fluid>
          <Card.Title className="text-center">2021 Tangle</Card.Title>
          <Row>
            <Col sm={3}>
              <Card.Title>Explore</Card.Title>
              <Card.Text href="/homepage">Home</Card.Text>
              <Card.Text href="/restaurants">Restaurants</Card.Text>
              <Card.Text href="/reviews">Reviews</Card.Text>
              <Card.Text href="/community">Community Page</Card.Text>
            </Col>
            <Col sm={3}>
              <Card.Title>Services</Card.Title>
              <Card.Text href="#register-your-restaurant">Join Us</Card.Text>
              <Card.Text href="#dashboard">Business Pro</Card.Text>
              <Card.Text href="#feedback">Feedback</Card.Text>
            </Col>
            <Col sm={3}>
              <Card.Title>Social Media(s)</Card.Title>
              <Card.Text href="#">
                <SiFacebook />
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </Card.Text>
              <Card.Text href="#">
                <SiInstagram />
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </Card.Text>
              <Card.Text href="#">
                <SiLinkedin />
                <span style={{ marginLeft: '10px' }}>LinkedIn</span>
              </Card.Text>
              <Card.Text href="#">
                <SiYoutube />
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </Card.Text>
            </Col>
            <Col sm={3}>
              <Card.Title>Legal</Card.Title>
              <Card.Text href="#terms-co">Terms & Conditions</Card.Text>
              <Card.Text href="#privacy">Privacy Policy</Card.Text>
              <Card.Text href="#tos">Terms of Use</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default Footer;
