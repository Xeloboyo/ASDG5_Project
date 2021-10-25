import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Review from "./ReviewPost";
import ReviewEdit from "./ReviewForm";
import "./ReviewsPage.css";

export default class ReviewsPast extends Component {
    constructor(props) {
        super(props);

        this.refreshReviews = this.refreshReviews.bind(this);
        this.reviewEditOn = this.reviewEditOn.bind(this);

        this.state = {
            User_ID: "",
            ReviewPosts: []
        }
    }

    async componentDidMount() {
        if (localStorage.id) {
            const response = await fetch("http://localhost:5002/review/user/" + localStorage.id);
            const data = await response.json();
            const reviews = [];
            data.data.forEach((element, index) => {
                reviews.push(<Review key={index} indexKey={index} postID={element._id} reviewChange={this.refreshReviews} editReview={this.reviewEditOn}/>);
            });
            
            this.setState({
                User_ID: localStorage.id ? localStorage.id : "",
                ReviewPosts: reviews
            })
        }
    }

     async refreshReviews() {
        const response = await fetch("http://localhost:5002/review/user/" + this.state.User_ID);
        const data = await response.json();
        const reviews = [];
        data.data.forEach((element, index) => {
            reviews.push(<Review key={index} indexKey={index} postID={element._id} reviewChange={this.refreshReviews} editReview={this.reviewEditOn}/>);
        });
        
        this.setState({
            ReviewPosts: reviews
        })
    }

    async reviewEditOn(keyIndex) {
        const response = await fetch("http://localhost:5002/review/user/" + this.state.User_ID);
        const data = await response.json();
        const reviews = [];
        data.data.forEach((element, index) => {
            reviews.push(keyIndex != index ? <Review key={index} indexKey={index} postID={element._id} reviewChange={this.refreshReviews} editReview={this.reviewEditOn}/> : <ReviewEdit key={index} postID={element._id} reviewChange={this.refreshReviews}/>);
        });
        
        this.setState({
            ReviewPosts: reviews
        })
    }

    render() {
        return (
                <Container className="reviewsBox">
                    <div>
                        {this.state.ReviewPosts.length > 0 ? this.state.ReviewPosts : <h5>You Haven't Post Any Review Yet!!</h5>}
                    </div>
                </Container>
        );
    }
}