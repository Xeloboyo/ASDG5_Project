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
            User_Name: "",
            Post_Reply_Comment: "",
            Post_Edited: false,
            Replying_to: "",
            User_ID: "615c481a44106b1ed863d7c5"
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
                    User_ID: data.data.User_ID,
                })
            })
        } else {
            this.setState ({
                Replying_to: this.props.replyTo
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
            })
            .catch(error => {
                console.error("Error ocurr when adding reply");
            })
        }
        this.props.replyChange();
    }

    onClickCancel(e) {
        this.props.replyChange();
    }

    render (){
        return (
            <Container className="replyBox">
                <h5>name</h5>
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

