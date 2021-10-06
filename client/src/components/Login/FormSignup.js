import React from "react";
import useForm from "./useForm";
import validate from "./valideInfo";
import "./Form.css";


const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, redirectRoute } = useForm(
    submitForm,
    validate
  );
    values.User_Category = "user";
    values.route = "/";
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below!
        </h1>
        

        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="User_Name"
            type="text"
            name="User_Name"
            className="form-input"
            placeholder="Enter your username"
            value={useForm.User_Name}
            onChange={handleChange}
          />
          {errors.User_Name && <p>{errors.User_Name}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="User_Email"
            type="email"
            name="User_Email"
            className="form-input"
            placeholder="Enter your email"
            value={useForm.User_Email}
            onChange={handleChange}
          />
          {errors.User_Email && <p>{errors.User_Email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="User_Password"
            type="password"
            name="User_Password"
            className="form-input"
            placeholder="Enter your password"
            value={useForm.User_Password}
            onChange={handleChange}
          />
          {errors.User_Password && <p>{errors.User_Password}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            id="User_Password2"
            type="password"
            name="User_Password2"
            className="form-input"
            placeholder="Confirm your password"
            value={useForm.User_Password2}
            onChange={handleChange}
          />
          {errors.User_Password2 && <p>{errors.User_Password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-redirectLogin">
          Already have an account? Login{" "}
          <a href="client/src/Component/LoginForm.js">here</a>.
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
