import React, { useContext, useState } from "react";
import { createContext } from "react";
import { executeBasicAuthenticationService } from "../api/ApiService";
import { apiClient } from "../api/apiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  /*   function login(username, password) {
    if (username === "Ethan" && password === "password") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  } */

  async function login(username, password) {
    const basicAuthenticationToken =
      "Basic " + window.btoa(username + ":" + password);
    console.log("BAToken: " + basicAuthenticationToken);
    try {
      const response = await executeBasicAuthenticationService(
        basicAuthenticationToken
      );

      if (response.status == 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(basicAuthenticationToken);
        apiClient.interceptors.request.use((config) => {
          console.log("Configuring API Client... " + basicAuthenticationToken);
          config.headers.Authorization = basicAuthenticationToken;
          return config;
        });
        return true;
      } else {
        unauthenticate();
        return false;
      }
    } catch (error) {
      unauthenticate();
      return false;
    }
  }

  function unauthenticate() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  function logout() {
    unauthenticate();
  }

  // setInterval(() => setNumber(number + 1), 3000);

  const valueToBeShared = {
    isAuthenticated,
    setAuthenticated,
    login,
    logout,
    username,
  };

  return (
    <AuthContext.Provider value={valueToBeShared}>
      {children}
    </AuthContext.Provider>
  );
}
