import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BannerImage from "./banner.png";
import ReactLogo from "../logo.svg";

class HomepageBottom extends Component {
  render() {
    return (
      <Container className="mx-0 px-0" fluid>
        <Row>
          <Col>
            <Container fluid className="p-5 text-white bg-dark shadow-inset">
              <div className="d-flex flex-row">
                <div
                  className="align-middle d-flex align-items-center"
                  style={{ "margin-right": "50px" }}
                >
                  <h4 className="lead">Join community and stuff</h4>
                </div>
                <div xs={2}>
                  <Button className="p-3">
                    Register
                    <span
                      className="text-right"
                      style={{ "padding-left": "50px" }}
                    >
                      {" "}
                      &gt;
                    </span>
                  </Button>
                </div>
                <div xs={1}>
                  <p className="p-3">Or</p>
                </div>
                <div xs={2}>
                  <Button className="p-3" variant="outline-primary">
                    Sign in &gt;
                  </Button>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container fluid className="p-5 bg-secondary">
              <Row>
                <h2 className="display-9 fw-bold pb-3">
                  Search for places near you..
                </h2>
              </Row>
              <Row>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Bob's bakery"
                    aria-label="Search for places"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-dark" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col>
            <Container fluid className="p-5 ">
              reviews an shit
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container fluid className="p-5 bg-dark  text-white ">
              <Row>
                <h3>Contact us</h3>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomepageBottom;
