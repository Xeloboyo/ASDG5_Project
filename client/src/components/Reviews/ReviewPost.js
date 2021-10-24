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

        this.onClickExpand = this.onClickExpand.bind(this);
        this.onClickCollapse = this.onClickCollapse.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);

        this.state = {
            Post_Review_Title: "",
            Post_Review_Rate: 1,
            Post_Review_Comment: "",
            Post_Edited: false,
            User_ID: "",
            ReplyPosts: [],
            Replies: [],
            Expanded: false
        }
    }
    
    async componentDidMount() {
        const responseReview = await fetch("http://localhost:5002/review/" + this.props.postID);
        const dataReview = await responseReview.json();
        const responseReply = await fetch("http://localhost:5002/reply/review/" + this.props.postID);
        const dataReply = await responseReply.json();
        var replyPost = [];
        dataReply.data.forEach((element, index) => {
            replyPost.push(<Reply key={index} postID={element._id} replyChange={this.refreshReplies}/>);
        });

        this.setState({
            Post_Review_Title: dataReview.data.Post_Review_Title,
            Post_Review_Rate: dataReview.data.Post_Review_Rate,
            Post_Review_Comment: dataReview.data.Post_Review_Comment,
            Post_Edited: dataReview.data.Post_Edited,
            User_ID: dataReview.data.User_ID,
            ReplyPosts: replyPost
        })
    }

    async onClickDelete(e) {
        await fetch("http://localhost:5002/review/" + this.props.postID, {method: "DELETE"})
        this.props.reviewChange();
    }

    onClickExpand(e) {
        this.setState({
            Expanded: true,
        })
    }

    onClickCollapse(e) {
        this.setState({
            Expanded: false,
        })
    }

    render() {
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
                            <Nav.Link >Edit</Nav.Link>
                            <Nav.Link onClick={this.onClickDelete}> Delete</Nav.Link>
                            <Button className="likeButton">Like</Button>
                        </Nav>
                        {!this.state.Expanded && this.state.ReplyPosts.length > 0 ? <Container className="review"><Nav.Link onClick={this.onClickExpand} >Expand {this.state.ReplyPosts.length} Replies</Nav.Link></Container> : ""}
                    </Container>
                </Container>
                <Container>
                    {this.state.Expanded ? this.state.ReplyPosts : ""}
                    {this.state.Expanded || this.state.ReplyPosts.length <= 0 ? <ReplyEdit replyTo = {this.props.postID} replyChange={this.refreshReplies} /> : ""}
                    {this.state.Expanded ? <Container className="review"><Nav.Link onClick={this.onClickCollapse} >Collapse</Nav.Link></Container> : ""}
                </Container>
            </Container>
        )
    }
}