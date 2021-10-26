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
        this.onClickLike = this.onClickLike.bind(this);
        this.OnClickUnlike = this.OnClickUnlike.bind(this);

        this.state = {
            AuthorName: "",
            AuthorID: "",
            Post_Reply_Comment: "",
            Post_Edited: false,
            User_ID: "",
            User_Type: "",
            Replying_To: "",
            Liked: false,
            Likes: []
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:5002/reply/" + this.props.postID);
        const data = await response.json();
        const responseUser = await fetch("http://localhost:5002/login/");
        const dataUser = await responseUser.json();
        const responseLikes = await fetch("http://localhost:5002/like/post/" + this.props.postID);
        const dataLikes = await responseLikes.json();


        const authorID = data.data.User_ID.slice(1, -1);
        const userID = localStorage ? localStorage.id.slice(1, -1) : "";
        var authorName = "";
        var user_Type = "";
        var liked = false;

        dataLikes.data.forEach(element => {
            if (element.User_ID == userID) {
                liked = true;
            }            
        })
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
            Replying_To: data.data.Replying_To,
            Liked: liked,
            Likes: dataLikes.data
        })
    }

    onClickEdit(e) {
        this.props.editReply(this.props.indexKey);
    }

    async onClickDelete(e) {
        await fetch("http://localhost:5002/reply/" + this.props.postID, {method: "DELETE"})
        this.props.replyChange();
    }

    async onClickLike(e) {
        if (this.state.User_ID) {
            const newLike = {
                User_ID: this.state.User_ID,
                Post_ID: this.props.postID
            }
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(newLike)
            }
            fetch("http://localhost:5002/like/add", requestOptions)
            .then(async response => {
                const isJson = response.headers.get("content-type")?.includes("application/json");
                const data = isJson && await response.json();

                if (!response.ok) {
                    console.log(data);
                }
                const responseLikes = await fetch("http://localhost:5002/like/post/" + this.props.postID);
                const dataLikes = await responseLikes.json();
                this.setState({
                    Liked: true,
                    Likes: dataLikes.data
                })
            })
        } else {
            window.location.href = "/login";
        }
    }

    async OnClickUnlike(e) {
        await fetch("http://localhost:5002/like/" + this.state.Likes[0]._id, {method: "DELETE"})
        const responseLikes = await fetch("http://localhost:5002/like/post/" + this.props.postID);
        const dataLikes = await responseLikes.json();
        this.setState({
            Liked: false,
            Likes: dataLikes.data
        })
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
                        {this.state.Liked ? <Button class="btn btn-secondary" onClick={this.OnClickUnlike}>{this.state.Likes.length + " "}Likes</Button> : <Button class="btn btn-primary" onClick={this.onClickLike}>{this.state.Likes.length + " "}Likes</Button>}
                    </Nav>
            </Container>
        )
    }
}
