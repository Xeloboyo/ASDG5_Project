import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./ReviewPost.css";
import Reply from "./Reply";

function ReviewPost() {
    return (
        <Container>
            <Container className="review">
                <h3 className="subject">Subject Line</h3>
                <p className="subject">* * * * *</p>
                <Container>
                    <p className="descriptionBox">
                        Description of the review in paragraph.
                    </p>
                    <Nav>
                        <Nav.Link  href="">Edit</Nav.Link>
                        <Nav.Link href=""> Delete</Nav.Link>
                        <p className="editedText">Edited</p>
                    </Nav>
                </Container>
            </Container>
            <Container>
                <Reply/>
            </Container>
        </Container>
    )
}

export default ReviewPost