"use client";
import "../login/login.css";
import Image from "next/image";
import bgImage from "../../../public/assets/meeting-room.png"; // untuk background image
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="register-box">
        <div className="logo-container">
          <div className="logo">E</div>
          <span className="logo-text">E-Meeting</span>
        </div>

        <h2 className="title">Welcome Back!</h2>
        <p className="subtitle">Create your Account here!</p>

        <form id="loginForm">
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="email"
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="input-field"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm Password"
              className="input-field"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* <div style={{ marginBottom: "24px" }}>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div> */}

          <button type="submit" className="login-button">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
