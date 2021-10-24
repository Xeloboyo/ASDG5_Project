import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Review from "./ReviewPost";
import ReviewEdit from "./ReviewForm";
import "./ReviewsPage.css";

export default class ReviewsPast extends Component {
    constructor(props) {
        super(props);

        this.refreshReviews = this.refreshReviews.bind(this);

        this.state = {
            User_ID: "6158811e44c3c679ec5c295f",
            ReviewPosts: []
        }
    }

    async componentDidMount() {
        //get user ID from session
        //check if user loged-in
        //true set user id at state
        const response = await fetch("http://localhost:5002/review/user/" + this.state.User_ID);
        const data = await response.json();
        const reviews = [];
        data.data.forEach((element, index) => {
            reviews.push(<Review key={index} postID={element._id} reviewChange={this.refreshReviews}/>);
        });
        
        this.setState({
            ReviewPosts: reviews
        })
    }

     async refreshReviews() {
        const response = await fetch("http://localhost:5002/review/user/" + this.state.User_ID);
        const data = await response.json();
        const reviews = [];
        data.data.forEach((element, index) => {
            reviews.push(<Review key={index} postID={element._id} reviewChange={this.refreshReviews}/>);
        });
        
        this.setState({
            ReviewPosts: reviews
        })
    }

    render() {
        return (
                <Container className="reviewsBox">
                    <div>
                        {this.state.ReviewPosts}
                    </div>
                </Container>
        );
    }
}