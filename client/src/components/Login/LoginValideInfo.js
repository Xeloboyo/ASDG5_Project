export default function validateInfo(values){
    let errors = {};


    if(!values.User_Email){
        errors.User_Email = "Email required";
    }else if(!/\S+@\S+\.\S+/.test(values.User_Email)){
        errors.User_Email = "Email address is invalid";
    }//email

    if(!values.User_Password){
        errors.User_Password = "Password is required";
    }else if(values.User_Password.length < 5) {
        errors.User_Password = "Password needs to be 5 characters or more";
    }//password

 
 return errors;
}