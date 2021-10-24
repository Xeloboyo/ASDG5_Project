import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/CommunityPageForm.css";
import { Redirect } from "react-router";

export default class CommunityPageForm extends Component {
  constructor(props) {
    super(props);

    this.onChangePost_Community_Title =
      this.onChangePost_Community_Title.bind(this);
    this.onChangePost_Community_Category =
      this.onChangePost_Community_Category.bind(this);
    this.onChangePost_Paragraph = this.onChangePost_Paragraph.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeErrorCommunityPost =
      this.onChangeErrorCommunityPost.bind(this);
    this.onChangeSuccessCommunityPost =
      this.onChangeSuccessCommunityPost.bind(this);

    this.state = {
      Post_Community_Title: "",
      Post_Community_Category: "",
      Post_Paragraph: "",
      Post_Edited: false,
      ErrorCommunityPost: "",
      SuccessCommunityPost: "",
    };
  }

  // Set success for creating community post
  onChangeSuccessCommunityPost(e) {
    this.setState({
      SuccessCommunityPost: e.target.value,
    });
  }

  // Set serror for creating community post
  onChangeErrorCommunityPost(e) {
    this.setState({
      ErrorCommunityPost: e.target.value,
    });
  }

  // Set community post title
  onChangePost_Community_Title(e) {
    this.setState({
      Post_Community_Title: e.target.value,
    });
  }

  // Set community post category
  onChangePost_Community_Category(e) {
    this.setState({
      Post_Community_Category: e.target.value,
    });
  }

  // Set community post paragraph
  onChangePost_Paragraph(e) {
    this.setState({
      Post_Paragraph: e.target.value,
    });
  }

  // Submit a create post to the database
  onSubmit = async (e) => {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Description: ${this.state.Post_Community_Title}`);
    console.log(`Paragraph: ${this.state.Post_Paragraph}`);
    console.log(`Edited: ${this.state.Post_Edited}`);

    const newPost = {
      Post_Community_Title: this.state.Post_Community_Title,
      Post_Community_Category: this.state.Post_Community_Category,
      Post_Paragraph: this.state.Post_Paragraph,
      Post_Edited: this.state.Post_Edited,
      User_ID: localStorage.id.slice(1, -1), // replace with user name
    };

    const response = await fetch(
      "http://localhost:5002/post/communitypageform",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPost),
      }
    );
    const jsonData = await response.json();
    console.log(`${jsonData.message}`);

    // Message back from database to see it was successful
    if (jsonData.status == "FAILED") {
      this.setState({ ErrorCommunityPost: jsonData });
      console.log(`${jsonData.message}`);
      this.setState({
        SuccessCommunityPost: "",
      });
    } else if (jsonData.status == "SUCCESS") {
      this.setState({ SuccessCommunityPost: jsonData });
      this.setState({
        ErrorCommunityPost: "",
      });
    } else {
      this.setState({
        ErrorCommunityPost: "",
        SuccessCommunityPost: "",
      });
    }
    this.setState({
      Post_Community_Title: "",
      Post_Community_Category: "",
      Post_Paragraph: "",
      Post_Edited: false,
    });
  };

  render() {
    if (!localStorage.profile) {
      return <Redirect to={"/login"} />;
    }
    const ErrorCommunityPost = this.state.ErrorCommunityPost;
    const SuccessCommunityPost = this.state.SuccessCommunityPost;
    return (
      <Container>
        <table>
          <tr>
            <h1 className="title">Create Post On Community Page</h1>
            <th className="right">
              <LinkContainer to="/communitypage">
                <Nav.Link>Back</Nav.Link>
              </LinkContainer>
            </th>
          </tr>
        </table>
        <div name="messageDatabase">
          {ErrorCommunityPost.status === "FAILED" ? (
            ErrorCommunityPost.message
          ) : (
            <p></p>
          )}
          {SuccessCommunityPost.status === "SUCCESS" ? (
            SuccessCommunityPost.message
          ) : (
            <p></p>
          )}
        </div>
        <Container className="center">
          <Container className="mx-0 px-0" fluid>
            <form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label className="post_colour">Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={this.state.Post_Community_Title}
                  onChange={this.onChangePost_Community_Title}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="post_colour">Categories</Form.Label>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Choose Category"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    value={this.state.Post_Community_Category}
                    onChange={this.onChangePost_Community_Category}
                  >
                    <option value="">Please choose</option>
                    <option value="FOOD">Food</option>
                    <option value="RESTURANT">Resturant</option>
                    <option value="OTHER">Other</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="post_colour">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  type="text"
                  value={this.state.Post_Paragraph}
                  onChange={this.onChangePost_Paragraph}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </Container>
        </Container>
      </Container>
    );
  }
}
