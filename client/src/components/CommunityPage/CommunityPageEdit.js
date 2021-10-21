import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/CommunityPageEdit.css";
import Table from "react-bootstrap/esm/Table";
import { Redirect } from "react-router";

export default class CommunityPageEdit extends Component {
  constructor(props) {
    super(props);

    this.onChangeDeleteCommunityPost =
      this.onChangeDeleteCommunityPost.bind(this);
    this.onEditCommunityPost = this.onEditCommunityPost.bind(this);
    this.onChangeAll_postEdit = this.onChangeAll_postEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onChangeSuccessCommunityPost =
      this.onChangeSuccessCommunityPost.bind(this);

    this.state = {
      Category_Downdrop: "",
      All_postEdit: [{}],
      SuccessCommunityPost: "",
    };
  }

  // Set all post
  onChangeAll_postEdit(e) {
    this.setState({
      All_postEdit: e.target.value,
    });
  }

  // Set post to delete
  onChangeDeleteCommunityPost(e) {
    e.preventDefault();
  }

  // Set post to edit
  onEditCommunityPost = async (e) => {
    e.preventDefault();
  };

  // Set success for deleting community post
  onChangeSuccessCommunityPost(e) {
    this.setState({
      SuccessCommunityPost: e.target.value,
    });
  }

  // Deleting post from database
  handleClick = async (e) => {
    console.log(e);

    const newTodo = {
      _id: e,
    };

    const response = await fetch("http://localhost:5002/post/deletepost/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const jsonData = await response.json();
    console.log(`${jsonData.message}`);

    // Message back from database to see it was successful
    if (jsonData.status == "SUCCESS") {
      this.setState({ SuccessCommunityPost: jsonData });
      console.log(`${jsonData.message}`);
      const newList = this.state.All_postEdit.data.filter((p) => p._id !== e);
      console.log(newList);
      this.setState({ All_postEdit: newList });
      window.scrollTo(0, 0);
    } else {
      this.setState({
        SuccessCommunityPost: "",
      });
    }
  };

  // Get the all post before page loads
  async componentDidMount() {
    // if (localStorage.profile){}
    const UserID = { UserID: "1234" };
    console.log("apple");
    console.log(this.state.SuccessCommunityPost);
    try {
      const response = await fetch("http://localhost:5002/post/getuserpost/", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UserID),
      });
      const jsonData = await response.json();
      console.log(`${jsonData.message}`);

      this.setState({ All_postEdit: jsonData });
    } catch (err) {
      console.error(err.message);
      console.log(err);
    }
  }

  render() {
    if (!localStorage.profile) {
      return <Redirect to={"/login"} />;
    }
    const All_postEdit = this.state.All_postEdit;
    const SuccessCommunityPost = this.state.SuccessCommunityPost;
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
          <div>
            {SuccessCommunityPost.status === "SUCCESS" ? (
              SuccessCommunityPost.message
            ) : (
              <p></p>
            )}
          </div>
        </Container>
        <Container className="containers">
          <div className="content">
            {this.state.All_postEdit.message !== "Empty" ? (
              this.state.All_postEdit.data ? (
                <Table id="tableCommunitypages">
                  {Object.values(All_postEdit.data).map((e) => {
                    return (
                      <tr>
                        <td>
                          <div className="post">
                            <div>
                              <h2>{e.Post_Community_Title}</h2>
                              <p>
                                <small>Username : {e.User_ID}</small>
                              </p>
                              <hr />
                              <p>
                                <small>{e.Post_Community_Category}</small>
                              </p>
                              <p>{e.Post_Paragraph}</p>
                              {e.Post_Edited ? (
                                <small className="EdittedCommunityPost">
                                  Edited
                                </small>
                              ) : (
                                <p></p>
                              )}
                            </div>
                            <table name="editbutton" className="edit_table">
                              <tr>
                                <td>
                                  <LinkContainer
                                    to={`/communitypageedits/${e._id}`}
                                    className="edit_button"
                                    name="buttonContainer"
                                  >
                                    <Button
                                      name="editbuttonLink"
                                      variant="primary"
                                    >
                                      Edit Post
                                    </Button>
                                  </LinkContainer>
                                </td>
                                <td>
                                  <Button
                                    variant="outline-primary"
                                    onClick={() => this.handleClick(e._id)}
                                  >
                                    Delete
                                  </Button>{" "}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              ) : (
                <Table id="tableCommunitypages">
                  {Object.values(All_postEdit).map((e) => {
                    return (
                      <tr>
                        <td>
                          <div className="post">
                            <div>
                              <h2>{e.Post_Community_Title}</h2>
                              <p>
                                <small>Username : {e.User_ID}</small>
                              </p>
                              <hr />
                              <p>
                                <small>{e.Post_Community_Category}</small>
                              </p>
                              <p>{e.Post_Paragraph}</p>
                              {e.Post_Edited ? (
                                <small className="EdittedCommunityPost">
                                  Edited
                                </small>
                              ) : (
                                <p></p>
                              )}
                            </div>
                            <table className="edit_table">
                              <tr>
                                <td>
                                  <LinkContainer
                                    to={`/communitypageedits/${e._id}`}
                                    className="edit_button"
                                  >
                                    <Button variant="primary">Edit Post</Button>
                                  </LinkContainer>
                                </td>
                                <td>
                                  <Button
                                    variant="outline-primary"
                                    onClick={() => this.handleClick(e._id)}
                                  >
                                    Delete
                                  </Button>{" "}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              )
            ) : (
              <h3 className="emptyPost">No Post Made Yet</h3>
            )}
          </div>
        </Container>
      </Container>
    );
  }
}
