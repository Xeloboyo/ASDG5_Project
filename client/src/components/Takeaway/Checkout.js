import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import toast from "react-hot-toast";

import './takeaway.css';

    //show menu items and their quantity- done
    //Total price- done
    //form to enter useremail and username, also payment details- done
    //creditcard details- Credit Card Name, Credit Card Number, Credit Card CVC- done
    //checkout button to submit order- done
    
const Checkout = () => {
    let history = useHistory();
    const checkoutItems = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    let qty = 0;
    let menuItems = []
    checkoutItems.forEach(item => {
        menuItems = [...menuItems, item.Menu_Product_Name]
        qty += item.qty;
        total += item.qty*item.Menu_Product_Price
    })

      // Initial state
  const initialState = {
    Product_UserName: "",

      Product_UserEmail: "",
  
      Product_CreditCardName: "",
  
      Product_CreditCardNumber: "",
  
      Product_CreditCardCVC: "",
  }

  const [values, setValues] = useState(initialState)

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
        .post("http://localhost:5002/takeaway/checkout", {...values, Product_Quantity: qty, Product_TotalPrice: total, Product_menuItems: menuItems})
        .then((res) => {
            console.log(res.data)
        })
    localStorage.removeItem("cart")
    history.push("/")
    toast.success("Your order has been submitted!");
    setValues(initialState)
  }
    
    return (
        <div>
            <h1 class="cart">Checkout Cart</h1>
            <h3>Added items</h3>
            <ul>
            {checkoutItems && checkoutItems.map(item => (
                <><li class="items">{`Product Name: ${item.Menu_Product_Name}`}</li>
                <li class="items2">{`Product Quantity: ${item.qty}`}</li></>
            ))}
            </ul>
            <p class="price" >Total Price: ${total}</p>

            <h3 class="instruct" >Fill in to complete order</h3>
            <form onSubmit={handleSubmit}>           
                <div class="details" >
                    <label class="labels" htmlFor="Product_UserName">Name </label>
                    <input type="text" id="Product_UserName" onChange={handleInputChange} value={values.Product_UserName} placeholder="Enter Name" />
                </div>
                <div class="details" >
                    <label class="labels" htmlFor="Product_UserEmail">Email </label>
                    <input type="email" id="Product_UserEmail" onChange={handleInputChange} value={values.Product_UserEmail} placeholder="Enter Email" />
                </div>
                <div class="details" >
                    <label class="labels" htmlFor="Product_CreditCardName">Credit Card Name </label>
                    <input type="text" id="Product_CreditCardName" onChange={handleInputChange} value={values.Product_CreditCardName} placeholder="Enter Credit Card Name" />
                </div>
                <div class="details" >
                    <label class="labels" htmlFor="Product_CreditCardNumber">Credit Card Number </label>
                    <input type="number" id="Product_CreditCardNumber" onChange={handleInputChange} value={values.Product_CreditCardNumber} placeholder="Enter Credit Card Number" />
                </div>
                <div class="details" >
                    <label class="labels" htmlFor="Product_CreditCardCVC">Credit Card CVC </label>
                    <input type="text" id="Product_CreditCardCVC" onChange={handleInputChange} value={values.Product_CreditCardCVC} placeholder="Enter Credit Card CVC" />
                </div> 

                <button class="checkoutbutton" >Order</button>              
            </form>
        </div>
    )
}

export default Checkout

    