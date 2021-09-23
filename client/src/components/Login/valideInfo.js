export default function validateInfo(values){
    let errors = {};

    if(!values.username.trim()){
        errors.username = "Username required";
    }//username

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

    if(!values.password2){
        errors.password2 = "Password is required"
    }else if(values.password2 !== values.password){
        errors.password2 = "Passwords do not match";
    }//confirm password

 return errors;
}









//validates registration form