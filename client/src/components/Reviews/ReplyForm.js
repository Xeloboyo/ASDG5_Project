import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Reply from "./Reply";

export default class ReplyForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeReplyComment = this.onChangeReplyComment.bind(this);
        this.onSumbitReply = this.onSumbitReply.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);

        this.state = {
            AuthorName: "",
            AuthorID: "",
            Post_Reply_Comment: "",
            Post_Edited: false,
            Replying_to: "",
            User_ID: ""
        }
    }
    componentDidMount() {
        if (this.props.postID) {
            fetch("http://localhost:5002/reply/" + this.props.postID)        
            .then(response => response.json())
            .then(data => {
                this.setState({
                    Post_Reply_Comment: data.data.Post_Reply_Comment,
                    Post_Edited: data.data.Post_Edited,
                    AuthorID: data.data.User_ID,
                    User_ID: localStorage.id ? localStorage.id : "",
                })
            })
        } else {
            this.setState ({
                Replying_to: this.props.replyTo,
                User_ID: localStorage.id ? localStorage.id : "",
            })
        }
    }

    onChangeReplyComment(e) {
        this.setState({
            Post_Reply_Comment: e.target.value
        })
    }

    onSumbitReply = async (e) => {
        const newReply = {
            Post_Reply_Comment: this.state.Post_Reply_Comment,
            User_ID: this.state.User_ID,
            Replying_to: this.state.Replying_to

        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newReply)
        };
        if (this.props.postID) {
            fetch("http://localhost:5002/reply/update/" + this.props.postID, requestOptions)
            .then(async response => {
                const isJson = response.headers.get("content-type")?.includes("application/json");
                const data = isJson && await response.json();

                if (!response.ok) {
                    console.log(data);
                }
                this.props.replyChange();
            })
        } else {
            fetch("http://localhost:5002/reply/add", requestOptions)
            .then(async response => {
                const isJson = response.headers.get("content-type")?.includes("application/json");
                const data = isJson && await response.json();

                if (!response.ok) {
                    console.log(data);
                } else {
                    this.setState({
                        Post_Reply_Comment: ""
                    })
                }
                this.props.replyChange();
            })
            .catch(error => {
                console.error("Error ocurr when adding reply");
            })
        }
    }

    onClickCancel(e) {
        this.props.replyChange();
    }

    render (){
        return (
            <Container className="replyBox">
                <Form>
                    <Form.Control type="text" value={this.state.Post_Reply_Comment} onChange={this.onChangeReplyComment}/>
                    <Nav className="editBar">
                        <Nav.Link onClick={this.onSumbitReply}>Submit</Nav.Link>
                        {this.props.postID ? <Nav.Link onClick={this.onClickCancel}>Cancel</Nav.Link> : ""}
                    </Nav>
                </Form>
            </Container>
        )
    }
}

