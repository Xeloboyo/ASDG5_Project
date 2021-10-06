import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Restaurant.css';

function Restaurant() {
  const id = 0;
  return (
    <Container>
      <Container>
        <table className="">
          <tr>
            <th>
              <h1>Restaurant List</h1>
            </th>
            <th>
              <LinkContainer to="/restaurantadd">
                <Nav.Link>Add Restaurant</Nav.Link>
              </LinkContainer>
            </th>
          </tr>
        </table>
      </Container>

      <Container>
        <table className="table">
          <tr>
            <th>Restaurant Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Menu</th>
            <th>Book</th>
          </tr>
          <tr>
            <th>
              <tr>
                <LinkContainer to="/restaurantdetails">
                  <Nav.Link>Pickle Restaurant</Nav.Link>
                </LinkContainer>
              </tr>
            </th>
            <th>987654322</th>
            <th>31 Jessie Street</th>
            <th>5/5</th>
            <th>
              <LinkContainer to="/menu">
                <Nav.Link>Menu</Nav.Link>
              </LinkContainer>
            </th>
            <th><Link to={{pathname:`/addReservation/${id}`, state: { name: 'Pickle Restaurant',  id: '0' } }}>Book Here</Link></th>
          </tr>
        </table>
      </Container>
      
    </Container>
  );
}

export default Restaurant;
