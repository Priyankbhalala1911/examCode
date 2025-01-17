let password = "Test@123";

let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&])([A-Za-z\d!@#$%&]{6,14})$/;

if(pattern.test(password)){
    console.log("Password is valid");
}
else{
    console.log("Password is not valid");
}