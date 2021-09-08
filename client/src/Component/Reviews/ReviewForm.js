import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ReviewPost.css";

function ReviewForm() {
    return (
        <Container className="review">
            <h4>Review:</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Subject Line</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Rate:</Form.Label>
                    <div>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                        <Button>5</Button>
                    </div>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <textarea className="form-control" rows="4"/>
                </Form.Group>
                <Form.Group>
                    <div>
                        <Button type="submit">Submit</Button>
                        <Button>Cancel</Button>
                    </div>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default ReviewForm;