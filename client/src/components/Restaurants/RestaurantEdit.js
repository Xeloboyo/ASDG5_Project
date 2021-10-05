import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import { Link } from 'react-router-dom';


export default class UpdateRestaurant extends Component {
    constructor(props){
        super(props);

        this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);
        this.onChangeRestaurantEmail = this.onChangeRestaurantEmail.bind(this);
        this.onChangeRestaurantAddress = this.onChangeRestaurantAddress.bind(this);
        this.onChangeRestaurantPhoneNumber = this.onChangeRestaurantPhoneNumber.bind(this);
        this.onChangeRestaurantRating = this.onChangeRestaurantRating.bind(this);
        this.onChangeRestaurantCapacity = this.onChangeRestaurantCapacity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // creating variables
        this.state = {
        Restaurant_Name: '',
        Restaurant_Email: '',
        Restaurant_Address: '',
        Restaurant_Phone_Number: 0,
        Restaurant_Rating: 0,
        Restaurant_Capacity: 0,
        restaurants: [],
        }
    }

    componentDidMount() {
           // const { idparam } = this.props.match.params.id;
           //console.log(this.props.match.params.id);
           if (this.props.match && this.props.match.params.id) {
            console.log("??? update");
            axios.get('http://localhost:5002/restaurant/'+this.props.match.params.id)
            
            .then(response => {
                this.setState({
                    Restaurant_Name: response.data.Restaurant_Name,
                    Restaurant_Email: response.data.Restaurant_Email,
                    Restaurant_Address: response.data.Restaurant_Address,
                    Restaurant_Phone_Number: response.data.Restaurant_Phone_Number,
                    Restaurant_Rating: response.data.Restaurant_Rating,
                    Restaurant_Capacity: response.data.Restaurant_Capacity
                    
                })
            })
            .catch(function(err) {
                console.log(err);
            })
            
           }
            

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
    
      onChangeRestaurantEmail(e) {
        this.setState({
          // target is the textbox
          Restaurant_Email: e.target.value
        });
      }
    
      onChangeRestaurantAddress(e) {
        this.setState({
          // target is the textbox
          Restaurant_Address: e.target.value
        });
      }
    
      onChangeRestaurantPhoneNumber(e) {
        this.setState({
          // target is the textbox
          Restaurant_Phone_Number: e.target.value
        });
      }
    
      onChangeRestaurantRating(e) {
        this.setState({
          // target is the textbox
          Restaurant_Rating: e.target.value
        });
      }
    
      onChangeRestaurantCapacity(e) {
        this.setState({
          // target is the textbox
          Restaurant_Capacity: e.target.value
        });
      }

      // on click of submit button
      onSubmit(e) {
        e.preventDefault();
    
        const restaurant = {
          Restaurant_Name: this.state.Restaurant_Name,
          Restaurant_Email: this.state.Restaurant_Email,
          Restaurant_Address: this.state.Restaurant_Address,
          Restaurant_Phone_Number: this.state.Restaurant_Phone_Number,
          Restaurant_Rating: this.state.Restaurant_Rating,
          Restaurant_Capacity: this.state.Restaurant_Capacity
        }
    
        console.log(restaurant);
    
        // send input data to backend
        if (this.props.match && this.props.match.params.id) {
            axios.post('http://localhost:5002/restaurant/update'+this.props.match.params.id)
            .then(res => console.log(res.data)); 
        }
    
        window.location = '/restaurant';
      }

      render() {
        return (
          <div>
            <LinkContainer to="/restaurant">
              <Nav.Link>Back</Nav.Link>
            </LinkContainer>   
          <h3>Update Restaurant Details</h3>
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
              <label>Restaurant Email: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.Restaurant_Email}
                  onChange={this.onChangeRestaurantEmail}
                  />
                </div>
            </div>
            <div className="form-group"> 
              <div className="form-group">
              <label>Restaurant Address: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.Restaurant_Address}
                  onChange={this.onChangeRestaurantAddress}
                  />
                </div>
            </div>
            <div className="form-group"> 
              <div className="form-group">
              <label>Restaurant Phone Number: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.Restaurant_Phone_Number}
                  onChange={this.onChangeRestaurantPhoneNumber}
                  />
                </div>
            </div>
            <div className="form-group"> 
              <div className="form-group">
              <label>Restaurant Rating: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.Restaurant_Rating}
                  onChange={this.onChangeRestaurantRating}
                  />
                </div>
            </div>
            <div className="form-group"> 
              <div className="form-group">
              <label>Restaurant Capacity: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.Restaurant_Capacity}
                  onChange={this.onChangeRestaurantCapacity}
                  />
                </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Update Restaurant" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
}