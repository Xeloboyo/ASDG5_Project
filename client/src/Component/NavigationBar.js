import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { LinkContainer } from "react-router-bootstrap";
import ReactLogo from "./logo.svg";

function NavigationBar() {
  return (
    <Navbar sticky="top" className="bg-dark py-2 flex-grow-1">
      <Container className="bg-dark px-5 mx-0 d-flex">
        <LinkContainer to="/">
          <Navbar.Brand className="text-white">
            <img
              src={ReactLogo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className=" flex-grow-1">
          <Form className="d-flex mx-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <LinkContainer to="/">
            <Nav.Link href="#home" className="text-white  line-left">
              Home
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/restaurants">
            <Nav.Link href="#features" className="text-white line-left">
              Restaurants
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/reviews">
            <Nav.Link href="#pricing" className="text-white line-left">
              Reviews
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/communitypage">
            <Nav.Link href="#communitypage" className="text-white line-left">
              Community Page
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/register" className="float-right mx-3">
            <Button variant="outline-success">Register</Button>
          </LinkContainer>
          <LinkContainer to="/login" className="float-right">
            <Button variant="light">Login</Button>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
// Home, restaurants, reviews, community page, Login, Register
