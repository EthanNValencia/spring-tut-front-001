import React from "react";
import { useAuth } from "../security/AuthContext";

function Logout() {
  const authContext = useAuth();
  authContext.logout();

  return <div className="logout">You have been logged out.</div>;
}

export default Logout;
