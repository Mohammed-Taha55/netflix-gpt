export const checkValidateData = (email, password) => {
const isEmilValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=\S+$).{8,20}$/.test(password);
if(!isEmilValid) return "Email is not valid";
if(!isPasswordValid) return "password is not valid";
return null;
};