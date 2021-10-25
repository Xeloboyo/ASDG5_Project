import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Reply.css";
import "./ReviewPost.css";

export default class Reply extends Component {
    constructor(props) {
        super(props);

        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);

        this.state = {
            AuthorName: "",
            AuthorID: "",
            Post_Reply_Comment: "",
            Post_Edited: false,
            User_ID: "",
            User_Type: "",
            Replying_To: ""
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:5002/reply/" + this.props.postID);
        const data = await response.json();
        const responseUser = await fetch("http://localhost:5002/login/");
        const dataUser = await responseUser.json();
        const authorID = data.data.User_ID.slice(1, -1);
        const userID = localStorage ? localStorage.id.slice(1, -1) : "";
        var authorName = "";
        var user_Type = "";
        dataUser.forEach(element => {
            if (element._id == authorID) {
                authorName = element.User_Name;
            }
            if (element._id == userID) {
                user_Type = element.User_Category;
            }
        });
        this.setState({
            AuthorName: authorName,
            AuthorID: authorID,
            Post_Reply_Comment: data.data.Post_Reply_Comment,
            Post_Edited: data.data.Post_Edited,
            User_ID: userID ? userID : "",
            User_Type: user_Type,
            Replying_To: data.data.Replying_To
        })
    }

    onClickEdit(e) {
        this.props.editReply(this.props.indexKey);
    }

    async onClickDelete(e) {
        await fetch("http://localhost:5002/reply/" + this.props.postID, {method: "DELETE"})
        this.props.replyChange();
    }

    render() {
        return (
            <Container className="replyBox">
                <h5>{this.state.AuthorName}</h5>
                <p className="comment">
                    {this.state.Post_Reply_Comment}
                    <p className="editedText">{this.state.Post_Edited ? "edited" : ""}</p>
                </p>
                <Nav className="editBar">
                       {this.state.User_ID == this.state.AuthorID || this.state.User_Type == "admin" ? <Nav.Link onClick={this.onClickEdit}>Edit</Nav.Link> : ""}
                        {this.state.User_ID == this.state.AuthorID || this.state.User_Type == "admin" ? <Nav.Link onClick={this.onClickDelete}> Delete</Nav.Link> : ""}
                        <Button className="likeButton">Like</Button>
                    </Nav>
            </Container>
        )
    }
}
