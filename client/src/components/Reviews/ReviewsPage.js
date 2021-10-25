import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Review from "./ReviewPost";
import ReviewEdit from "./ReviewForm";
import "./ReviewsPage.css";
import ReviewsPast from "./ReviewPast";
import ReviewsRestaurant from "./ReviewRestaurants";

export default class Reviews extends Component {
    constructor(props) {
        super(props);

        this.onClickSwapPage = this.onClickSwapPage.bind(this);

        this.state = {
            isRestaurants: true,
            User_ID: ""
        }
    }

    async componentDidMount() {
        if (localStorage.id) {
            this.setState({
                User_ID: localStorage.id,
            })
        }
    }

    onClickSwapPage() {
        if (this.state.User_ID) {
            this.setState({
                isRestaurants: !this.state.isRestaurants
            });
        } else {
            window.location.href = "/login";
        }
    }

    render() {
        return (
            <Container>
                <table>
                    <tr>
                        <h1>
                            {this.state.isRestaurants ? "Restaurant Reviews" : "Past Reviews"}
                        </h1>
                        <th>
                            <Nav.Link className="rightLink" onClick={this.onClickSwapPage} >{this.state.isRestaurants ? "Past Reviews" : "Restaurant Reviews"}</Nav.Link>
                        </th>
                    </tr>
                </table>
                {this.state.isRestaurants ? <ReviewsRestaurant/> : <ReviewsPast/>}
            </Container>
        );
    }
}