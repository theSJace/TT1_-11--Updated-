import React, { useRef } from "react";
import Card from "../components/ui/Card";
import classes from "./NewMeetupForm.module.css";
// import { useRef } from "react";

const LoginForm = (props) => {
  const userIDInputRef = useRef();
  const passwordInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUserID = userIDInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      email: enteredUserID,
      password: enteredPassword,
    };
    props.onLogin(loginData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Login ID</label>
          <input type="email" id="userID" required ref={userIDInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
 
        <div className={classes.actions}>
          <button>Log In</button>
          <button href="/signup">Sign Up</button>
        </div>
      </form>
    </Card>
  );
};
export default LoginForm;
