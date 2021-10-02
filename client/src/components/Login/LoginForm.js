import React from 'react'
import LoginUseForm from './LoginUseForm';
import Loginvalidate from './LoginValideInfo';
import './Login.css'



const FormLogin = ({LoginSubmitForm}) => {
    const {handleChange, values, handleSubmit, errors} = LoginUseForm(
        LoginSubmitForm,
        Loginvalidate
    );

    return (
        <div>
            <div className="form-content-login">
                <form onSubmit={handleSubmit} className="form-login">
                    <h1>Login</h1>
                    <div className="form-inputs-login">
                        <label htmlFor="email" className="form-label-login">
                        Email
                        </label>
                        <input 
                            id="User_Email"
                            type="email"
                            name="User_Email"
                            className="form-input-login"
                            placeholder="Enter your Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-inputs-login">
                        <label htmlFor="password" className="form-label-login">   
                        Password                         
                        </label>
                        <input 
                            id="User_Password"
                            type="password"
                            name="User_Password"
                            className="form-input-login"
                            placeholder="Enter your Password"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="form-input-btn-login" type="submit">
                        Login
                    </button>
                    <span className="form-input-register">
                        Dont have an account? Register <a href="client/src/Component/FormSignup.js">here</a>.
                    </span>
                </form>
            </div>
        </div>
    );
};


export default FormLogin;
