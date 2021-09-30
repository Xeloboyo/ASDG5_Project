import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import "./css/CommunityPage.css";

export default class CommunityPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategory_Downdrop = this.onChangeCategory_Downdrop.bind(this);
    this.onChangeAll_post = this.onChangeAll_post.bind(this);

    this.state = {
      Category_Downdrop: "",
      All_post: [{}],
    };
  }
  onChangeAll_post(e) {
    this.setState({
      All_post: e.target.value,
    });
  }

  onChangeCategory_Downdrop = async (e, eventKey) => {
    console.log(`l`);

    console.log(e);
    const select = { Category_Downdrop: e };

    console.log(select);
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5002/post/", {
        method: "GET",
        headers: {
          //jwtToken: localStorage.jwtToken,
        },
      });
      const jsonData = await response.json();

      this.setState({ All_post: jsonData });
    } catch (err) {
      console.error(err.message);
    }
    console.log(`${this.state.All_post[1].Post_Community_Title}`);
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
                    <Dropdown.Item eventKey="all" href="#/action-1">
                      All
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="resturant" href="#/action-1">
                      Resturant
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="food" href="#/action-2">
                      Food
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Other" href="#/action-3">
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
                            <small>Username</small>
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
                        {/* <Button variant="outline-success">Like</Button>{" "} */}
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

// export default CommunityPage;
// {/* {this.state.All_post.map((favourRequests) => (
//               <tr>
//                 <td>{favourRequests.favourrequest_date}</td>
//                 <td>{favourRequests.user_name}</td>
//                 <td>{favourRequests.title}</td>
//                 <td>{favourRequests.favour_description}</td>
//                 <td>{favourRequests.rewards}</td>
//               </tr>
//             ))} */}
//             {/* {this.renderItem()} */}
//             <div>
//               {/* {Object.keys(All_post).map((e, ee) => {
//                 //console.log(this.state.All_post[d]);
//                 return <p>Coffee type {e[ee]} in a size.</p>;
//                 // return All_post[0].Post_Community_Category;
//               })} */}
//               {/* {Object.keys(All_post[0]).map((e) => {
//                 //console.log(this.state.All_post[d]);
//                 return <p>Coffee type {e} in a size.</p>;
//                 // return All_post[0].Post_Community_Category;
//               })} */}
//               {/* {Object.entries(All_post).map(([key, val], i) => {
//                 return (
//                   <p key={i}>
//                     {key}: {val}
//                   </p>
//                 );
//               })} */}
//               {/* {Object.values(All_post).map((e) => {
//                 //console.log(this.state.All_post[d]);
//                 return (
//                   <p>
//                     Coffewwe type {e.Post_Community_Title}{" "}
//                     {e.Post_Community_Category}in a size.
//                   </p>
//                 );
//                 // return All_post[0].Post_Community_Category;
//               })} */}
//                <div>

// useEffect (() => {getFavourRequest();
// }, []);
// renderItem() {
//   const { All_post } = this.state.All_post;
//   console.log(`${this.state.All_post}`);
//   console.log(`lll`);
//   // const All_post = {
//   //   All_post: this.All_post,
//   // };
//   return (
//     <div>
//       {Object.entries(All_post).map(function (d, i) {
//         //return <li key={i}>{All_post[0]}</li>;
//         return <p key={i}>{d[0]}</p>;
//       })}
//     </div>
//   );
// }
