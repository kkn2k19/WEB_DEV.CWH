/*
4. The Password Validator:
   You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
*/

let pass = "Karan@123"

function passValidator(pass) {
    if((pass.length >= 8) && (/[A-Z]/.test(pass)) && (/[a-z]/.test(pass)) && (/[0-9]/.test(pass))){
        return "Password is valid";
    } 
    return "Password is not valid";
}

console.log(passValidator("Password123")); 
// Password is valid

console.log(passValidator("Pass123")); 
//Password is not valid

console.log(passValidator("password123"));
//Password is not valid
   
console.log(passValidator("PASSWORD123"));
//Password is not valid
   
console.log(passValidator("Password"));  
//Password is not valid
   