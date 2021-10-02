import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <div
      style={{
        marginLeft: '230px', // start after sidebar
        width: '100%',
        position: 'fixed',
        // marginBottom: '270px',
        padding: '20px 0px', // top and botttom + left and right
        background: '#50cb9b',
        zIndex: '1'
        // marginBottom: '150px'
      }}
    >
      <Container>
        <Row>
          <Nav>
            <Col sm={9}>
              <Nav.Item>Page Name {/* Name */}</Nav.Item>
            </Col>
            <Col sm={2}>
              <Nav.Item>Staff Name</Nav.Item>
            </Col>
          </Nav>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
