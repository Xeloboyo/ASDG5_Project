import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

export default class UpdateMenu extends Component{
    // constructor
    constructor(props){
        super(props);
        
        this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);
        this.onChangeMenuProductName = this.onChangeMenuProductName.bind(this);
        this.onChangeMenuProductDescription = this.onChangeMenuProductDescription.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    // creating variables
        this.state = {
        Restaurant_Name: '',
        Menu_Product_Name: '',
        Menu_Product_Description: '',
        Menu_Product_Price: 0,
        Menu_Restaurant: []
        }
    }

    componentDidMount() {
        //console.log(this.props.math.params.id)
        //axios.get('http://localhost:5002/menu/'+this.props.match.params.id)
    }
    
    onChangeRestaurantName(e) {
        this.setState({
          // target is the textbox
          Restaurant_Name: e.target.value
        });
    }

    onChangeMenuProductName(e) {
        this.setState({
          // target is the textbox
          Menu_Product_Name: e.target.value
        });
    }

    onChangeMenuProductDescription(e) {
        this.setState({
          // target is the textbox
          Menu_Product_Description: e.target.value
        });
    }
    
    onChangeProductPrice(e) {
        this.setState({
          // target is the textbox
          Menu_Product_Price: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
        <Container>
            <table>
                <th>
                    <h1>Edit Menu Details</h1>
                </th>
                <th>
                    <LinkContainer to="/Menu">
                        <Nav.Link>Back</Nav.Link>
                    </LinkContainer>
                </th>
            </table>

            <Container>
                <Form>
                    <Form.Group className="">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="" placeholder="Enter Product Name"/>
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="" placeholder="Enter Product Price"/>
                        <button type="submit">Confirm Edit Product</button>
                    </Form.Group>
                </Form>
            </Container>
        </Container>
        )
    }
}