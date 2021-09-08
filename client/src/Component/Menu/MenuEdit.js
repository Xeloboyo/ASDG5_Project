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
                    <h1>Edit Menu Details</h1>
                </th>
                <th>
                    <LinkContainer to="/Menu">
                        <Nav.Link>Back</Nav.Link>
                    </LinkContainer>
                </th>
            </table>

            <Container>
                <Form>
                    <Form.Group className="">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="" placeholder="Enter Product Name"/>
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="" placeholder="Enter Product Price"/>
                        <Form.Label>Restaurant Image</Form.Label>
                        <Form.Control type="file" />
                        <button type="submit">Confirm Edit Product</button>
                        <button type="">Delete Product</button>
                    </Form.Group>
                </Form>
            </Container>
        </Container>

    );
}

export default MenuEdit;