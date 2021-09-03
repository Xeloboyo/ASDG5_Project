import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import "./CommunityPage.css";

function CommunityPage() {
  return (
    <Container>
      <Container className="mx-0 px-0" fluid>
        <table className="tables">
          <tr>
            <h1 className="title">Community Page</h1>
            <th>
              <LinkContainer to="/communitypageform">
                <Nav.Link>Create Post</Nav.Link>
              </LinkContainer>
            </th>
          </tr>
          <tr>
            <th>
              <Dropdown className="dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Resturant</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Food</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>
              <LinkContainer to="/communitypageedit">
                <Nav.Link>Edit Post</Nav.Link>
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
            </div>
            <Button variant="outline-success">Like</Button>{" "}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default CommunityPage;
