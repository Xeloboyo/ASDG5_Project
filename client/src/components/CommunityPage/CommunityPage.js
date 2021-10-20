import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import "./css/CommunityPage.css";
import { withRouter } from "react-router";

class CommunityPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategory_Downdrop = this.onChangeCategory_Downdrop.bind(this);
    this.onChangeAll_post = this.onChangeAll_post.bind(this);

    this.state = {
      Category_Downdrop: "",
      All_post: [{}],
      search: "",
    };
  }

  // Set all post
  onChangeAll_post(e) {
    this.setState({
      All_post: e.target.value,
    });
  }

  // set search category
  onChangeCategory_Downdrop = async (e, eventKey) => {
    console.log(`l`);

    console.log(e);
    const select = { Category_Downdrop: e };

    console.log(select);
  };

  myFunction = async (searchs) => {
    const category = { search: searchs };
    console.log(searchs);

    try {
      const response = await fetch("http://localhost:5002/post/getcategory", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(category),
      });
      const jsonData = await response.json();
      console.log(`${jsonData.message}`);
      this.setState({ All_post: jsonData.data });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get the all post before page loads
  async componentDidMount() {
    if (window.location.pathname == "/communitypage") {
      try {
        const response = await fetch("http://localhost:5002/post/", {
          method: "GET",
          headers: {},
        });
        const jsonData = await response.json();

        this.setState({ All_post: jsonData });
      } catch (err) {
        console.error(err.message);
        // console.log(`${this.state.All_post[1].Post_Community_Title}`);}
      }
    } else {
      console.log(window.location.pathname);
      if (window.location.pathname === "/communitypage/resturant") {
        this.setState({ search: "RESTURANT" }, function () {
          console.log(this.state.search);
          this.myFunction(this.state.search);
        });
      } else if (window.location.pathname === "/communitypage/food") {
        this.setState({ search: "FOOD" }, function () {
          console.log(this.state.search);
          this.myFunction(this.state.search);
        });

        console.log(this.state.search);
      } else {
        this.setState({ search: "OTHER" }, function () {
          console.log(this.state.search);
          this.myFunction(this.state.search);
        });
      }
    }
  }

  render() {
    const All_post = this.state.All_post;
    return (
      <Container>
        <Container className="mx-0 px-0" fluid>
          <table className="tables">
            <tr>
              <h1 className="title">Community Page</h1>
              <th className="right">
                <LinkContainer to="/communitypageform">
                  <Nav.Link>Create Post</Nav.Link>
                </LinkContainer>
              </th>
            </tr>
            <tr>
              <th>
                <Dropdown
                  className="dropdown"
                  onSelect={this.onChangeCategory_Downdrop}
                >
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="all" href="/communitypage">
                      All
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="resturant"
                      href="/communitypage/resturant"
                    >
                      Resturant
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="food" href="/communitypage/food">
                      Food
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Other" href="/communitypage/other">
                      Other
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th className="right">
                <LinkContainer to="/communitypageedit">
                  <Nav.Link>Edit Post</Nav.Link>
                </LinkContainer>
              </th>
            </tr>
          </table>
        </Container>
        <Container className="containers">
          <div className="content">
            <Table id="tableCommunitypage">
              {Object.values(All_post).map((e) => {
                return (
                  <tr>
                    <td>
                      <div className="postCommunityPage">
                        <div>
                          <h2>{e.Post_Community_Title}</h2>
                          <p>
                            <small>Username: {e.User_ID}</small>
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

export default withRouter(CommunityPage);
