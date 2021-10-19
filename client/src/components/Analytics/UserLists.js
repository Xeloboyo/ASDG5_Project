import React, { Component } from 'react';
import { Container, Table, Button, Dropdown } from 'react-bootstrap';

const UserLists = () => {
  return (
    <div>
      <Container>
        <h3>Tangle User Lists</h3>
        {/* Toggle */}
        <Dropdown>
          <Dropdown.Toggle variant="Info" id="dropdown-basic">
            All Users
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/All Users">All Users</Dropdown.Item>
            <Dropdown.Item href="#/Admins">Admins</Dropdown.Item>
            <Dropdown.Item href="#/Users">Registered Users</Dropdown.Item>
            <Dropdown.Item href="#/Restaurants">Restaurants </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Date Created</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <td>id</td>
            <td>email</td>
            <td>*****</td>
            <td>Date.now()</td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tbody>

          <tbody>
            <td>id</td>
            <td>email</td>
            <td>*****</td>
            <td>Date.now()</td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserLists;
