export default function validateInfo(values){
    let errors = {};


    if(!values.email){
        errors.email = "Email required";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid";
    }//email

    if(!values.password){
        errors.password = "Password is required";
    }else if(values.password.length < 5) {
        errors.password = "Password needs to be 5 characters or more";
    }//password

 
 return errors;
}