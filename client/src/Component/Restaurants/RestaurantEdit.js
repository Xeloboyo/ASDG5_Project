import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function MenuEdit() {
    return (
        <Container>
            <table>
                <th>
                    <h1>Edit Restaurant Details</h1>
                </th>
                <th>
                    <LinkContainer to="/RestaurantDetails">
                        <Nav.Link>Back</Nav.Link>
                    </LinkContainer>
                </th>
            </table>

            <Container>
            <Form>
                    <Form.Group className="">
                        <Form.Label>Restaurant Name</Form.Label>
                        <Form.Control type="" placeholder="Enter Restaurant Name"/>
                        <Form.Label>Restaurant Email</Form.Label>
                        <Form.Control type="" placeholder="Enter Restaurant Email"/>
                        <Form.Label>Restaurant Address</Form.Label>
                        <Form.Control placeholder="Enter Restaurant Address"/>
                        <Form.Label>Restaurant Contact Number</Form.Label>
                        <Form.Control placeholder="Enter Contact Number"/>
                        <Form.Label>Restaurant Capacity</Form.Label>
                        <Form.Control placeholder="Enter Restaurant Capacity"/>
                        <Form.Label>Restaurant Image</Form.Label>
                        <Form.Control type="file" />
                        <button type="submit">Confirm Edit Restaurant</button>
                        <button>Delete Restaurant</button>
                    </Form.Group>
                </Form>
            </Container>
        </Container>

    );
}

export default MenuEdit;