import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from 'axios';
//import { response } from "express";

export default class CreateMenu extends Component {
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

  // shows all the restaurants's in the database
  componentDidMount(){
    axios.get('http://localhost:5002/restaurant/')
      .then(response => {
        // check if menu is not empty
        if(response.data.length > 0) {
          this.setState({
            Menu_Restaurant: response.data.map(restaurant => restaurant.Restaurant_Name),
            Restaurant_Name: response.data[0].Restaurant_Name
          })
        }
      })
      .catch ((err) => {
        console.log(err);
      })
      
  }

  onChangeRestaurantName(e) {
    this.setState({
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
      Menu_Product_Description: e.target.value
    });
  }

  onChangeProductPrice(e) {
    this.setState({
      Menu_Product_Price: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const menu = {
      Restaurant_Name: this.state.Restaurant_Name,
      Menu_Product_Name: this.state.Menu_Product_Name,
      Menu_Product_Description: this.state.Menu_Product_Description,
      Menu_Product_Price: this.state.Menu_Product_Price
    }

    console.log(menu);

    // send input data to backend
    axios.post('http://localhost:5002/menu/createmenu', menu)
        .then(res => console.log(res.data));

    this.setState = ({
        Menu_Product_Name: ''
    })

    window.location = "./menu";
  }

  render() {
      return(
        <div>
        <LinkContainer to="/menu">
          <Nav.Link>Back</Nav.Link>
        </LinkContainer>   
      <h3>Menu</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <div className="form-group">
          <label>Restaurant: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.Restaurant_Name}
              onChange={this.onChangeRestaurantName}>
              {
                this.state.Menu_Restaurant.map(function(restaurant) {
                  return <option 
                    key={restaurant}
                    value={restaurant}>{restaurant}
                    </option>;
                })
              }
          </select>
          <label>Product Name: </label>
          <input 
              name="productname"
              type="text" 
              className="form-control"
              value={this.state.Menu_Product_Name}
              onChange={this.onChangeMenuProductName}
              />
            </div>
        </div>
        <div className="form-group"> 
          <div className="form-group">
          <label>Product Description: </label>
          <input
              name="productdescription"
              type="text" 
              className="form-control"
              value={this.state.Menu_Product_Description}
              onChange={this.onChangeMenuProductDescription}
              />
            </div>
        </div>
        <div className="form-group"> 
          <div className="form-group">
          <label>Product Price: </label>
          <input 
              name="productprice"
              type="text" 
              className="form-control"
              value={this.state.Menu_Product_Price}
              onChange={this.onChangeProductPrice}
              />
            </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Add Menu" className="btn btn-primary" />
        </div>
      </form>
    </div>
      )
  }
}