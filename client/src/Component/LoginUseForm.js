import {useState, useEffect} from "react";

const LoginUseForm = (callback, validate) => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
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