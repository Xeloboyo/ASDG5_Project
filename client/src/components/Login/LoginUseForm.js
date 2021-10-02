import {useState, useEffect} from "react";
import axios from "axios";

const LoginUseForm = (callback, validate) => {
    const [values, setValues] = useState({
        User_Email: "",
        User_Password: "",
    }); console.log(values)
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({         
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault(); //prevents the page from refreshing after clicking login
        const { User_Email,  User_Password } = values;
        console.log(values)
        if (User_Email && User_Password) {
          axios
            .post("http://localhost:5002/login", values)
            .then((res) => console.log(res));
        } else {
          console.log("error")
        }
        setErrors(validate(values));
        setIsSubmitting(true);
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
    
    export default LoginUseForm;
  
//updates the values