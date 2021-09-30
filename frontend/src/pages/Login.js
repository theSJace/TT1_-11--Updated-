import { Redirect } from "react-router-dom";
import LoginForm from "../meetups/LoginForm";
const axios = require("axios");

const LoginPage = () => {
  const loginHandler = (loginData) => {
    console.log(loginData);
    axios
      .post("http://localhost:8001/login", loginData)
      .then(function (response) {
        console.log(response);
        console.log(response.data.verified);
        if (response.data.verified) {
          console.log("LOGED IN");
          window.location.replace("/products");
        } else {
          console.log("wrong password");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section>
      <h1>Login</h1>
      <LoginForm onLogin={loginHandler}/>
    </section>
  );
};

export default LoginPage;
