import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Review from "./ReviewPost";
import ReviewEdit from "./ReviewForm";
import "./ReviewsPage.css";

export default class ReviewsRestaurant extends Component {
    constructor(props) {
        super(props);

        this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);
        this.refreshReviews = this.refreshReviews.bind(this);
        this.reviewEditOn = this.reviewEditOn.bind(this);

        this.state = {
            SelectedRestaurant: 0,
            RestaurantIDs: [],
            RestaurantNames: [],
            ReviewPosts: [],
            User_ID: ""
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:5002/restaurant/");
        const data = await response.json();
        var restaurantIDs = [];
        var restaurantNames = [];
        data.forEach(element => {
            restaurantIDs.push(element._id);
            restaurantNames.push(element.Restaurant_Name)
        });

        const responseReviews = await fetch("http://localhost:5002/Review/restaurant/" + restaurantIDs[this.state.SelectedRestaurant]);
        const dataReviews = await responseReviews.json();
        var reviewPosts = [];
        dataReviews.data.forEach((element, index) => {
            reviewPosts.push(<Review key={index} indexKey={index} postID={element._id} reviewChange={this.refreshReviews} editReview={this.reviewEditOn}/>);
        });
        this.setState({
            RestaurantIDs: restaurantIDs,
            RestaurantNames: restaurantNames,
            ReviewPosts: reviewPosts,
            User_ID: localStorage.id ? localStorage.id : ""
        })
    }

    async refreshReviews() {
        const responseReviews = await fetch("http://localhost:5002/Review/restaurant/" + this.state.RestaurantIDs[this.state.SelectedRestaurant]);
        const dataReviews = await responseReviews.json();
        var reviewPosts = [];
        dataReviews.data.forEach((element, index) => {
            reviewPosts.push(<Review key={index} indexKey={index} postID={element._id} reviewChange={this.refreshReviews} editReview={this.reviewEditOn}/>);
        });
        this.setState({
            ReviewPosts: reviewPosts,
        })
    }

    async reviewEditOn(keyIndex) {
        const responseReviews = await fetch("http://localhost:5002/Review/restaurant/" + this.state.RestaurantIDs[this.state.SelectedRestaurant]);
        const dataReviews = await responseReviews.json();
        var reviewPosts = [];
        dataReviews.data.forEach((element, index) => {
            reviewPosts.push(index != keyIndex ? <Review key={index} indexKey={index} postID={element._id} reviewChange={this.refreshReviews} editReview={this.reviewEditOn}/> : <ReviewEdit key={index} postID={element._id} reviewChange={this.refreshReviews}/> );
        });
        this.setState({
            ReviewPosts: reviewPosts,
        })
    }

    onChangeRestaurantName(e) {
        const selectedRestaurant = e.target.value;
        this.setState({
            ReviewPosts: []
        })
        fetch("http://localhost:5002/Review/restaurant/" + this.state.RestaurantIDs[selectedRestaurant])
            .then(response => response.json())
            .then(data => {
                var reviewPosts = [];
                data.data.forEach((element, index) => {
                    reviewPosts.push(<Review key={index} indexKey={index} postID={element._id} reviewChange={this.refreshReviews} editReview={this.reviewEditOn}/>);
                })
                this.setState({
                    SelectedRestaurant: selectedRestaurant,
                    ReviewPosts: reviewPosts,
                })
            })
    }

    render() {
        return (
            <Container>
                    <h3>Restaurant:{" "}
                    <select  
                        onChange={this.onChangeRestaurantName}
                    >
                        {
                            this.state.RestaurantNames.map((name, index) => {
                                return <option
                                    key={index}
                                    value={index}
                                >
                                    {name}
                                </option>
                            })
                        }
                    </select>
                    </h3>
                <Container className="reviewsBox">
                    <div>
                        {this.state.ReviewPosts.length > 0 || this.state.User_ID ? this.state.ReviewPosts : <h5>No Review For this Restaurant Yet!</h5>}
                    </div>
                    {this.state.User_ID ? <ReviewEdit restaurantID={this.state.RestaurantIDs[this.state.SelectedRestaurant]} reviewChange={this.refreshReviews}/> : ""}
                </Container>
            </Container>
        );
    }
}