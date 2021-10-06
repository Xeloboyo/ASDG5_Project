import React from "react";
import Container from "react-bootstrap/esm/Container";
import Review from "./ReviewPost";
import ReviewEdit from "./ReviewForm";
import "./ReviewsPage.css";

function ReviewSection() {
    return (
    <Container>
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

export default ReviewSection;