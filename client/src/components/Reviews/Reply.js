import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Reply.css";
import "./ReviewPost.css";

function Reply() {
    return (
        <Container className="replyBox">
            <h5>name</h5>
            <p className="comment">
                Comment in reply in paragraph.
                <p className="editedText">Edited</p>
            </p>
            <Nav className="editBar">
                    <Nav.Link  href="">Edit</Nav.Link>
                    <Nav.Link href=""> Delete</Nav.Link>
                    <Button className="likeButton">Like</Button>
                </Nav>
        </Container>
    )
}

export default Reply;
