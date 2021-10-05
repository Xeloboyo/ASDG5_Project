import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import axios from 'axios'; 

const RestaurantAdd = () => {
    const [newRestaurant, setNewRestaurant] = useState(
        {
            Restaurant_ID: '',
            Restaurant_Name: '',
            Restaurant_Email: '',
            Restaurant_Address: '',
            Restaurant_Phone_Number: '',
            Restaurant_Rating: '',
            Restaurant_Capacity: ''
            //, Restaurant_Image: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Restaurant_ID', newRestaurant.Restaurant_ID);
        formData.append('Restaurant_Name', newRestaurant.Restaurant_Name);
        formData.append('Restaurant_Email', newRestaurant.Restaurant_Email);
        formData.append('Restaurant_Address', newRestaurant.Restaurant_Address);
        formData.append('Restaurant_Phone_Number', newRestaurant.Restaurant_Phone_Number);
        formData.append('Restaurant_Rating', newRestaurant.Restaurant_Rating);
        formData.append('Restaurant_Capacity', newRestaurant.Restaurant_Capacity);
        //formData.append('Restaurant_Image', newRestaurant.Restaurant_Image);

        axios.post('http://localhost:3000/restaurants/restaurantadd', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    //const {setNewAuthor} = newRestaurant;

    const handleChange = (e) => {
        setNewRestaurant({...newRestaurant, [e.target.Restaurant_ID]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewRestaurant({...newRestaurant, Restaurant_Image: e.target.files[0]});
    }

    const handleClick = (e) => {
        // submit new restaurant


    }

    return (

        
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>  
                <input
                // change to random id generator
                type="text"
                placeholder="Restaurant ID"
                name="RestaurantID"
                value={newRestaurant.Restaurant_ID}
                onChange={handleChange} />
            </div>
            
            <div>
                <input
                type="text"
                placeholder="Restaurant Name"
                name="RestaurantName"
                value={newRestaurant.Restaurant_Name }
                onChange={handleChange} />
            </div>
            <div>
                <input
                type="text"
                placeholder="Restaurant Email"
                name="RestaurantEmail"
                value={newRestaurant.Restaurant_Email}
                onChange={handleChange} />
            </div>
            <div>
                <input
                type="text"
                placeholder="Restaurant Address"
                name="RestaurantAddress"
                value={newRestaurant.Restaurant_Address}
                onChange={handleChange} />
            </div>
            <div>
                <input
                type="text"
                placeholder="Restaurant Phone Number"
                name="RestaurantPhoneNumber"
                value={newRestaurant.Restaurant_Phone_Number}
                onChange={handleChange} />
            </div>
            <div>
                <input
                type="text"
                placeholder="Restaurant Rating"
                name="RestaurantRating"
                value={newRestaurant.Restaurant_Rating}
                onChange={handleChange} />
            </div>
            <div>
                <input
                type="text"
                placeholder="Restaurant Capacity"
                name="RestaurantCapacity"
                value={newRestaurant.Restaurant_Capacity}
                onChange={handleChange} />
            </div>
            
            <div>
                <input onClick={handleClick} type="submit"/>
            </div>
            
        </form>
    );    
}
/*
            <div>
                <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="RestaurantImage"
                value={newRestaurant.Restaurant_Image}
                onChange={handlePhoto} />
            </div>
            
/*
function RestaurantAdd() {
    return (
        <Container>
            <table>
                <th>
                    <h1>Add Restaurant Details</h1>
                </th>
                <th>
                    <LinkContainer to="/Restaurant">
                        <Nav.Link>Back</Nav.Link>
                    </LinkContainer>
                </th>
            </table>

            <Container>

                <Form>
                    <Form.Group className="">
                        <Form.Label>Restaurant Name</Form.Label>
                        <Form.Control type="" placeholder="Enter Restaurant Name"/>
                        <Form.Label>Restaurant Email</Form.Label>
                        <Form.Control type="" placeholder="Enter Restaurant Email"/>
                        <Form.Label>Restaurant Address</Form.Label>
                        <Form.Control placeholder="Enter Restaurant Address"/>
                        <Form.Label>Restaurant Contact Number</Form.Label>
                        <Form.Control placeholder="Enter Contact Number"/>
                        <Form.Label>Restaurant Capacity</Form.Label>
                        <Form.Control placeholder="Enter Restaurant Capacity"/>
                        <Form.Label>Restaurant Image</Form.Label>
                        <Form.Control type="file" />
                        <button type="submit">Add Restaurant</button>

                    </Form.Group>
                </Form>
                
            </Container>
        </Container>

    );
}
*/
export default RestaurantAdd;