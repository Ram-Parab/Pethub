import React, { useState } from "react";
import "./CSS/Login.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import signuImage from "./images/pets4.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from 'sonner';

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

    const loadingToast = toast.loading('Logging in...');
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.dismiss(loadingToast);
        console.log("Login response:", res);
        if (res.error) {
          toast.error(res.error);
        } else if (res.msg === "user does not exist") {
          toast.error(res.msg);
        } else if (res.err) {
          toast.error("Invalid credentials");
        } else {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify({
            name: res.user,
            email: email
          }));
          toast.success('Login successful!');
          navigate("/");
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      })
      .catch((err) => {
        toast.dismiss(loadingToast);
        toast.error('Invalid credentials or server error');
      });
  };

  return (
    <div className="main-container">
      <Toaster position="bottom-center" richColors />
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
          <form id="login-form" onSubmit={handleLogin}>
            <div className="input-group user-input-wrp">
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
            <div className="input-group user-input-wrp password-container">
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
              Login
            </button>
          </form>
          <p className="login-text">
            Don't have an Account? <Link to="/signup">Signup here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
