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
            User_Name: "",
            Post_Reply_Comment: "",
            Post_Edited: false,
            User_ID: "",
            Replying_To: ""
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:5002/reply/" + this.props.postID);
        const data = await response.json();
        this.setState({
            User_Name:"",
            Post_Reply_Comment: data.data.Post_Reply_Comment,
            Post_Edited: data.data.Post_Edited,
            User_ID: data.data.User_ID,
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
                <h5>{this.state.User_Name}</h5>
                <p className="comment">
                    {this.state.Post_Reply_Comment}
                    <p className="editedText">{this.state.Post_Edited ? "edited" : ""}</p>
                </p>
                <Nav className="editBar">
                        <Nav.Link onClick={this.onClickEdit}>Edit</Nav.Link>
                        <Nav.Link onClick={this.onClickDelete}> Delete</Nav.Link>
                        <Button className="likeButton">Like</Button>
                    </Nav>
            </Container>
        )
    }
}
