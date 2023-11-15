import { React, useState, useEffect } from "react";
import Logo from "../images/login-logo.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../firebase";
import { useAuth } from "../Contextt/GloballState";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { dispatch } = useAuth();
  useEffect(() => {
    Auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState([]);
  const Navigate = useNavigate();
  // const signIn = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(Auth, email, password).then((Auth) => {
  //     if (Auth) {
  //       Navigate("/");
  //     }
  //   });
  // };
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(Auth, email, password)
      .then((Auth) => {
        if (Auth) {
          Navigate("/");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-signInBtn"
            type="submit"
            // onClick={signIn}
          >
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
