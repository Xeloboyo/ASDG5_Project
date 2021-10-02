import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router";

class PromotionsPast extends Component {
  constructor(props) {
    super(props);

    this.onChangeAll_promotions = this.onChangeAll_promotions.bind(this);
    this.onChangeSuccessCommunityPost =
      this.onChangeSuccessCommunityPost.bind(this);

    this.state = {
      All_promotions: [{}],
      SuccessCommunityPost: "",
    };
  }

  onChangeAll_promotions(e) {
    this.setState({
      All_promotions: e.target.value,
    });
  }

  onChangeSuccessCommunityPost(e) {
    this.setState({
      SuccessCommunityPost: e.target.value,
    });
  }

  handleClick = async (e) => {
    console.log(e);

    const newTodo = {
      _id: e, // change to actual userID later
    };

    const response = await fetch(
      "http://localhost:5002/promotions/deletepost",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    );
    const jsonData = await response.json();
    console.log(`${jsonData.message}`);

    if (jsonData.status == "SUCCESS") {
      this.setState({ SuccessCommunityPost: jsonData });
      console.log(`${jsonData.message}`);
      console.log(this.state.All_promotions.data);
      const newList = this.state.All_promotions.filter((p) => p._id !== e);
      console.log(newList);
      this.setState({ All_promotions: newList });
      window.scrollTo(0, 0);
    } else {
      this.setState({
        SuccessCommunityPost: "",
      });
    }
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:5002/promotions/promotionspast",
        {
          method: "GET",
          headers: {
            //jwtToken: localStorage.jwtToken,
          },
        }
      );
      const jsonData = await response.json();

      this.setState({ All_promotions: jsonData });
    } catch (err) {
      console.error(err.message);
    }
    console.log(this.state.All_promotions[0]);
  }

  render() {
    const All_promotions = this.state.All_promotions;
    const SuccessCommunityPost = this.state.SuccessCommunityPost;
    return (
      <Container>
        <Container className="mx-0 px-0" fluid>
          <table>
            <tr>
              <h1 className="title">Past Promotions</h1>
              <th className="right">
                <LinkContainer to="/promotions">
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
            <Table id="tableCommunitypage">
              {Object.values(All_promotions).map((e) => {
                return (
                  <tr>
                    <td>
                      <div className="post">
                        <div>
                          <h2>{e.Promotions_Title}</h2>
                          <p>
                            <small>Username : {e.User_ID}</small>
                          </p>
                          <p>{e.Promotions_Description}</p>
                          <ul class="b">
                            {e.Promotions_Object ? (
                              Object.values(e.Promotions_Object).map(
                                (object) => {
                                  return <li>{object}</li>;
                                }
                              )
                            ) : (
                              <p>Emptyu</p>
                            )}
                          </ul>
                          {/* map in map */}
                        </div>
                        <table className="edit_table">
                          <tr>
                            <th>
                              <LinkContainer
                                to={`/promotionsedit/${e._id}`}
                                className="edit_button"
                              >
                                <Button variant="primary">Edit Post</Button>
                              </LinkContainer>
                            </th>
                            <Button
                              variant="outline-primary"
                              onClick={() => this.handleClick(e._id)}
                            >
                              Delete
                            </Button>{" "}
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </Table>
          </div>
        </Container>
      </Container>
    );
  }
}

export default withRouter(PromotionsPast);
