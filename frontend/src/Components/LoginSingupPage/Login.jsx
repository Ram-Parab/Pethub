import React, { useState } from "react";
import "./CSS/Login.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import signuImage from "./images/pets4.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    fetch("https://tiny-red-armadillo-cape.cyclic.cloud/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("user", JSON.stringify(user.email));
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
    // console.log(user);
  };

  return (
    <div className="main-container">
      <div className="login-main">
        <div className="login-image">
          <img src={signuImage} alt="" />
        </div>
        <div className="login-container">
          <div className="login-header">
            <div>
              <h2>Login</h2>
            </div>
          </div>
          {/* <div className="login-social">
            <span className="google">
              <FcGoogle />
              <span>Google</span>
            </span>
            or
            <span className="facebook">
              <BsFacebook />
              <span>Facebook</span>
            </span>
          </div> */}
          <form id="login-form" onSubmit={handleLogin}>
            <br />
            <div className="input-group user-input-wrp">
              <br />
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
            <br />
            <div className="input-group user-input-wrp password-container">
              <br />
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
              <br />
            </div>
            <br />
            <button type="submit" className="signup-button">
              Login
            </button>
          </form>
          <p className="login-text">
            Dont have an Account? <Link to="/signup">Signup here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
