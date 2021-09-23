import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BannerImage from "../AdminHome/banner.png";
import ReactLogo from "../logo.svg";

var sectionStyle = {
  backgroundImage: `url(${BannerImage})`,
};

class AdminHomePage extends Component {
  render() {
    return (
      <Container className="mx-0 px-0" fluid>
        <Row>
          <Col>
            <Container
              fluid
              className="p-5 text-white text-center shadow-lg"
              style={sectionStyle}
            >
              <img src={ReactLogo} alt="React Logo" width="30%" />
              <p class="lead text-center">Staff View</p>
              <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum{" "}
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminHomePage;
