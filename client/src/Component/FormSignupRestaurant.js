import React from "react";
import useForm from "./useForm";
import validate from "./valideInfo";
import "./Form.css";

const FormSignupRestaurant = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Create your restaurant management account by filling out the
          information below!
        </h1>
        {/* <div className="form-inputs">
          <label htmlFor="UserType" className="form-label">
            Who would you like to register as?
          </label>
          <select
            class="dropdown"
            id="username"
            type="text"
            name="username"
            className="form-input"
          >
            <option value="customer">Customer</option>
            <option value="staff">Restaurant Staff</option>
            value={values.username}
            onChange={handleChange}
            {errors.username && <p>{errors.username}</p>}
          </select>
        </div> */}

        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="venue" className="form-label">
            Restaruant Name
          </label>
          <input
            id="venue"
            type="text"
            name="venue"
            className="form-input"
            placeholder="Enter your restaurant name"
            value={values.venue}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
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

export default FormSignupRestaurant;