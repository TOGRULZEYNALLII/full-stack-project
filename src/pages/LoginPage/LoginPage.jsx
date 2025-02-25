import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="login-container">
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

      {/* Add register link/button instead */}
      <p>
        Don't have an account?
        <button onClick={() => navigate("/register")}>Register</button>
      </p>
    </div>
  );
}

export default LoginPage;
