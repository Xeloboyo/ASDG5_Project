import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Reply.css";
import { LinkContainer } from "react-router-bootstrap";

function Reply() {
    return (
        <Container className="replyBox">
            <h5>name</h5>
            <p className="comment">Comment in reply in paragraph.</p>
            <Nav>
                <Nav.Link href="">Edit</Nav.Link>
                <Nav.Link href=""> Delete</Nav.Link>
                <p className="editedText">Edited</p>
            </Nav>
        </Container>
    )
}

export default Reply;