import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        marginLeft: '270px', // start after sidebar
        width: '100%',
        position: 'fixed',
        marginBottom: '270px'
      }}
    >
      <Nav>
        <Nav.Item style={{ float: 'left' }}>Page {/* Name */}</Nav.Item>
        <div style={{ float: 'right' }}>
          <Nav.Item>Staff Name</Nav.Item>
        </div>
      </Nav>
    </div>
  );
};

export default Header;
