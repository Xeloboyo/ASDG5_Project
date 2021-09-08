import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Reply from "./Reply";

function ReplyForm() {
    return (
        <Container className="replyBox">
            <h5>name</h5>
            <Form>
                <Form.Control type="text" />
                <Button type="submit">Submit</Button>
                <Button>Cancel</Button>
            </Form>
        </Container>
    )
}

export default ReplyForm;