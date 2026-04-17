import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "./login.css";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(username, password);
    if (!ok) setError("Invalid credentials");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
