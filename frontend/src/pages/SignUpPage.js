import { Redirect } from "react-router-dom";
import SignUpForm from "../meetups/SignUpForm";
const axios = require("axios");

const SignUpPage = () => {

  const signUpHandler = (signUpData) => {
    console.log('Signup');
    console.log(signUpData);
    axios
      .post("http://localhost:8001/signup", signUpData)
      .then(function (response) {
        console.log(response);
        console.log(response.data.verified);
        if (response.status === 201) {
            console.log("Registered");
            window.location.replace("/dashboard");
          } else {
            console.log("Signup Failed");
          }
   
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <section>
      <h1>Sign Up</h1>
      <SignUpForm onSignUp={signUpHandler}/>
    </section>
  );
};

export default SignUpPage;
