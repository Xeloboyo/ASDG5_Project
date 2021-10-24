import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import UserTable from './UserTable';
import UserDropdown from './UserDropdown';

const UserLists = () => {
  return (
    <div>
      <Container>
        <h3>Tangle User Lists</h3>
        <div>
          {/* Toggle */}
          <UserDropdown />
        </div>

        <br />

        <div>
          {/* Table */}
          <UserTable />
        </div>
      </Container>
    </div>
  );
};

export default UserLists;
