import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { LinkContainer } from "react-router-bootstrap";
import ReactLogo from "../logo.svg";
import "./AdminHomeNav.css";

function AdminHome() {
  return (
    <Navbar sticky="top" className="bg-dark py-2 flex-grow-1">
      {/* <Container className="bg-dark px-5 mx-0 d-flex"> */}
      <LinkContainer to="/adminhomenav">
        <Navbar.Brand className="text-white">
          <img
            src={ReactLogo}
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{
              marginLeft: "15px",
            }}
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
        <LinkContainer to="/adminhomenav">
          <Nav.Link
            href="./Home/Homepage.jsx"
            className="text-white  line-left"
          >
            Home
          </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/promotions">
          <Nav.Link
            href="./Promotions/Promotions.js"
            className="text-white line-left"
          >
            Promotions
          </Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav style={{ marginRight: "30px" }}>
        <Navbar.Brand className="text">Login as Staff</Navbar.Brand>
        <LinkContainer to="/" className="float-right">
          <Button variant="light">Logout</Button>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default AdminHome;
// Home, restaurants, reviews, community page, Login, Register
