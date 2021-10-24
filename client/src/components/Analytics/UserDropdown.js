import React, { Component } from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';

const UserDropdown = () => {
  return (
    <div>
      <Container>
        {/* Toggle */}
        <div>
          <Dropdown>
            <DropdownButton
              title="Choose Users"
              variant="warning"
              id="dropdown-basic"
            >
              <Dropdown.Item href="#/All-Users">All Users</Dropdown.Item>
              <Dropdown.Item href="#/Admins">Admins</Dropdown.Item>
              <Dropdown.Item href="#/Users">Registered Users</Dropdown.Item>
              <Dropdown.Item href="#/Restaurants">Restaurants </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </div>
      </Container>
    </div>
  );
};

export default UserDropdown;
