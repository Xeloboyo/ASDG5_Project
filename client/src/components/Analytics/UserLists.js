import React, { Component } from 'react';
import {
  Container,
  Table,
  Button,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';

const UserLists = () => {
  return (
    <div>
      <Container>
        <h3>Tangle User Lists</h3>
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

        <br />

        <div>
          <Table bordered>
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
              <tr>
                <td>id</td>
                <td>email</td>
                <td>*****</td>
                <td>Date.now()</td>
                <td>
                  <Button
                    variant="danger"
                    style={{
                      // justifyContent: 'center',
                      // alignItems: 'center',
                      display: 'block',
                      margin: 'auto'
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>id</td>
                <td>email</td>
                <td>*****</td>
                <td>Date.now()</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>id</td>
                <td>email</td>
                <td>*****</td>
                <td>Date.now()</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default UserLists;
