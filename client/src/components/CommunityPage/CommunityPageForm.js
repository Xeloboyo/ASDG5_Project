import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/CommunityPageForm.css";

export default class CommunityPageForm extends Component {
  constructor(props) {
    super(props);

    this.onChangePost_Community_Title =
      this.onChangePost_Community_Title.bind(this);
    this.onChangePost_Community_Category =
      this.onChangePost_Community_Category.bind(this);
    this.onChangeCommunityPage_Description =
      this.onChangeCommunityPage_Description.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Post_Community_Title: "",
      Post_Community_Category: "",
      CommunityPage_Description: "",
      CommunityPage_Edited: false,
    };
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

  onChangeCommunityPage_Description(e) {
    this.setState({
      CommunityPage_Description: e.target.value,
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.Post_Community_Title}`);
    console.log(`Todo Priority: ${this.state.CommunityPage_Description}`);
    console.log(`Todo Completed: ${this.state.CommunityPage_Edited}`);

    const newTodo = {
      Post_Community_Title: this.state.Post_Community_Title,
      Post_Community_Category: this.state.Post_Community_Category,
      Post_ID: "33",
      //CommunityPage_Description: this.state.CommunityPage_Description,
      //CommunityPage_Edited: this.state.CommunityPage_Edited,
    };
    // const config = {
    //   method: "post",
    //   url: "http://localhost:5002/post/communitypageform",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   data: JSON.stringify(newTodo),
    // };

    // console.log(config.data);
    // axios
    //   .post(config)
    //   .then((res) => console.log(res.data))
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   });
    const response = await fetch(
      "http://localhost:5002/post/communitypageform",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    );

    this.setState({
      Post_Community_Title: "",
      Post_Community_Category: "",
      CommunityPage_Description: "",
      CommunityPage_Edited: false,
    });
  };

  render() {
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
        <Container className="center">
          <Container className="mx-0 px-0" fluid>
            <form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={this.state.Post_Community_Title}
                  onChange={this.onChangePost_Community_Title}
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
                    value={this.state.Post_Community_Category}
                    onChange={this.onChangePost_Community_Category}
                  >
                    <option value="food">Food</option>
                    <option value="resturant">Resturant</option>
                    <option value="other">Other</option>
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
                  value={this.state.CommunityPage_Description}
                  onChange={this.onChangeCommunityPage_Description}
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

//export default CommunityPageForm;
