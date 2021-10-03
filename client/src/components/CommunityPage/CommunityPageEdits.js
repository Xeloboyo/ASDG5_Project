import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/CommunityPageEdits.css";
import { withRouter } from "react-router";

class CommunityPageEdits extends Component {
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
    this.onChangeAll_post = this.onChangeAll_post.bind(this);

    console.log(this.props.match.params.id);
    this.state = {
      Post_Community_Title: "",
      Post_Community_Category: "",
      Post_Paragraph: "",
      Post_Edited: true,
      ErrorCommunityPost: "",
      SuccessCommunityPost: "",
      Category_Downdrop: "",
      All_post: [{}],
    };
  }
  onChangeAll_post(e) {
    this.setState({
      All_post: e.target.value,
    });
  }

  onChangeSuccessCommunityPost(e) {
    this.setState({
      SuccessCommunityPost: e.target.value,
    });
  }

  onChangeErrorCommunityPost(e) {
    this.setState({
      ErrorCommunityPost: e.target.value,
    });
  }

  onChangePost_Community_Title(e) {
    this.setState({
      Post_Community_Title: e.target.value,
    });
  }

  onChangePost_Community_Category(e) {
    this.setState({
      Post_Community_Category: e.target.value,
    });
  }

  onChangePost_Paragraph(e) {
    this.setState({
      Post_Paragraph: e.target.value,
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.Post_Community_Title}`);
    console.log(`Todo Priority: ${this.state.Post_Paragraph}`);
    console.log(`Todo Completed: ${this.state.Post_Edited}`);

    // const postId = { PostID: this.props.match.params.id };
    const newTodo = {
      PostID: this.props.match.params.id,
      Post_Community_Title: this.state.Post_Community_Title,
      Post_Community_Category: this.state.Post_Community_Category,
      Post_Paragraph: this.state.Post_Paragraph,
      Post_Edited: this.state.Post_Edited,
      User_ID: "1234", // change to actual userID later
    };

    const response = await fetch(
      "http://localhost:5002/post/communitypageedits",
      {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    );
    const jsonData = await response.json();
    console.log(`${jsonData.message}`);

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
  };

  async componentWillMount() {
    const postId = { PostID: this.props.match.params.id }; // get post not id
    console.log(this.props.match.params.id);

    try {
      const response = await fetch("http://localhost:5002/post/getone/", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(postId),
      });
      const jsonData = await response.json();

      this.setState({ All_post: jsonData });
      this.setState({
        Post_Community_Title: this.state.All_post.data.Post_Community_Title,
        Post_Community_Category:
          this.state.All_post.data.Post_Community_Category,
        Post_Paragraph: this.state.All_post.data.Post_Paragraph,
      });

      // console.log(`${jsonData.data.Post_Community_Title}`);
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    if (this.state.All_post.data) {
      console.log(this.state.All_post.data.Post_Community_Title);
    }
    const ErrorCommunityPost = this.state.ErrorCommunityPost;
    const SuccessCommunityPost = this.state.SuccessCommunityPost;
    return (
      <Container>
        <table>
          <tr>
            <h1 className="title">Edit Post</h1>
            <th className="right">
              <LinkContainer to="/communitypageedit">
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
            {this.state.All_post.data ? (
              <form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    // defaultValue={All_post.data.Post_Community_Title || ""}
                    value={this.state.Post_Community_Title}
                    onChange={this.onChangePost_Community_Title}
                    // value={}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Categories</Form.Label>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Choose Category"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={this.onChangePost_Community_Category}
                      value={this.state.Post_Community_Category}
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
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    type="text"
                    onChange={this.onChangePost_Paragraph}
                    value={this.state.Post_Paragraph}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </form>
            ) : (
              <p>Emptyu</p>
            )}
          </Container>
        </Container>
      </Container>
    );
  }
}

export default withRouter(CommunityPageEdits);
