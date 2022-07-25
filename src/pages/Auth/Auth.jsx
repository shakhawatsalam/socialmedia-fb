import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction.js";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);
  //handleChange
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  //resetForm
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };
  return (
    <div className='Auth'>
      {/* Left Side  */}
      <div className='a_left'>
        <img src={Logo} alt='' />
        <div className='Webname'>
          <h1>Sk Media</h1>
          <h6>Explore The ideas throughout the world</h6>
        </div>
      </div>
      {/* Right Side  */}
      <div className='a_right'>
        <form className='infoForm authForm' onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                className='infoInput'
                type='text'
                name='firstname'
                id=''
                placeholder='First Name'
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                className='infoInput'
                type='text'
                name='lastname'
                id=''
                placeholder='Last Name'
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              type='text'
              name='username'
              className='infoInput'
              placeholder='username'
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='password'
              className='infoInput'
              name='password'
              value={data.password}
              onChange={handleChange}
              placeholder='password'
            />
            {isSignUp && (
              <input
                type='password'
                className='infoInput'
                name='confirmpass'
                placeholder='Confirm Password'
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}>
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}>
              {isSignUp
                ? "Already Have an Account. Loing!"
                : "Don't have an account? Sing Up"}
            </span>
          </div>
          <button className='button infoButton' type='submit' disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "SignUp" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
