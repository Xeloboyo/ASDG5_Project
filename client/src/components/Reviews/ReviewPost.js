import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Button from "react-bootstrap/Button";
import Reply from "./Reply";
import ReplyEdit from "./ReplyForm";
import "./ReviewPost.css";

export default class ReviewPost extends Component {
    constructor(props) {
        super(props);

        this.refreshReplies = this.refreshReplies.bind(this);
        this.replyEditOn = this.replyEditOn.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onclickEdit = this.onclickEdit.bind(this);
        this.onClickExpand = this.onClickExpand.bind(this);
        this.onClickCollapse = this.onClickCollapse.bind(this);

        this.state = {
            AuthorID: "",
            AuthorName: "",
            Post_Review_Title: "",
            Post_Review_Rate: 1,
            Post_Review_Comment: "",
            Post_Edited: false,
            Post_Venue: "",
            User_ID: "",
            User_Type: "",
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
        const responseRestaurant = await fetch("http://localhost:5002/restaurant/" + dataReview.data.Venue_ID);
        const dataRestaurant = await responseRestaurant.json();
        const responseUser = await fetch("http://localhost:5002/login/");
        const dataUser = await responseUser.json();
        const userID = localStorage.id ? localStorage.id.slice(1, -1) : "";
        const authorID = dataReview.data.User_ID.slice(1, -1);
        var authorName = "";
        var user_Type = "";
        dataUser.forEach(element =>{
            if (element._id == authorID) {
                authorName = element.User_Name;
            }
            if (userID && element._id == userID) {
                user_Type = element.User_Category;
            }
        })

        var replyPost = [];
        dataReply.data.forEach((element, index) => {
            replyPost.push(<Reply key={index} indexKey={index} postID={element._id} replyChange={this.refreshReplies} editReply={this.replyEditOn}/>);
        });
        this.setState({
            AuthorID: dataReview.data.User_ID,
            AuthorName: authorName,
            Post_Review_Title: dataReview.data.Post_Review_Title,
            Post_Review_Rate: dataReview.data.Post_Review_Rate,
            Post_Review_Comment: dataReview.data.Post_Review_Comment,
            Post_Edited: dataReview.data.Post_Edited,
            Post_Venue: dataRestaurant.Restaurant_Name,
            User_ID: localStorage.id ? localStorage.id : "",
            User_Type: user_Type,
            ReplyPosts: replyPost
        })
    }

    async refreshReplies() {
        const responseReply = await fetch("http://localhost:5002/reply/review/" + this.props.postID);
        const dataReply = await responseReply.json();
        var replyPost = [];
        dataReply.data.forEach((element, index) => {
            replyPost.push(<Reply key={index} indexKey={index} postID={element._id} replyChange={this.refreshReplies} editReply={this.replyEditOn}/>);
        });

        this.setState({
            ReplyPosts: replyPost
        })
    }

    async replyEditOn(keyIndex) {
        const responseReply = await fetch("http://localhost:5002/reply/review/" + this.props.postID);
        const dataReply = await responseReply.json();
        var replyPost = [];
        dataReply.data.forEach((element, index) => {
            replyPost.push(index != keyIndex ? <Reply key={index} indexKey={index} postID={element._id} replyChange={this.refreshReplies} editReply={this.replyEditOn}/> : <ReplyEdit key={index} indexKey={index} postID={element._id} replyChange={this.refreshReplies}/>);
        });

        this.setState({
            ReplyPosts: replyPost
        })
    }

    async onClickDelete(e) {
        await fetch("http://localhost:5002/review/" + this.props.postID, {method: "DELETE"})
        this.props.reviewChange();
    }

    onclickEdit(e) {
        this.props.editReview(this.props.indexKey);
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
                    <h5 className="subject">{this.state.Post_Venue}</h5>
                    <h4>{this.state.AuthorName}: {" " + this.state.Post_Review_Title}</h4>
                    <div className="subject">
                        {this.state.Post_Review_Rate} / 5
                        </div>
                    <Container>
                        <p className="descriptionBox">
                            {this.state.Post_Review_Comment}
                            <p className="editedText">{this.state.Post_Edited ? "Edited" : ""}</p>
                        </p>
                        <Nav className="editBar">
                            <NavItem>{this.state.AuthorID == this.state.User_ID || this.state.User_Type == "admin" ? <Nav.Link onClick={this.onclickEdit}>Edit</Nav.Link> : ""}</NavItem>
                            <NavItem>{this.state.AuthorID == this.state.User_ID || this.state.User_Type == "admin" ? <Nav.Link onClick={this.onClickDelete}> Delete</Nav.Link> : ""}</NavItem>
                            <NavItem><Button className="likeButton">Like</Button></NavItem>
                        </Nav>
                        {!this.state.Expanded && this.state.ReplyPosts.length > 0 ? <Container className="review"><Nav.Link onClick={this.onClickExpand} >Expand {this.state.ReplyPosts.length} Replies</Nav.Link></Container> : ""}
                    </Container>
                </Container>
                <Container>
                    {this.state.Expanded ? this.state.ReplyPosts : ""}
                    {(this.state.Expanded || this.state.ReplyPosts.length <= 0) && this.state.User_ID ? <ReplyEdit replyTo = {this.props.postID} replyChange={this.refreshReplies} /> : ""}
                    {this.state.Expanded ? <Container className="review"><Nav.Link onClick={this.onClickCollapse} >Collapse</Nav.Link></Container> : ""}
                </Container>
            </Container>
        )
    }
}