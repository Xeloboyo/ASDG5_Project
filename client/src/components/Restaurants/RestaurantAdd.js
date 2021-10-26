import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Restaurant.css';
import axios from 'axios';

export default class CreateRestaurant extends Component {

  // constructor
  constructor(props){
    super(props);

    this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);
    this.onChangeRestaurantEmail = this.onChangeRestaurantEmail.bind(this);
    this.onChangeRestaurantAddress = this.onChangeRestaurantAddress.bind(this);
    this.onChangeRestaurantPhoneNumber = this.onChangeRestaurantPhoneNumber.bind(this);
    this.onChangeRestaurantRating = this.onChangeRestaurantRating.bind(this);
    this.onChangeRestaurantCapacity = this.onChangeRestaurantCapacity.bind(this);
    //this.onChangeRestaurantImage = this.onChangeRestaurantImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // creating variables
    this.state = {
      Restaurant_Name: '',
      Restaurant_Email: '',
      Restaurant_Address: '',
      Restaurant_Phone_Number: 0,
      Restaurant_Rating: 0,
      Restaurant_Capacity: 0,
      //Restaurant_Image: '',
      //Restaurant: []
    }    
    //const [Restaurant_Name, setRestaurant_Name] = useState("");
  }
  /*
  onChangeRestaurantImage(e) {
    this.setState({
      Restaurant_Image: e.target.file[0]
    });
  }*/

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

  onSubmit(e) {
    e.preventDefault();

    

    /*const formData = new FormData();

    formData.append("Restaurant_Name", Restaurant_Name);
    formData.append("Restaurant_Email", Restaurant_Email);
    formData.append("Restaurant_Address", Restaurant_Address);
    formData.append("Restaurant_Phone_Number", Restaurant_Phone_Number);
    formData.append("Restaurant_Rating", Restaurant_Rating);
    formData.append("Restaurant_Capacity", Restaurant_Capacity);
    formData.append("Restaurant_Image", Restaurant_Image);
    */
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
    axios.post('http://localhost:5002/restaurant/createrestaurant', restaurant)
        .then(res => console.log(res.data));

    window.location = './restaurant';
  }

  render() {
    return (
      <div>
        <LinkContainer to="/restaurant">
          <Nav.Link>Back</Nav.Link>
        </LinkContainer>   
      <h3>Restaurants</h3>
      <form onSubmit={this.onSubmit} /*encType="multipart/form-data"*/>
        <div className="form-group"> 
          <div className="form-group">
          <label>Restaurant Name: </label>
          <input 
              name="restaurantname"
              type="text" 
              className="form-control"
              value={this.state.Restaurant_Name}
              onChange={this.onChangeRestaurantName}
              />
          </div>
        </div>
        <div className="form-group"> 
          <div className="form-group">
          <label>Restaurant Email: </label>
          <input 
              name="restaurantemail"
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
              name="restaurantaddress"
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
              name="restaurantnumber"
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
              name="restaurantrating"
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
              name="restaurantcapacity"
              type="text" 
              className="form-control"
              value={this.state.Restaurant_Capacity}
              onChange={this.onChangeRestaurantCapacity}
              />
            </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Add Restaurant" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}