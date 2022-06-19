import React from "react";
import useLocalStorage from "use-local-storage";

import "./Style/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginForm">
        <div className="container">
          <h1>Login</h1>
          <form>
            <label>Email</label>

            <input 
              type="email" 
              name="email" 
              placeholder="Masukkan Email..." 
              required
              />
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Masukkan Password..."
              required
            />

            <button type="submit">Login</button>
          </form>

          <a href="/">
            <u>Register</u>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
