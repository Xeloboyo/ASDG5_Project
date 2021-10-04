import React, { useState } from 'react';
import FormSignUpRestaurant from './FormSignUpRestaurant';
import FormSuccess from './FormSuccess';
import './Form.css';
  
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img
            className="form-img"
            src="img/restaraunt1.jpg"
            alt="restaraunt"
          />
        </div>
        {!isSubmitted ? (
          <FormSignUpRestaurant submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
