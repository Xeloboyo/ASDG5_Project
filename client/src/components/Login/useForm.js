import {useState, useEffect} from "react";
import axios from "axios";
import * as api from "../../api"; //
import { useHistory } from "react-router-dom";

const useForm = (callback, validate) => {
  let history = useHistory();
    const [values, setValues] = useState({
        User_Name: "",
        venue:"",
        User_Email: "",
        User_password: "",
        User_password2: "",
        User_Category: "",
    });

    

    // const registered = {
    //   User_Name: useForm.User_Name,
    //   User_Email: useForm.User_Email,
    //   User_Password: useForm.User_Password,
    //   User_Password2: useForm.User_Password2,
    // }

    // axios.post(process.env, useForm)
    //   .then(response => console.log(response.data))
      
      // useForm.setState({
      //   User_Name: "",
      //   venue:"",
      //   User_Email: "",
      //   User_password: "",
      //   User_password2: ""
      // })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [route, setRoute] = useState("");

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({         
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault(); //prevents the page from refreshing after clicking signup
        const { User_Name, User_Email,  User_Password, route } = values;
        console.log(values)
        if (User_Name && User_Email && User_Password) {
          axios
            .post("http://localhost:5002/register/form", values)
            //.then((res) => console.log(res));
            .then((res) => {
              console.log(res.data)
              localStorage.setItem("profile", JSON.stringify(res.data))//saves data to local storage
            })
        } else {
          console.log("error")
        }
        setErrors(validate(values));
        setIsSubmitting(true);
        history.push(route);
    };

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(); 
          } //ensures user has filled in the form before submission is available
        },
        [errors] 
      ); 
    
      return { handleChange, handleSubmit, values, errors };
    };
    
    export default useForm;
  
//updates the values