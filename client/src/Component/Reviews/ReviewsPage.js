import React from "react";
import Container from "react-bootstrap/esm/Container";
import Review from "./ReviewPost";
import ReviewEdit from "./ReviewForm";
import "./ReviewsPage.css";

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
                <ReviewEdit/>
            </Container>
        </Container>
    );
}

export default Reviews;