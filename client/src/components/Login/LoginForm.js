import React from 'react'
import LoginUseForm from './LoginUseForm';
import Loginvalidate from './LoginValideInfo';
import './Login.css'

// ricky felix file

const FormLogin = ({LoginSubmitForm}) => {
    const {handleChange, values, handleSubmit, errors} = LoginUseForm(
        LoginSubmitForm,
        Loginvalidate
    );

    return (
        <div>
            <div className="form-content-login">
                <form className="form-login">
                    <h1>Login</h1>
                    <div className="form-inputs-login">
                        <label htmlFor="email" className="form-label-login">
                        Email
                        </label>
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            className="form-input-login"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="form-inputs-login">
                        <label htmlFor="password" className="form-label-login">   
                        Password                         
                        </label>
                        <input 
                            id="email"
                            type="password"
                            name="password"
                            className="form-input-login"
                            placeholder="Enter your Password"
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
