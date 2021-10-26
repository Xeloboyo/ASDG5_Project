import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

import './takeaway.css';

const Takeaway = () => {
    const [takeaway, setTakeaway] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5002/restaurant/')
          .then(response => {
              console.log(response.data)
              setTakeaway(response.data)
          })
      },[])
      if(takeaway.length > 0){
    return (
        <div>
            <h1 id="restaurants">Restaurants</h1>
            <ul class="restlist"> 
                {
                    takeaway.map(item => (
                        <li><Link class="restlink"  to={`/takeaways/${item.Restaurant_Name}`}>{item.Restaurant_Name}</Link></li>
                    ))
                }
                
            </ul>
        </div>
    )} else {
        return null
    }
}

export default Takeaway
