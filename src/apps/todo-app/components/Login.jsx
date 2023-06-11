import React, { useState } from "react";
import { useAuth } from "../security/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("Ethan");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    // authContext.login(username, password);
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`); // routes to welcome page.
    }
  }

  return (
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>
          <button type="button" name="login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
