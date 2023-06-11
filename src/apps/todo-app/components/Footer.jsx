import React from "react";
import { useAuth } from "../security/AuthContext";

function Footer() {
  const auth = useAuth();

  return (
    <footer className="footer">
      <div className="container">
        <hr />
        Footer {auth.number}
        <hr />
      </div>
    </footer>
  );
}

export default Footer;
