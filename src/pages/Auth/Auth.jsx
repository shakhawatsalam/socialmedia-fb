import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className='Auth'>
      <div className='a_left'>
        <img src={Logo} alt='' />
        <div className='Webname'>
          <h1>Sk Media</h1>
          <h6>Explore The ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn/>
    </div>
  );
};

// LogIN form
function LogIn() {
  return (
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h3>Log In</h3>

        <div>
          <input
            type='text'
            placeholder='Username'
            className='infoInput'
            name='username'
          />
        </div>

        <div>
          <input
            type='password'
            className='infoInput'
            placeholder='Password'
            name='password'
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className='button infoButton'>Login</button>
        </div>
      </form>
    </div>
  );
}
// signUp form
function SignUp() {
  return (
    <div className='a_right'>
      <form className='infoForm authForm'>
        <h3>Sign Up</h3>
        <div>
          <input
            className='infoInput'
            type='text'
            name='firstname'
            id=''
            placeholder='First Name'
          />
          <input
            className='infoInput'
            type='text'
            name='lastname'
            id=''
            placeholder='Last Name'
          />
        </div>
        <div>
          <input
            type='text'
            name='username'
            className='infoInput'
            placeholder='username'
          />
        </div>
        <div>
          <input
            type=''
            className='infoInput'
            name='passoword'
            placeholder='password'
          />
          <input
            type=''
            className='infoInput'
            name='confirmpassoword'
            placeholder='Confirm Password'
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already Have an Account. Loing!
          </span>
        </div>
        <button className='button infoButton' type='submit'>
          SignUp
        </button>
      </form>
    </div>
  );
}
export default Auth;
