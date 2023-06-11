import React from "react";
import "./Counter.css";

function Reset(props) {
  function handleClick() {
    props.resetCount();
  }

  return (
    <button className="resetBtn" onClick={handleClick}>
      Reset
    </button>
  );
}

export default Reset;
