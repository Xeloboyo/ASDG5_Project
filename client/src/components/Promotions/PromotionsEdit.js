import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/Promotions.css";
import { withRouter } from "react-router";

class PromotionsEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangePromotions_Title = this.onChangePromotions_Title.bind(this);
    this.onChangePromotions_Categories =
      this.onChangePromotions_Categories.bind(this);
    this.onChangePromotions_Description =
      this.onChangePromotions_Description.bind(this);
    this.onChangePromotions_Object_List =
      this.onChangePromotions_Object_List.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeErrorCommunityPost =
      this.onChangeErrorCommunityPost.bind(this);
    this.onChangeSuccessCommunityPost =
      this.onChangeSuccessCommunityPost.bind(this);
    this.onChangeAll_post = this.onChangeAll_post.bind(this);

    this.state = {
      Promotions_Title: "",
      Promotions_Categories: "",
      Promotions_Description: "",
      Promotions_Object_List: ["Harrys Cafe", "KFC", "La Piazza", "Holy basil"], // replcae with real list
      Promotions_Object: [],
      Temp_Promotions_Object: [],
      ErrorCommunityPost: "",
      SuccessCommunityPost: "",
      All_post: [{}],
    };
  }

  // Set promotions post
  onChangeAll_post(e) {
    this.setState({
      All_post: e.target.value,
    });
  }

  // Set success for updating promotions post
  onChangeSuccessCommunityPost(e) {
    this.setState({
      SuccessCommunityPost: e.target.value,
    });
  }

  // Set error for updating promtoions post
  onChangeErrorCommunityPost(e) {
    this.setState({
      ErrorCommunityPost: e.target.value,
    });
  }

  // Set promotions title
  onChangePromotions_Title(e) {
    this.setState({
      Promotions_Title: e.target.value,
    });
  }

  // Set promotions categories
  onChangePromotions_Categories(e) {
    this.setState({
      Promotions_Categories: e.target.value,
    });
  }

  // Set promotions description
  onChangePromotions_Description(e) {
    this.setState({
      Promotions_Description: e.target.value,
    });
  }

  // Set checkbox to be removed into new array
  onChangePromotions_Object_List(event) {
    console.log(event.target.value);
    if (event.target.checked) {
      this.setState({
        Promotions_Object: this.state.Promotions_Object.concat(
          event.target.value
        ),
      });
    } else {
      const newList = this.state.Promotions_Object.filter(
        (p) => p !== event.target.defaultValue
      );
      console.log(event);
      this.setState({ Promotions_Object: newList });
      console.log("apple");
    }
  }

  // Submit an update to the database
  onSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.Promotions_Object);
    console.log(`Form submitted:`);
    console.log(`Title: ${this.state.Promotions_Title}`);
    console.log(`Description: ${this.state.Promotions_Description}`);
    console.log(`Category: ${this.state.Promotions_Categories}`);
    console.log(`Object: ${this.state.Promotions_Object}`);

    const newPromotions = {
      PostID: this.props.match.params.id,
      Promotions_Title: this.state.Promotions_Title,
      Promotions_Categories: this.state.Promotions_Categories,
      Promotions_Description: this.state.Promotions_Description,
      Promotions_Object: this.state.Promotions_Object,
      User_ID: "6158811e44c3c679ec5c295f", // replace with admin userID
    };

    const response = await fetch(
      "http://localhost:5002/promotions/promotionsupdate",
      {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPromotions),
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

  // Get promotions post before page loads
  async componentWillMount() {
    const postId = { PostID: this.props.match.params.id };
    console.log(this.props.match.params.id);

    try {
      const response = await fetch("http://localhost:5002/promotions/getones", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(postId),
      });
      const jsonData = await response.json();

      this.setState({ All_post: jsonData });
      this.setState({
        Promotions_Title: this.state.All_post.data.Promotions_Title,
        Promotions_Categories: this.state.All_post.data.Promotions_Categories,
        Promotions_Description: this.state.All_post.data.Promotions_Description,
        Promotions_Object: this.state.All_post.data.Promotions_Object,
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    const ErrorCommunityPost = this.state.ErrorCommunityPost;
    const SuccessCommunityPost = this.state.SuccessCommunityPost;
    const Promotions_Object = this.state.Promotions_Object;
    return (
      <Container>
        <table>
          <tr>
            <h1 className="title">Past Promotions Edit</h1>
            <th className="right">
              <LinkContainer to="/promotionspast">
                <Nav.Link>Back</Nav.Link>
              </LinkContainer>
            </th>
          </tr>
        </table>
        <div>
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
            <Form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={this.state.Promotions_Title}
                  onChange={this.onChangePromotions_Title}
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
                    value={this.state.Promotions_Categories}
                    onChange={this.onChangePromotions_Categories}
                  >
                    <option value="">Please choose</option>
                    <option value="Resturant">Resturant</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
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
                  value={this.state.Promotions_Description}
                  onChange={this.onChangePromotions_Description}
                />
              </Form.Group>
              <Form.Label>Resturants</Form.Label>
              {this.state.Promotions_Object_List.map((e, index) => {
                return ["checkbox"].map((type) => (
                  <div key={index} className="mb-3">
                    {console.log(Promotions_Object)}
                    {Promotions_Object.includes(e) ? (
                      <Form.Check
                        inline
                        label={e}
                        name="group1"
                        type={type}
                        value={e}
                        onChange={this.onChangePromotions_Object_List}
                        defaultChecked="true"
                      />
                    ) : (
                      <p>
                        <Form.Check
                          inline
                          label={e}
                          name="group1"
                          type={type}
                          value={e}
                          onChange={this.onChangePromotions_Object_List}
                          // defaultChecked="false"
                        />{" "}
                      </p>
                    )}
                  </div>
                ));
              })}
              <table className="promotions_table">
                <tr>
                  <th>
                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  </th>
                </tr>
              </table>

              <div className="promotions_cancel">
                <LinkContainer to="/promotionspast" className="edit_buttons">
                  <Button variant="primary"> Cancel</Button>
                </LinkContainer>
              </div>
            </Form>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default withRouter(PromotionsEdit);
