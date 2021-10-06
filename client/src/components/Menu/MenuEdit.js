import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { withRouter } from "react-router";

class UpdateMenu extends Component{
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
        restaurants: []
        }
    }

    componentDidMount() {
        //console.log(this.props.math.params.id)
        axios.get('http://localhost:5002/menu/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Restaurant_Name: response.data.Restaurant_Name,
                    Menu_Product_Name: response.data.Menu_Product_Name,
                    Menu_Product_Description: response.data.Menu_Product_Description,
                    Menu_Product_Price: response.data.Menu_Product_Price
                })
            })
            .catch(function(err){
                console.log(err);
            })

        // shows restaurants in drop down option
        axios.get('http://localhost:5002/restaurant/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        restaurants: response.data.map( restaurant => restaurant.Restaurant_Name ),
                        Restaurant_Name: response.data[0].Restaurant_Name
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
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

        const menu = {
            RestaurantID: this.props.match.params.id,
            Restaurant_Name: this.state.Restaurant_Name,
            Menu_Product_Name: this.state.Menu_Product_Name,
            Menu_Product_Description: this.state.Menu_Product_Description,
            Menu_Product_Price: this.state.Menu_Product_Price
        }

        console.log(menu);

        axios.post('http://localhost:5002/menu/update/'+this.props.match.params.id, menu)
            .then(response => console.log(response.data));

        window.location = '/menu';
    }

    render(){
        return(
        <div>
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

            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <div className="form-group">
              <label>Restaurant Name: </label>
              <select ref="userInput"
              required
              className="form-control"
              value={this.state.Restaurant_Name}
              onChange={this.onChangeRestaurantName}>
              {
                this.state.restaurants.map(function(restaurant) {
                  return <option 
                    key={restaurant}
                    value={restaurant}>{restaurant}
                    </option>;
                })
              }
          </select>
                </div>
            </div>
            <div className="form-group"> 
              <div className="form-group">
              <label>Product Name: </label>
              <input 
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
                  type="text" 
                  className="form-control"
                  value={this.state.Menu_Product_Price}
                  onChange={this.onChangeProductPrice}
                  />
                </div>
            </div>
            
            <div className="form-group">
              <input type="submit" value="Update Product" className="btn btn-primary" />
            </div>
          </form>
          </div>
        )
    }
}

export default withRouter(UpdateMenu);