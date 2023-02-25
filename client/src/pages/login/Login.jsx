import React, { useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { loginCall } from "../../requests/defaultcall";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";


const Login = () => {
  
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch,user } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
    if(localStorage.getItem("user")){
      history.push("/");
    }
    

  };
  useEffect(()=>{
      if(user){
        console.log("pushed in history");
        history.push("/");
      }
  },[])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleClick} className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  ref={username}
                  placeholder="username"
                  required="yes"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  ref={password}
                  placeholder="Password"
                  id="id_password"
                  required="yes"
                />
              </div>

              <a className="pass" href="#">
                Forgot your password?
              </a>
              <button type="submit" value="Sign in" className="btn solid">Submit</button>
              <p className="social-text">You can login with:</p>
              <div className="social-media">
                <a
                  href="#"
                  className="social-icon"
                  aria-label="Register with Google"
                >
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h2>You don't have an account?</h2>
              <p>
                Create your account right now to get your doubts cleared in no time!
              </p>
              <Link to="/signup">
                <button className="btn transparent" id="sign-up-btn">
                 Signup
                </button>
              </Link>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Login;
