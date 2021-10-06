import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Reply from "./Reply";
import ReplyEdit from "./ReplyForm";
import "./ReviewPost.css";

export default class ReviewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Post_Review_Title: "",
            Post_Review_Rate: 1,
            Post_Review_Comment: "",
            Post_Edited: false,
            User_ID: "",
            ReplyPosts: []
        }
    }
    
    async componentDidMount() {
        const responseReview = await fetch("http://localhost:5002/review/" + this.props.postID);
        const dataReview = await responseReview.json();
        const responseReply = await fetch("http://localhost:5002/reply/review/" + this.props.postID);
        const dataReply = await responseReply.json();
        this.setState({
            Post_Review_Title: dataReview.data.Post_Review_Title,
            Post_Review_Rate: dataReview.data.Post_Review_Rate,
            Post_Review_Comment: dataReview.data.Post_Review_Comment,
            Post_Edited: dataReview.data.Post_Edited,
            User_ID: dataReview.data.User_ID,
            ReplyPosts: dataReply.data
        })
    }

    render() {
        var replies = [];
        for (var i = 0; i < this.state.ReplyPosts.length; i++) {
            replies.push(<Reply key={this.state.ReplyPosts[i]._id} postID={this.state.ReplyPosts[i]._id} />);
        }

        return (
            <Container>
                <Container className="review">
                    <h3 className="subject">{this.state.Post_Review_Title}</h3>
                    <div className="subject">
                        {this.state.Post_Review_Rate} / 5
                        </div>
                    <Container>
                        <p className="descriptionBox">
                            {this.state.Post_Review_Comment}
                            <p className="editedText">{this.state.Post_Edited ? "Edited" : ""}</p>
                        </p>
                        <Nav className="editBar">
                            <Nav.Link  href="">Edit</Nav.Link>
                            <Nav.Link href=""> Delete</Nav.Link>
                            <Button className="likeButton">Like</Button>
                        </Nav>
                    </Container>
                </Container>
                <Container>
                    {replies}
                    <ReplyEdit replyTo = {this.props.postID}/>
                </Container>
            </Container>
        )
    }
}