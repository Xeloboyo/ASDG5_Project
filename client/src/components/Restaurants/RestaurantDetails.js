import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function RestaurantDetails() {
    return (
        <Container>
            <Container>
                <table>
                    <tr>
                        <th><h1>Pickle Chinese Restaurant</h1></th>
                        <th>
                            <LinkContainer to="/restaurant">
                                <Nav.Link>Back</Nav.Link>
                            </LinkContainer>    
                        </th>
                    </tr>
                </table>
                
            </Container>
            
            <Container>
                <table>
                    <tr>
                        <th>Image ---</th>
                    </tr>
                    <tr>
                        <th>Name:</th>
                        <tr><th>Pickle Restaurant</th></tr>
                        <th>Phone:</th>
                        <tr><th>987654322</th></tr>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <tr><th>PickleRestaurant@gmail.com</th></tr>
                        <th>Address:</th>
                        <tr><th>31 Jessie Street</th></tr>
                    </tr>
                    <tr>
                        <th>Rating:</th>
                        <tr><th>5/5</th></tr>
                        <th>Capacity:</th>
                        <tr><th>100</th></tr>
                    </tr>
                    <tr>
                        <th>
                            <LinkContainer to="/RestaurantEdit">
                                <Nav.Link>Edit Restaurant</Nav.Link>
                            </LinkContainer>
                        </th>
                    </tr>
                </table>
            </Container>
        </Container>
    );
}

export default RestaurantDetails;