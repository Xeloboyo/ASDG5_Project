import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/CommunityPageEdit.css";
import { Link } from "react-router-dom";

export default class CommunityPageEdit extends Component {
  constructor(props) {
    super(props);

    // this.onChangeCategory_Downdrop = this.onChangeCategory_Downdrop.bind(this);
    this.onChangeDeleteCommunityPost =
      this.onChangeDeleteCommunityPost.bind(this);
    this.onEditCommunityPost = this.onEditCommunityPost.bind(this);

    this.state = {
      Category_Downdrop: "",
      All_post: [{}],
    };
  }
  onChangeDeleteCommunityPost(e) {
    e.preventDefault();
  }

  onEditCommunityPost = async (e) => {
    e.preventDefault();
  };

  render() {
    const EditTo = {
      state: "/communitypageedits",
    };
    return (
      <Container>
        <Container className="mx-0 px-0" fluid>
          <table>
            <tr>
              <h1 className="title">Edit Posts</h1>
              <th className="right">
                <LinkContainer to="/communitypage">
                  <Nav.Link>Back</Nav.Link>
                </LinkContainer>
              </th>
            </tr>
          </table>
        </Container>
        <Container className="containers">
          <div className="content">
            <div className="post">
              <div>
                <h2>Title</h2>
                <p>
                  <small>Username</small>
                </p>
                <p>Post</p>
              </div>
              <table className="edit_table">
                <tr>
                  <th>
                    <Link
                      to={`/communitypageedits/tree`}
                      // add a + "_id" to the end of this
                      className="edit_button"
                    >
                      <Button variant="primary">Edit Post</Button>
                    </Link>
                  </th>
                  <Button variant="outline-primary">Delete</Button>{" "}
                </tr>
              </table>
            </div>
          </div>
        </Container>
      </Container>
    );
  }
}

//export default CommunityPageEdit;
