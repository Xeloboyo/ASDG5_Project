import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Review from "./ReviewPost";
import ReviewEdit from "./ReviewForm";
import "./ReviewsPage.css";

export default class Reviews extends Component {
    constructor(props) {
        super(props);

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
        
        this.setState({
            ReviewPosts: data.data
        })
    }

    render() {
        var reviews = [];
        for (var i = 0; i < this.state.ReviewPosts.length; i++) {
            reviews.push(<Review key={this.state.ReviewPosts[i]._id} postID={this.state.ReviewPosts[i]._id} />);
        }
        //console.log(reviews);

        return (
            <Container>
                <h1>
                    Past Reviews
                </h1>
                <Container className="reviewsBox">
                    <div>
                        {reviews}
                    </div>
                </Container>
            </Container>
        );
    }
}