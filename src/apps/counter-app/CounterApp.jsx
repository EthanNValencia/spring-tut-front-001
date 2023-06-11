import React from "react";
import CounterButtons from "./CounterButtons";
import { useState } from "react";
import Reset from "./Reset";

function CounterApp() {
  const [count, setCount] = useState(0);

  function incrementCount(countBy) {
    var newCount = count + countBy;
    setCount(newCount);
  }

  function decrementCount(countBy) {
    var newCount = count - countBy;
    setCount(newCount);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      Counting App: {count}
      <CounterButtons
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <CounterButtons
        countBy={3}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <CounterButtons
        countBy={10}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <Reset resetCount={resetCount} />
    </div>
  );
}

export default CounterApp;
