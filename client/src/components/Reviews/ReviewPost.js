import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Reply from "./Reply";
import ReplyEdit from "./ReplyForm";
import "./ReviewPost.css";

function ReviewPost() {
    return (
        <Container>
            <Container className="review">
                <h3 className="subject">Subject Line</h3>
                <div className="subject">
                    5 / 5
                    </div>
                <Container>
                    <p className="descriptionBox">
                        Description of the review in paragraph.
                        <p className="editedText">Edited</p>
                    </p>
                    <Nav className="editBar">
                        <Nav.Link  href="">Edit</Nav.Link>
                        <Nav.Link href=""> Delete</Nav.Link>
                        <Button className="likeButton">Like</Button>
                    </Nav>
                </Container>
            </Container>
            <Container>
                <Reply/>
                <ReplyEdit/>
            </Container>
        </Container>
    )
}

export default ReviewPost