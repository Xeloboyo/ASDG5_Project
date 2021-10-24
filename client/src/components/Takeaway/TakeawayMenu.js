import React, {useState, useEffect} from 'react'
import { useParams} from "react-router-dom";
import axios from "axios";

const TakeawayMenu = () => {
    const { id } = useParams();
    console.log(id)
    const [menu, setMenu] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5002/takeaway/${id}`)
          .then(response => {
              console.log(response.data)
              setMenu(response.data)
          })
      },[])
    //add items to cart
      const addToCart = (item) => {
        let localCartItems = JSON.parse(localStorage.getItem("cart"));
  if (localCartItems) {
    const filterItem = localCartItems.find(
      (cartItem) => item._id === cartItem._id
    );
    if (filterItem) {
      filterItem.qty++;
      localStorage.setItem("cart", JSON.stringify(localCartItems));
    } else {
      item.qty = 1;
      localStorage.setItem("cart", JSON.stringify([...localCartItems, item]));
    }
  } else {
    item.qty = 1;
    localStorage.setItem("cart", JSON.stringify([item]));
  }
          

      }
      if(menu.length > 0){
    return (
        <div>
            <ul>
            {menu.map(item => (
                <>
                <li>Product Name: {item.Menu_Product_Name} <button onClick={() => addToCart(item)}><i className="fas fa-plus-square"></i></button></li>
                <li>Product Description: {item.Menu_Product_Description}</li>
                <li>Product Price: ${item.Menu_Product_Price}</li>
                </>
            ))}
            </ul>

        </div>
    )}else {
        return null
    }
}

export default TakeawayMenu
