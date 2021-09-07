import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./ReviewsPage.css";
import Review from "./ReviewPost";

function Reviews() {
    return (
        <Container>
            <h1>
                Past Reviews
            </h1>
            <Container>
            <p className="placeHolder">You have no past review.</p>
            </Container>
            <Container className="reviewsBox">
                <Review/>
            </Container>
        </Container>
    );
}

export default Reviews;