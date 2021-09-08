import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './css/CommunityPageEdit.css';

function CommunityPageEdit() {
  return (
    <Container>
      <Container className="mx-0 px-0" fluid>
        <table>
          <tr>
            <h1 className="title">Edit Posts</h1>
            <th className="right">
              <LinkContainer to="/communitypage">
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
            </div>
            <table className="edit_table">
              <tr>
                <th>
                  <LinkContainer
                    to="/communitypageedits"
                    className="edit_button"
                  >
                    <Button variant="primary">Edit Post</Button>
                  </LinkContainer>
                </th>
                <Button variant="outline-primary">Delete</Button>{' '}
              </tr>
            </table>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default CommunityPageEdit;
