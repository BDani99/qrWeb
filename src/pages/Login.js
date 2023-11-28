// Login.js

import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Itt végezheted el a bejelentkezési logikát
    console.log("Bejelentkezés:", email, password);
  };

  return (
    <div className="container">
      <h2 className="title2">Bejelentkezés</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Jelszó"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Bejelentkezés
      </button>
    </div>
  );
};

export default Login;
