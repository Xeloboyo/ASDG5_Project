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

    // const { foo } = this.props.location.state;

    console.log(this.props.match.params.id);

    //const { id } = props.match.params;

    //console.log(this.props.match && this.props.match.params.id); // "foo"

    // this.onChangeCategory_Downdrop = this.onChangeCategory_Downdrop.bind(this);
    // this.onChangeAll_post = this.onChangeAll_post.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Category_Downdrop: "",
      All_post: [{}],
      Works: this.props.location.state,
    };

    // console.log(this.props.location.state.pathname);
  }

  async componentWillMount() {
    //console.log(Works);
    console.log(this.props.match.params.id);
    try {
      const response = await fetch("http://localhost:5002/post/", {
        method: "GET",
        headers: {
          //jwtToken: localStorage.jwtToken,
        },
        // body: JSON.stringify(newTodo),
      });
      const jsonData = await response.json();

      this.setState({ All_post: jsonData });
    } catch (err) {
      console.error(err.message);
    }
    // const state = this.props.location.state;
    // console.log(state);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { foo } = this.props.location.state;
    // console.log(foo);
  }

  render() {
    //const { data } = this.props.location;
    //console.log(`${this.props.location.pathname}`);
    //const { state } = props.location.state;
    //console.log(state);

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
        <Container className="center">
          <Container className="mx-0 px-0" fluid>
            <Form>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Enter Title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Categories</Form.Label>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Choose Category"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default withRouter(CommunityPageEdits);
