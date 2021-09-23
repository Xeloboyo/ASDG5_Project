import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function MenuAdd() {
    return (
        <Container>
            <table>
                <th>
                    <h1>Add Product on Menu Details</h1>
                </th>
                <th>
                    <LinkContainer to="/Restaurant">
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
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" />
                        <button type="submit">Confirm Add Product</button>
                    </Form.Group>
                </Form>
            </Container>
        </Container>

    );
}

export default MenuAdd;