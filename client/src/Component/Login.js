import React, {useState} from 'react'
import LoginForm from "./LoginForm";
import './Login.css'
import Homepage from './Home/Homepage';

const Login = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function LoginSubmitForm(){
        setIsSubmitted(true);
    }
    return (
        <>
          <div className='form-container-login'>
            {!isSubmitted ? (
              <LoginForm LoginSubmitForm={LoginSubmitForm} />
            ) : (
              <Homepage />
            )}
          </div>
        </>
      );
    };
    
    export default Login;