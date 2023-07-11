import React from "react";
import { Facebook, Google, Twitter } from "react-bootstrap-icons";
import "../../styles/login.css";

function Login() {
  return (
    <div className="login_main">
      <div class="container" id="rootContainer">
        <div class="sign-up">
          <form>
            <h1>Create an Account</h1>
            <div class="social-container">
              <a href="" class="social-icon">
                <Facebook />
              </a>
              <a href="" class="social-icon">
                <Google />
              </a>
              <a href="" class="social-icon">
                <Twitter />
              </a>
            </div>
            <p>or register here with your email</p>
            <input
              type="text"
              name="txtName"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="txtEmail"
              placeholder="name@example.com"
              required
            />
            <input
              type="password"
              name="txtPassword"
              placeholder="Password"
              required
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="sign-in">
          <form>
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="" class="social-icon">
                <Facebook />
              </a>
              <a href="" class="social-icon">
                <Google />
              </a>
              <a href="" class="social-icon">
                <Twitter />
              </a>
            </div>
            <p>or use your credentials</p>
            <input
              type="email"
              name="txtEmail"
              placeholder="name@example.com"
              required
            />
            <input
              type="password"
              name="txtPassword"
              placeholder="Password"
              required
            />
            <a href="">Forgot Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-data-container">
          <div class="overlay">
            <div class="left-overlay">
              <h1>Hey Buddy</h1>
              <p>To connected with us please login</p>
              <button
                id="signin"
                onClick={() => {
                  document
                    .getElementById("rootContainer")
                    .classList.remove("right-side-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div class="right-overlay">
              <h1>Hello!</h1>
              <p>To register please enter your personal details</p>
              <button
                id="signup"
                onClick={() => {
                  document
                    .getElementById("rootContainer")
                    .classList.add("right-side-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
