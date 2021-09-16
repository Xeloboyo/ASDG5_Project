import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <Container>
            <Container>
            <table>
                <tr>
                    <th>
                        <h1>Pickle Restaurant Menu</h1> 
                    </th>
                    <th>
                        <LinkContainer to="/menuadd">
                            <Nav.Link>Add Product</Nav.Link>
                        </LinkContainer>
                    </th>
                    <th>
                        <LinkContainer to="/Restaurant">
                            <Nav.Link>Back</Nav.Link>
                        </LinkContainer>
                    </th>
                </tr>
            </table>
            </Container>

            <Container>
                <table>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Edit
                        </th>
                    </tr>
                    <tr>
                        <th>
                            01
                        </th>
                        <th>
                            X
                        </th>
                        <th>
                            Pickle Salad
                        </th>
                        <th>
                            $10.00
                        </th>
                        <th>
                            <LinkContainer to="/MenuEdit">
                                <Nav.Link>Edit</Nav.Link>
                            </LinkContainer>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            02
                        </th>
                        <th>
                            X
                        </th>
                        <th>
                            Pickle Wrap
                        </th>
                        <th>
                            $9.00
                        </th>
                        <th>
                            <LinkContainer to="/MenuEdit">
                                <Nav.Link>Edit</Nav.Link>
                            </LinkContainer>
                        </th>
                    </tr>
                </table>
            </Container>
        </Container>
    ); 
}

export default Menu;