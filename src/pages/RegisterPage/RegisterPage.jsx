import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Saly from "../LoginPage/assets/Saly-1.svg";
import Sally2 from "../LoginPage/assets/Saly-3.svg";
function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Yönlendirme için useNavigate kullanıyoruz

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Şifrelerin eşleşip eşleşmediğini kontrol ediyoruz
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");  
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8088/api/AccountPage/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        navigate("/login"); // Kayıt başarılıysa login sayfasına yönlendiriyoruz
      } else {
        setErrorMessage(data.message || "An error occurred, please try again.");
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
            <p className="sign-in-container-text-p">Register </p>
            <p className="welcome-back">Welcome Back!</p>
            <p className="sign-in-container-text-p-long">
              The login page provides access to sections like logistics,
              restaurant, and cryptocurrency. It includes fields for
              username/email and password, with a "Forgot Password" link.
              Security is ensured through encryption and optional multi-factor
              authentication, offering a smooth and secure login experience.
            </p>
          </div>
          <div>
            <img src={Saly} />
          </div>
        </div>
      </div>
      <div className="sally2-container">
        <img src={Sally2} />
      </div>

      <div className="register-in-container">
        <div className="header-orbitnest-container">
          <p className="header-orbitnest">
            Welcome to <span className="header-orbitnest-blue">OrbitNest!</span>
          </p>
          <div className="noaccount-container">
            <p className="gray">Back to login</p>
            <button
              className="register-button-inloginpage"
              onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
        <div>
          <p className="register-container-bold-big">
            <span className="header-orbitnest-blue">Register</span> here for
            continue
          </p>
        </div>
        <div className="log-in-container-inputs-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="log-in-container-inputs-email-little">
              <p className="Enter-your-email-address">First Name</p>
              <input
                type="text"
                className="input-email"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="log-in-container-inputs-email-little">
              <p className="Enter-your-email-address">Last Name</p>
              <input
                type="text"
                className="input-email"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="log-in-container-inputs-email-little">
              <p className="Enter-your-email-address">Email</p>
              <input
                type="email"
                className="input-email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="log-in-container-inputs-email-little">
              <p className="Enter-your-email-address">Password</p>
              <input
                type="password"
                className="input-email"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="log-in-container-inputs-email-little">
              <p className="Enter-your-email-address">Repeat Password</p>
              <input
                type="password"
                className="input-email"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="sign-in-button" type="submit">
              Register
            </button>
          </form>
          {errorMessage && <p className="error red">{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
