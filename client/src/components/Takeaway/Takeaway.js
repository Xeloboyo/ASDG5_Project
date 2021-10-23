import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

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
            <ul> 
                {
                    takeaway.map(item => (
                        <li><Link to={`/takeaways/${item.Restaurant_Name}`}>{item.Restaurant_Name}</Link></li>
                    ))
                }
                
            </ul>
        </div>
    )} else {
        return null
    }
}

export default Takeaway
