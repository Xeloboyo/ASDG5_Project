import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const UserTable = () => {
  return (
    <div>
      <Container>
        <Table bordered>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Password</th>
              {/* <th>User Category</th> */}
              <th>Date Created</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* show from database */}
              <td>id</td>
              <td>email</td>
              <td>*****</td>
              {/* <td>Admin / Staff / Customer</td> */}
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
        </Table>
      </Container>
    </div>
  );
};

export default UserTable;
