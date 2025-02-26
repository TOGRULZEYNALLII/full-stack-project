import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logincss.css";
import Saly from "./assets/Saly-1.svg";
import Icon from "../Sidebar/assets/icons/Icon.svg";
import Sally2 from "./assets/Saly-3.svg";
function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8088/api/AccountPage/Login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.message === "User logged in successfully") {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        // Immediately navigate to Home after successful login
        navigate("/Home");
      } else {
        setErrorMessage("Invalid credentials, please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred, please try again later.");
    }
  };

  return (
    <>
      <div className="blue-container">
        <div className="sign-in-container">
          <div className="sign-in-container-text">
            <p className="sign-in-container-text-p">
              Sign in <img className="blue-container-icon" src={Icon} />
            </p>

            <p className="welcome-back">Welcome Back!</p>
            <p className="sign-in-container-text-p-long">
              The login page provides access to sections like logistics,
              restaurant, and cryptocurrency. It includes fields for
              username/email and password, with a "Forgot Password" link.
              Security is ensured through encryption and optional multi-factor
              authentication, offering a smooth and secure login experience.
            </p>
          </div>
          <div className="sally1-container">
            <img src={Saly} />
          </div>
        </div>
      </div>
      <div className="sally2-container">
        <img src={Sally2} />
      </div>

      <div className="log-in-container">
        <div className="header-orbitnest-container">
          <p className="header-orbitnest">
            Welcome to <span className="header-orbitnest-blue">OrbitNest!</span>
          </p>
          <div className="noaccount-container">
            <p className="gray">No Account ?</p>
            <button
              className="register-button-inloginpage"
              onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
        <div>
          <p className="log-in-container-bold-big">Sign in</p>
        </div>
        <div className="log-in-container-inputs">
          <div className="log-in-container-inputs-email">
            <p className="Enter-your-email-address">Enter your email address</p>
            <input
              className="input-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="log-in-container-inputs-email">
            <p className="Enter-your-email-address">Enter your Password</p>
            <input
              className="input-email"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>{errorMessage && <p className="error">{errorMessage}</p>}</div>
          <div>
            <button onClick={handleLogin} className="sign-in-button">
              Sign in
            </button>
          </div>
        </div>
      </div>
      {/* <div className="login-container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}

        <p>
          Don't have an account?
          <button onClick={() => navigate("/register")}>Register</button>
        </p>
      </div> */}
    </>
  );
}

export default LoginPage;
