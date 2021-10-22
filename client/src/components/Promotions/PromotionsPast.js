import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter, Redirect } from "react-router";

class PromotionsPast extends Component {
  constructor(props) {
    super(props);

    this.onChangeAll_promotions = this.onChangeAll_promotions.bind(this);
    this.onChangeSuccessCommunityPost =
      this.onChangeSuccessCommunityPost.bind(this);
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.onChangeEmptyInput = this.onChangeEmptyInput.bind(this);

    this.state = {
      All_promotions: [{}],
      SuccessCommunityPost: "",
      EmptyInput: false,
      SearchText: "",
      EmptySearch: false,
    };
  }

  onChangeEmptyInput(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  async handleSearchSubmit(e) {
    this.setState({ EmptyInput: false });
    this.setState({ EmptySearch: false });
    console.log(this.state.searchText);
    const category = { search: this.state.searchText };
    if (this.state.searchText) {
      try {
        const response = await fetch(
          "http://localhost:5002/promotions/getsearch",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(category),
          }
        );
        const jsonData = await response.json();
        console.log(`${jsonData.message}`);
        if (jsonData.message === "Empty") {
          this.setState({ EmptySearch: true });
        } else {
          this.setState({ All_promotions: jsonData.data });
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      this.setState({ EmptyInput: true });
    }
  }

  onChangeSearchText(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  // Change all promotions post
  onChangeAll_promotions(e) {
    this.setState({
      All_promotions: e.target.value,
    });
  }

  // Validatate if delete is successful
  onChangeSuccessCommunityPost(e) {
    this.setState({
      SuccessCommunityPost: e.target.value,
    });
  }

  // Delete promotions
  handleClick = async (e) => {
    console.log(e);

    const promotionsPost = {
      _id: e, // change to actual userID later
    };

    const response = await fetch(
      "http://localhost:5002/promotions/deletepost",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(promotionsPost),
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

  // Get all past promotions post before page loads
  async componentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:5002/promotions/promotionspast",
        {
          method: "GET",
          headers: {},
        }
      );
      const jsonData = await response.json();

      this.setState({ All_promotions: jsonData });
    } catch (err) {
      console.error(err.message);
    }
    console.log(this.state.All_promotions[0]);
  }
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    if (
      !localStorage.profile ||
      localStorage.position.slice(1, -1) !== "admin"
    ) {
      return <Redirect to={"/"} />;
    }
    const All_promotions = this.state.All_promotions;
    const SuccessCommunityPost = this.state.SuccessCommunityPost;
    const EmptyInput = this.state.EmptyInput;
    const EmptySearch = this.state.EmptySearch;
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
            <tr>
              <h1></h1>
              <th className="right">
                <Form fluid>
                  <FormControl
                    onChange={this.onChangeSearchText}
                    value={this.state.searchText}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button onClick={this.handleSearchSubmit} variant="primary">
                    Search
                  </Button>
                </Form>
                <div>
                  <Button onClick={this.refreshPage} variant="outline-primary">
                    All Promotions
                  </Button>
                </div>
              </th>
            </tr>
          </table>

          <div>{EmptyInput === true ? <p>Empty input!</p> : <p></p>}</div>
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
            {EmptySearch == true ? (
              <h3 className="center">No Promotions found!</h3>
            ) : (
              <Table id="tableCommunitypage">
                {Object.values(All_promotions).map((e) => {
                  return (
                    <tr>
                      <td>
                        <div className="post">
                          <div>
                            <h2>{e.Promotions_Title}</h2>
                            <p>
                              <small>User ID : {e.User_ID}</small>
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
                                <p>Empty</p>
                              )}
                            </ul>
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
            )}
          </div>
        </Container>
      </Container>
    );
  }
}

export default withRouter(PromotionsPast);
