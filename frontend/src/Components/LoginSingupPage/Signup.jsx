import React, { useState } from "react";
import "./CSS/Signup.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import signuImage from "./images/pets3.png";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { Firstname, Lastname, email, password };
    fetch("https://tiny-red-armadillo-cape.cyclic.cloud/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // console.log(user);
  };

  return (
    <div className="main-container">
      <div className="signup-main">
        <div className="signp-image">
          <img src={signuImage} alt="" />
        </div>
        <div className="signup-container">
          <div className="signup-header">
            <div>
              <h2>Sign Up</h2>
            </div>
          </div>
          <form id="signup-form" onSubmit={handleSignup}>
            <div className="name-fields">
              <div className="user-input-wrp">
                <input
                  className="inputText"
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={Firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <span className="floating-label">First Name</span>
              </div>
              <div className="user-input-wrp">
                <input
                  className="inputText"
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={Lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                <span className="floating-label">Last Name</span>
              </div>
            </div>

            <div className="user-input-wrp email-field">
              <input
                className="inputText"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="floating-label">Email</span>
            </div>

            <div className="user-input-wrp password-field">
              <div>
                <input
                  className="inputText"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="floating-label">Password</span>
                <div className="password-toggle" onClick={handleTogglePassword}>
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
            </div>

            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <p className="login-text">
            Already have an Account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
