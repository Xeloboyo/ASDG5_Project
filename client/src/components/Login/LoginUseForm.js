import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Context } from "../Reservations/Store";

const LoginUseForm = (callback, validate) => {
  const [state, dispatch] = useContext(Context);
  let history = useHistory();
  const [values, setValues] = useState({
    User_Email: "",
    User_Password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the page from refreshing after clicking login
    const { User_Email, User_Password, User_Category } = values;
    if (User_Email && User_Password) {
      axios.post("http://localhost:5002/login", values).then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "profile",
          JSON.stringify(res.data.result.User_Name)
        ); //saves data to local storage
        localStorage.setItem(
          "position",
          JSON.stringify(res.data.result.User_Category)
        );
        localStorage.setItem("id", JSON.stringify(res.data.result._id));
      });
    } else {
      console.log("error");
    }
    dispatch({
      type: "USER_SESSION_LOGIN",
      payload: {
        name: User_Email,
        type: User_Category,
      },
    });
    console.log(User_Category);
    if (User_Category === "user") {
      history.push("/");
    } else if (User_Category === "restaurant_owner") {
      history.push("/restaurant");
    } else {
      history.push("/adminhomenav");
    } //change routes here if needed
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    } //ensures user has filled in the form before submission is available
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default LoginUseForm;

//updates the values
