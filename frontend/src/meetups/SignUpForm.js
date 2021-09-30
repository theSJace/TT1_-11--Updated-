import React, { useRef } from "react";
import Card from "../components/ui/Card";
import classes from "./NewMeetupForm.module.css";
// import { useRef } from "react";

const SignUpForm = (props) => {
  const userIDInputRef = useRef();
  const passwordInputRef = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const postal_code = useRef();
  const gender = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUserID = userIDInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredfirst_name = first_name.current.value;
    const enteredlast_name = last_name.current.value;
    const enteredpostal_code = postal_code.current.value;
    const enteredgender = gender.current.value;

    const signUpData = {
      email: enteredUserID,
      password: enteredPassword,
      first_name: enteredfirst_name,
      last_name: enteredlast_name,
      postal_code: enteredpostal_code,
      gender: enteredgender
    };
    props.onSignUp(signUpData);
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
        <div className={classes.control}>
          <label htmlFor="title">First Name</label>
          <input type="text" id="first_name" required ref={first_name} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Last Name</label>
          <input type="text" id="last_name" required ref={last_name} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Postal Code</label>
          <input type="text" id="postal_code" required ref={postal_code} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Gender</label>
          <input type="text" id="gender" required ref={gender} />
        </div>
 
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
    </Card>
  );
};
export default SignUpForm;
