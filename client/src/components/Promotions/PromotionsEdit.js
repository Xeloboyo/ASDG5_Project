import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./css/Promotions.css";

function PromotionsEdit() {
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

export default PromotionsEdit;
