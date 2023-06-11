import axios from "axios";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getHelloWorldBean,
  getHelloWorldPathVariable,
} from "../api/ApiService";
import { useAuth } from "../security/AuthContext";

function Welcome() {
  const { username } = useParams();
  const [helloWorldBean, setHelloWorldBean] = useState("");
  const [helloWorldPathVar, setHelloWorldPathVar] = useState("");
  const authContext = useAuth();

  function CallHelloWorld() {
    return (
      <>
        <div className="text-info">{helloWorldBean}</div>
        <div className="text-info">{helloWorldPathVar}</div>
      </>
    );
  }

  function handleClick() {
    getHelloWorldBean()
      .then((response) => {
        console.log(response);
        setHelloWorldBean(response.data.message);
      })
      .catch((error) => handleError(error))
      .finally(() => {
        console.log("Finally blocked has been reached.");
      });

    getHelloWorldPathVariable(username, authContext.token)
      .then((response) => {
        console.log(response);
        setHelloWorldPathVar(response.data.message);
      })
      .catch((error) => handleError(error))
      .finally(() => {
        console.log("Finally blocked has been reached.");
      });
  }

  function handleError(error) {
    setHelloWorldBean("An error occured. Check the console.");
    console.log(error);
  }

  return (
    <div className="Welcome">
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in!</p>
      <p>
        Your todos are <Link to="/todos">here</Link>
      </p>

      <CallHelloWorld></CallHelloWorld>
      <button className="btn btn-success m-5" onClick={handleClick}>
        Call Hello World API
      </button>
    </div>
  );
}

export default Welcome;
