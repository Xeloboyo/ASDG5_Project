import {useState, useEffect} from "react";
import axios from "axios";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        User_Name: "",
        User_Dob:"",
        venue:"",
        User_Email: "",
        User_password: "",
        User_password2: ""
    });

    

    const registered = {
      User_Name: useForm.User_Name,
      User_Dob: useForm.User_Dob,
      User_Email: useForm.User_Email,
      User_Password: useForm.User_Password,
      User_Password2: useForm.User_Password2,
    }

    axios.post("http://localhost:5002/register/form", useForm)
      .then(response => console.log(response.data))
      
      // useForm.setState({
      //   User_Name: "",
      //   User_Dob:"",
      //   venue:"",
      //   User_Email: "",
      //   User_password: "",
      //   User_password2: ""
      // })

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
        e.preventDefault(); //prevents the page from refreshing after clicking signup

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
    
    export default useForm;
  
//updates the values