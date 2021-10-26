import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Restaurant.css';
import Button from "react-bootstrap/Button";
import axios from 'axios';


const RestarurantList = props =>(
  <tr>
    <td>{props.restaurant.Restaurant_Name}</td>
    <td>{props.restaurant.Restaurant_Email}</td>
    <td>{props.restaurant.Restaurant_Address}</td>
    <td>{props.restaurant.Restaurant_Phone_Number}</td>
    <td>{props.restaurant.Restaurant_Rating}</td>
    <td>{props.restaurant.Restaurant_Capacity}</td>
    { (!localStorage.position === undefined) ? (
    (localStorage.position.slice(1, -1) == "admin" || localStorage.position.slice(1, -1) == "restaurant_owner") ? (
    <td> 
      <Link to={"/restaurantedit/"+props.restaurant._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRestaurant(props.restaurant._id) }}>delete</a>
    </td>
       ) : ( <p> hello?</p> )
    ) : (<p>o</p>)
       }
    <td>
      <th><Link to={{pathname:`/addReservation/0`, state: { name: props.restaurant.Restaurant_Name,  id: '0' } }}>Book Here</Link></th>
    </td>
  </tr>
)

export default class Restaurant extends Component {

  // constructor
  constructor(props){
    super(props);

    this.deleteRestaurant = this.deleteRestaurant.bind(this);

    this.state = {
      restaurants: []
      //Restaurant_Email: ''
    }

  }

  // get the list of restaurants
  componentDidMount(){
    // check if localstorage is undefined
    if (!localStorage.position === undefined) {
      const id = localStorage.id.slice(1, -1);
      console.log("user id: " + id);
    }
    

    //console.log("profile log: " + localStorage.profile);

    //localStorage.removeItem("profile");
    //localStorage.removeItem("position");
    axios.get('http://localhost:5002/restaurant/')
      .then(response => {
        this.setState({
          restaurants: response.data,
          //Restaurant_Email: response.data
        })
      })
    console.log("user role profile: " + localStorage.profile);
    console.log("position: " + localStorage.position);
  }

  // delete restuarant
  deleteRestaurant(id) {
    axios.delete('http://localhost:5002/restaurant/'+id)
      .then(res => console.log(res.data));
    this.setState({
      restaurants: this.state.restaurants.filter(el => el._id != id)
    })
  }

  // restaurantlist
  restarurantList() {
    return this.state.restaurants.map(currentRestaurant => {
      return <RestarurantList restaurant={currentRestaurant} deleteRestaurant={this.deleteRestaurant} key={currentRestaurant._id}/>;
    })
  }

  render() {
    // if user is not admin they cannot add, edit or delete a restaurant
    return (
      <Container>
        
        <table class="button">
          <tr>
            <th> { (!localStorage.position === undefined) ? (
              (localStorage.position.slice(1, -1) == "admin" || localStorage.position.slice(1, -1) == "restaurant_owner") ? (
              <LinkContainer to="/restaurantadd">
                <Button> Add Restaurant</Button>
              </LinkContainer> 
            ) : ( <p> heeor</p> )
            ) : ( <p> h </p>)
             }
            </th>
          </tr>
          <tr>
             <th><LinkContainer to="/menu">
              <Button>View all menus </Button>
            </LinkContainer></th>
          </tr>
        </table>
            
           
      <h1>Restaurant List</h1>
        <table className="table" id="restaurantlist">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Rating</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            { this.restarurantList() }
          </tbody>
        </table>
    
      </Container>
      
    )
  }
}