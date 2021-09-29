import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/Promotions.css";

export default class Promotions extends Component {
  constructor(props) {
    super(props);

    this.onChangePromotions_Title = this.onChangePromotions_Title.bind(this);
    this.onChangePromotions_Categories =
      this.onChangePromotions_Categories.bind(this);
    this.onChangePromotions_Description =
      this.onChangePromotions_Description.bind(this);
    this.onChangePromotions_Object = this.onChangePromotions_Object.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Promotions_Title: "",
      Promotions_Categories: "",
      Promotions_Description: "",
      Promotions_Object: "",
      checkboxes: [],
    };
  }
  onChangePromotions_Title(e) {
    this.setState({
      Promotions_Title: e.target.value,
    });
  }

  onChangePromotions_Categories(e) {
    this.setState({
      Promotions_Categories: e.target.value,
    });
  }

  onChangePromotions_Description(e) {
    this.setState({
      Promotions_Description: e.target.value,
    });
  }

  onChangePromotions_Object(e) {
    this.setState({
      Promotions_Object: e.target.value,
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.Promotions_Title}`);
    console.log(`Todo Priority: ${this.state.Promotions_Description}`);
    console.log(`Todo Completed: ${this.state.CommunityPage_Edited}`);

    const newPromotions = {
      Promotions_Title: this.state.Promotions_Title,
      Promotions_Categories: this.state.Promotions_Categories,
      Promotions_Description: this.state.Promotions_Description,
      Promotions_Object: this.state.Promotions_Object,
      User_ID: "3222",
    };

    const response = await fetch(
      "http://localhost:5002/promotions/promotionsform",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPromotions),
      }
    );

    this.setState({
      Promotions_Title: "",
      Promotions_Categories: "",
      Promotions_Description: "",
      Promotions_Object: "",
    });
  };
  render() {
    return (
      <Container>
        <table>
          <tr>
            <h1 className="title">Promotions</h1>
            <th className="right">
              <LinkContainer to="/promotionspast">
                <Nav.Link>Past Post</Nav.Link>
              </LinkContainer>
            </th>
          </tr>
        </table>
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
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
              <table className="promotions_table">
                <tr>
                  <th>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </th>
                  <Button variant="outline-primary">Delete</Button>{" "}
                </tr>
              </table>

              <div className="promotions_cancel">
                <LinkContainer to="/" className="edit_buttons">
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

//export default Promotions;
