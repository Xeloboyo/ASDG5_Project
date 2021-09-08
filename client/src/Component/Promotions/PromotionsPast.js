import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { LinkContainer } from "react-router-bootstrap";

function PromotionsPast() {
  return (
    <Container>
      <Container className="mx-0 px-0" fluid>
        <table>
          <tr>
            <h1 className="title">Past Promotions</h1>
            <th className="right">
              <LinkContainer to="/promotions">
                <Nav.Link>Back</Nav.Link>
              </LinkContainer>
            </th>
          </tr>
        </table>
      </Container>
      <Container className="containers">
        <div className="content">
          <div className="post">
            <div>
              <h2>Title</h2>
              <p>
                <small>Username</small>
              </p>
              <p>Post</p>
              <p>Restuarants</p>
            </div>
            <table className="edit_table">
              <tr>
                <th>
                  <LinkContainer to="/promotionsedit" className="edit_button">
                    <Button variant="primary">Edit Post</Button>
                  </LinkContainer>
                </th>
                <Button variant="outline-primary">Delete</Button>{" "}
              </tr>
            </table>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default PromotionsPast;
