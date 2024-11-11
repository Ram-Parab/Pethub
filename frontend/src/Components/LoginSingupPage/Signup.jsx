import React, { useState } from "react";
import "./CSS/Signup.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import signuImage from "./images/pets3.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from 'sonner';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { FirstName, LastName, email, password };

    const loadingToast = toast.loading('Creating your account...');
    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.dismiss(loadingToast);
        if (res.error) {
          toast.error(res.error);
        } else if (res.msg === "email already exist") {
          toast.error(res.msg);
        } else {
          toast.success('Account created successfully!');
          navigate('/login');
        }
      })
      .catch((err) => {
        toast.dismiss(loadingToast);
        toast.error('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="main-container">
      <Toaster position="bottom-center" richColors />
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
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
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
