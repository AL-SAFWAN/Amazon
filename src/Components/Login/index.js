import React, { useRef } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1></h1>
        <form action="">
          <h5>E-mail</h5>
          <input ref={emailRef} type="text" />
          <h5>Password</h5>
          <input ref={passwordRef} type="password" />
          <button onClick={signIn} className="login__singInButton">
            Sing In
          </button>
        </form>
        <p>
          By singing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see Our Privacy Notice, our Cookie Notice and our
          Interest-Based Ads Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
