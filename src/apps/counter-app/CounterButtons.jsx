import React from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";

function CounterButtons(props) {
  return (
    <div className="Counter">
      <span className="count">{props.count}</span>
      <div>
        <button
          className="counterBtn"
          onClick={() => props.incrementCount(props.countBy)}
        >
          +{props.countBy}
        </button>
        <button
          className="counterBtn"
          onClick={() => props.decrementCount(props.countBy)}
        >
          -{props.countBy}
        </button>
      </div>
    </div>
  );
}

CounterButtons.propTypes = {
  countBy: PropTypes.number,
};

CounterButtons.defaultProps = {
  countBy: 1,
};

export default CounterButtons;
