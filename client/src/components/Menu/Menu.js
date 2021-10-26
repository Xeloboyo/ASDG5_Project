import axios from "axios";
import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import './Menu.css';
import Button from "react-bootstrap/Button";

const MenuList = props =>(
    <tr>
      <td>{props.menu.Restaurant_Name}</td>
      <td>{props.menu.Menu_Product_Name}</td>
      <td>{props.menu.Menu_Product_Description}</td>
      <td>{props.menu.Menu_Product_Price}</td>
      { (localStorage.position !== undefined) ? (
            (localStorage.position.slice(1, -1) == "admin" || localStorage.position.slice(1, -1) == "restaurant_owner") ? (
            <td>
                <Link to={"/menuedit/"+props.menu._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.menu._id) }}>delete</a>
            </td>
          ) : (<p> herrro</p>)
      ) : (<p></p>)
           }
    </tr>
  )

export default class Menu extends Component {
    // constructor
    constructor(props){
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);
        this.onChangeRestaurantName = this.onChangeRestaurantName.bind(this);

        this.state = {
            menu: [],
            Restaurant_Name: '',
            Menu_Product_Name: '',
            Menu_Product_Description: '',
            Menu_Product_Price: 0,
            RestaurantDowndrop: '',
            search: "",
        }
    }

    onChangeRestaurantName = async (e, eventKey) => {
        const select = {RestaurantDowndrop: e};
        console.log(select);
    }

    searchFunction = async (search1) => {
        const restaurantName = { search: search1};
        console.log(search1);

        /*try{
            const response = await fetch("http://localhost:5002/restaurant/getrestaurant", {
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify(restaurantName),
            });
            const jsonData = await response.json();
            console.log(`${jsonData.message}`);
        } catch (err) {
            console.error(err.message);
        }*/
    };

    // get the list of products
    componentDidMount() {
        axios.get('http://localhost:5002/menu/')
            .then(response => {
                this.setState({
                    menu: response.data,
                })
            })
    }   

    // delete product
    deleteProduct(id) {
        axios.delete('http://localhost:5002/menu/'+id)
            .then(res => console.log(res.data));
        this.setState({
            menu: this.state.menu.filter(el => el._id != id)
        })
    }

    // menuList
    menuList(){
        return this.state.menu.map(currentMenu => {
            return <MenuList menu={currentMenu} deleteProduct={this.deleteProduct} key={currentMenu._id}/>
        })
    }

    render(){
        return(
        <Container>
            
            <table class="button">
                <tr>
                    <th>
                        <h1>View Restaurant Menu and Products</h1> 
                    </th>
                    <th> { (localStorage.position !== undefined) ? (
                        (localStorage.position.slice(1, -1) == "admin" || localStorage.position.slice(1, -1) == "restaurant_owner") ? (
                            <LinkContainer to="/menuadd">
                            <Button>Add Product</Button>
                        </LinkContainer>
                          ) : ( <p> heeor</p> )
                    ) : ( <p></p>)
                        }    
                    </th>
                    <th>
                        <LinkContainer to="/Restaurant">
                            <Button>Back</Button>
                        </LinkContainer>
                    </th>
                </tr>
            </table>
            
            
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Restaurant Name</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.menuList() }
          </tbody>
        </table>
            
        </Container>
        )
    }
}